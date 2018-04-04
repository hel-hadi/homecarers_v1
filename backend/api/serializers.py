from api.models import User, PatientProfile
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'profile')
    
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

        
class PatientProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PatientProfile
        fields = ('user', 'vital_card_number')