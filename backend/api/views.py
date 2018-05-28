from django.shortcuts import render
from django.http import Http404
from api.models import LandingUser, ContactMessage, User, PatientProfile, ProfessionalProfile, Report
from rest_framework import viewsets, generics
from api.serializers import LandingUserSerializer, ContactMessageSerializer, UserSerializer, PatientProfileSerializer, ProfessionalProfileSerializer, ReportSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created_at')    
    serializer_class = ContactMessageSerializer

    def list(self, request):
        raise Http404("You do not have access to this")

class LandingUserViewSet(viewsets.ModelViewSet):
    queryset = LandingUser.objects.all().order_by('-created_at')
    serializer_class = LandingUserSerializer

    def list(self, request):
        raise Http404("You do not have access to this")

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