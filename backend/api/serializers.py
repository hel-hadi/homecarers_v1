from api.models import LandingUser, ContactMessage, User, PatientProfile, ProfessionalProfile, Report
from rest_framework import serializers
from django.core.mail import send_mail


class LandingUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LandingUser
        fields = ('email', 'code_postal', 'created_at')

class ContactMessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ('email', 'message', 'created_at')

    def create(self, validated_data):
        contact_message = ContactMessage.objects.create(**validated_data)
        contact_message.save()
        send_mail(
            'Nouveau contact sur Home Carers',
            contact_message.message,
            contact_message.email,
            ['hel-hadi@student.42.fr'],
            fail_silently=False,
        )
        return contact_message

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('is_active', 'email', 'profile', 'created_at', 'updated_at')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        if validated_data['profile'] == 'Patient':
            profile = PatientProfile.objects.create(user = user)
        elif validated_data['profile'] == 'Pro':
            profile = ProfessionalProfile.objects.create(user = user)            
        elif validated_data['profile'] == 'Institution':
            profile = InstitutionProfile.objects.create(user = user)
        profile.save()            
        return user
        
class PatientProfileSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        many=False,
        read_only=True,
        view_name='user-detail'
    )

    class Meta:
        model = PatientProfile
        fields = ('user', 'first_name', 'last_name', 'birth_date', 'vital_card_number', 'created_at', 'updated_at')

class ProfessionalProfileSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        many=False,
        read_only=True,
        view_name='user-detail'
    )

    class Meta:
        model = ProfessionalProfile
        fields = ('user', 'first_name', 'last_name', 'job', 'created_at', 'updated_at')

class ReportSerializer(serializers.HyperlinkedModelSerializer):
    patient = serializers.HyperlinkedRelatedField(
        many=False,
        read_only=True,
        view_name='patientprofile-detail'
    )
    professional = serializers.HyperlinkedRelatedField(
        many=False,
        read_only=True,
        view_name='professionalprofile-detail'
    )

    class Meta:
        model = Report
        fields = ('patient', 'professional', 'content', 'created_at', 'updated_at')