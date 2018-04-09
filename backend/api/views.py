from django.shortcuts import render
from api.models import LandingUser, User, PatientProfile, ProfessionalProfile, Report
from rest_framework import viewsets
from api.serializers import LandingUserSerializer, UserSerializer, PatientProfileSerializer, ProfessionalProfileSerializer, ReportSerializer


class LandingUserViewSet(viewsets.ModelViewSet):
    queryset = LandingUser.objects.all().order_by('-created_at')
    serializer_class = LandingUserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-created_at')
    serializer_class = UserSerializer

class PatientProfileViewSet(viewsets.ModelViewSet):
    queryset = PatientProfile.objects.all()
    serializer_class = PatientProfileSerializer

class ProfessionalProfileViewSet(viewsets.ModelViewSet):
    queryset = ProfessionalProfile.objects.all()
    serializer_class = ProfessionalProfileSerializer

class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer