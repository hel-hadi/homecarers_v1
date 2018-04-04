from api.models import User, PatientProfile
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

        
class PatientProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PatientProfile
        fields = ('user', 'vital_card_number')