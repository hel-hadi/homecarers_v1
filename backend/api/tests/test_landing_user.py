from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from api.models import LandingUser, ContactMessage

class LandingUserTests(APITestCase):
    def test_register_mail(self):
        url = '/api/landing_users/'
        data = {'email': 'lolilol@gmail.com', 'postal_code': '75000' }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(LandingUser.objects.count(), 1)
        self.assertEqual(LandingUser.objects.get().email, 'lolilol@gmail.com')

class ContactMessageTests(APITestCase):
    def test_contact(self):
        url = '/api/contact_messages/'
        data = {'email': 'lolilol@gmail.com', 'message': 'I can do all things' }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(ContactMessage.objects.get().email, 'lolilol@gmail.com')