from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from api.models import LandingUser, User, PatientProfile, ProfessionalProfile, Report

admin.site.register(User)
admin.site.register(LandingUser)
admin.site.register(PatientProfile)
admin.site.register(ProfessionalProfile)
admin.site.register(Report)