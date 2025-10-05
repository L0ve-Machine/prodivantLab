from django.db import models
from django.utils import timezone

# Create your models here.
class ContactMessage(models.Model):
    PROJECT_TYPE_CHOICES = [
        ('mobile', 'Mobile App Development'),
        ('web', 'Web Development'),
        ('custom', 'Custom Software'),
        ('consulting', 'IT Consulting'),
        ('other', 'Other'),
    ]

    BUDGET_CHOICES = [
        ('250-500', '$250 - $500'),
        ('500-1000', '$500 - $1,000'),
        ('1000-2500', '$1,000 - $2,500'),
        ('2500+', '$2,500+'),
    ]

    # Contact Information
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=200, blank=True, null=True)

    # Project Details
    project_type = models.CharField(max_length=20, choices=PROJECT_TYPE_CHOICES)
    budget = models.CharField(max_length=20, choices=BUDGET_CHOICES)
    message = models.TextField()

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(blank=True, null=True)

    # Spam Prevention
    is_spam = models.BooleanField(default=False)
    spam_score = models.FloatField(default=0.0)

    # Admin Notes
    is_read = models.BooleanField(default=False)
    admin_notes = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Message'
        verbose_name_plural = 'Contact Messages'

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.project_type} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"

    def full_name(self):
        return f"{self.first_name} {self.last_name}"
