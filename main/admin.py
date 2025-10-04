from django.contrib import admin
from .models import ContactMessage

# Register your models here.
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'project_type', 'budget', 'is_read', 'is_spam', 'created_at']
    list_filter = ['is_read', 'is_spam', 'project_type', 'budget', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'company', 'message']
    readonly_fields = ['created_at', 'ip_address', 'user_agent', 'spam_score']
    date_hierarchy = 'created_at'

    fieldsets = (
        ('Contact Information', {
            'fields': ('first_name', 'last_name', 'email', 'company')
        }),
        ('Project Details', {
            'fields': ('project_type', 'budget', 'message')
        }),
        ('Metadata', {
            'fields': ('created_at', 'ip_address', 'user_agent'),
            'classes': ('collapse',)
        }),
        ('Spam Detection', {
            'fields': ('is_spam', 'spam_score'),
            'classes': ('collapse',)
        }),
        ('Admin', {
            'fields': ('is_read', 'admin_notes')
        })
    )

    actions = ['mark_as_read', 'mark_as_unread', 'mark_as_spam', 'mark_as_not_spam']

    def mark_as_read(self, request, queryset):
        updated = queryset.update(is_read=True)
        self.message_user(request, f'{updated} message(s) marked as read.')
    mark_as_read.short_description = 'Mark selected messages as read'

    def mark_as_unread(self, request, queryset):
        updated = queryset.update(is_read=False)
        self.message_user(request, f'{updated} message(s) marked as unread.')
    mark_as_unread.short_description = 'Mark selected messages as unread'

    def mark_as_spam(self, request, queryset):
        updated = queryset.update(is_spam=True)
        self.message_user(request, f'{updated} message(s) marked as spam.')
    mark_as_spam.short_description = 'Mark selected messages as spam'

    def mark_as_not_spam(self, request, queryset):
        updated = queryset.update(is_spam=False)
        self.message_user(request, f'{updated} message(s) marked as not spam.')
    mark_as_not_spam.short_description = 'Mark selected messages as not spam'
