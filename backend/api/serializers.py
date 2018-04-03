from api.models import User, PatientProfile
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'profile')

        
class PatientProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PatientProfile
        fields = ('user', 'vital_card_number')