from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.conf import settings
from datetime import date

from .managers import UserManager

class LandingUser(models.Model):
    email = models.EmailField(unique=True)
    code_postal = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add = True)

class ContactMessage(models.Model):
    email = models.EmailField(unique=True)
    message = models.CharField(max_length=3000)
    created_at = models.DateTimeField(auto_now_add = True)

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    is_active = models.BooleanField(default=True)
    PATIENT = 'Patient'
    PROFESSIONAL = 'Pro'
    INSTITUTION = 'Institution'
    PROFILE_CHOICES = (
        (PATIENT, 'Patient'),
        (PROFESSIONAL, 'Professionnel de la santé'),
        (INSTITUTION, 'Institution'),
    )
    profile = models.CharField(choices = PROFILE_CHOICES, default = PATIENT, max_length = 64)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['profile']

    def get_full_name(self):
        '''
        Returns the first_name plus the last_name, with a space in between.
        '''
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()
    
    def get_short_name(self):
        '''
        Returns the short name for the user.
        '''
        return self.first_name

    def email_user(self, subject, message, from_email=None, **kwargs):
        send_mail(subject, message, from_email, [self.email], **kwargs)

class PatientProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, primary_key = True, related_name = 'patient_profile', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(blank=True, null=True)
    vital_card_number = models.BigIntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def get_age(self):
        '''
        Returns age of the patient.
        '''
        born = self.birth_date
        today = date.today()
        return today.year - born.year - ((today.month, today.day) < (born.month, born.day))

class ProfessionalProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, primary_key = True, related_name = 'professional_profile', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    job = models.CharField(max_length=30, blank=True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Report(models.Model):
    patient = models.ForeignKey(PatientProfile, on_delete=models.CASCADE)
    professional = models.ForeignKey(ProfessionalProfile, on_delete=models.CASCADE, blank=True)
    content = models.CharField(max_length=30, blank=False)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)