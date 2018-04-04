from django.shortcuts import render
from api.models import User, PatientProfile
from rest_framework import viewsets
from api.serializers import UserSerializer, PatientProfileSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-created_at')
    serializer_class = UserSerializer

class PatientProfileViewSet(viewsets.ModelViewSet):
    queryset = PatientProfile.objects.all()
    serializer_class = PatientProfileSerializer