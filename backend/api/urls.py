
from django.conf.urls import url, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'landing_users', views.LandingUserViewSet)
router.register(r'contact_messages', views.SendContactMessage)
router.register(r'users', views.UserViewSet)
router.register(r'patients', views.PatientProfileViewSet)
router.register(r'pros', views.ProfessionalProfileViewSet)
router.register(r'reports', views.ReportViewSet)

app_name = 'api'
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'api/', include(router.urls)),
    url(r'api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]