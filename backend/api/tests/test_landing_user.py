from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

class LandingUserTests(APITestCase):
    client = APIClient()    
    
    def register_mail(self):
        url = reverse('api:landing_users')
        data = {'email': 'toto@gmail.com', 'code_postal': '75000' }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data, data)

landing_user = LandingUserTests()
landing_user.register_mail()