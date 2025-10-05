from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils import timezone
from .models import ContactMessage
import json
import re
import time
from datetime import datetime, timedelta

def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def validate_email_advanced(email):
    """Advanced email validation"""
    # Basic format validation
    try:
        validate_email(email)
    except ValidationError:
        return False, "Invalid email format"

    # Check for valid email pattern
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if not re.match(email_pattern, email):
        return False, "Invalid email format"

    # Check for suspicious patterns
    if email.count('@') != 1:
        return False, "Invalid email format"

    # Check for consecutive dots
    if '..' in email:
        return False, "Invalid email format"

    # Check if email starts or ends with special characters
    if email[0] in '.@-_' or email[-1] in '.@-_':
        return False, "Invalid email format"

    # Check domain validity
    domain = email.split('@')[1]
    if len(domain) < 3 or '.' not in domain:
        return False, "Invalid email domain"

    # Check for disposable email domains
    disposable_domains = [
        'tempmail', 'throwaway', 'guerrillamail', '10minutemail',
        'mailinator', 'trashmail', 'deadaddress', 'sharklasers',
        'guerrillamail', 'getairmail', 'fakeinbox', 'yopmail',
        'mailnesia', 'mintemail', 'maildrop', 'throwawaymail'
    ]

    domain_lower = domain.lower()
    for disposable in disposable_domains:
        if disposable in domain_lower:
            return False, "Disposable email addresses are not allowed"

    return True, None

def calculate_spam_score(data, ip_address):
    """Calculate spam score based on various factors"""
    score = 0

    # Check for suspicious patterns in message
    message = data.get('message', '').lower()
    spam_keywords = ['viagra', 'casino', 'lottery', 'winner', 'click here',
                     'free money', 'guarantee', 'no obligation', 'act now']

    for keyword in spam_keywords:
        if keyword in message:
            score += 20

    # Check for excessive links
    url_pattern = r'https?://[^\s]+'
    urls = re.findall(url_pattern, message)
    if len(urls) > 3:
        score += 30

    # Check for all caps
    if message.isupper() and len(message) > 20:
        score += 15

    # Check for excessive special characters
    special_char_ratio = sum(1 for c in message if not c.isalnum() and not c.isspace()) / max(len(message), 1)
    if special_char_ratio > 0.3:
        score += 10

    # Check email validity (already validated, but check for suspicious patterns)
    email = data.get('email', '')
    if email:
        is_valid, _ = validate_email_advanced(email)
        if not is_valid:
            score += 30

    # Rate limiting check - too many submissions from same IP
    if ip_address:
        recent_submissions = ContactMessage.objects.filter(
            ip_address=ip_address,
            created_at__gte=timezone.now() - timedelta(minutes=5)
        ).count()
        if recent_submissions >= 3:
            score += 40

    return min(score, 100)  # Cap at 100

@csrf_exempt
def submit_contact(request):
    if request.method == 'POST':
        try:
            # Parse request data
            data = json.loads(request.body)

            # Get client IP address
            ip_address = request.META.get('HTTP_X_FORWARDED_FOR', '')
            if ip_address:
                ip_address = ip_address.split(',')[0].strip()
            else:
                ip_address = request.META.get('REMOTE_ADDR', '')

            # Get user agent
            user_agent = request.META.get('HTTP_USER_AGENT', '')

            # Honeypot field check (hidden field that should be empty)
            if data.get('website'):  # honeypot field
                return JsonResponse({
                    'status': 'success',
                    'message': 'Thank you for your message! We will get back to you within 24 hours.'
                })

            # Validate email
            email = data.get('email', '')
            is_valid_email, email_error = validate_email_advanced(email)
            if not is_valid_email:
                return JsonResponse({
                    'status': 'error',
                    'message': email_error or 'Please enter a valid email address.'
                }, status=400)

            # Validate required fields
            if not data.get('firstName') or not data.get('lastName'):
                return JsonResponse({
                    'status': 'error',
                    'message': 'First name and last name are required.'
                }, status=400)

            if not data.get('message') or len(data.get('message', '').strip()) < 10:
                return JsonResponse({
                    'status': 'error',
                    'message': 'Please provide a detailed message (at least 10 characters).'
                }, status=400)

            # Time-based validation (form filled too quickly)
            submit_time = data.get('submitTime', 0)
            if submit_time > 0 and submit_time < 3000:  # Less than 3 seconds
                return JsonResponse({
                    'status': 'error',
                    'message': 'Please take your time to fill out the form.'
                }, status=400)

            # Calculate spam score
            spam_score = calculate_spam_score(data, ip_address)
            is_spam = spam_score > 50

            # Create contact message
            contact_message = ContactMessage.objects.create(
                first_name=data.get('firstName', ''),
                last_name=data.get('lastName', ''),
                email=data.get('email', ''),
                company=data.get('company', ''),
                project_type=data.get('projectType', 'other'),
                budget=data.get('budget', ''),
                message=data.get('message', ''),
                ip_address=ip_address,
                user_agent=user_agent,
                spam_score=spam_score,
                is_spam=is_spam
            )

            # Return success response
            return JsonResponse({
                'status': 'success',
                'message': 'Thank you for your message! We will get back to you within 24 hours.',
                'id': contact_message.id
            })

        except ValidationError as e:
            return JsonResponse({
                'status': 'error',
                'message': 'Please check your input and try again.'
            }, status=400)
        except Exception as e:
            return JsonResponse({
                'status': 'error',
                'message': 'An error occurred. Please try again later.'
            }, status=500)

    return JsonResponse({'status': 'error', 'message': 'Invalid method'}, status=405)
