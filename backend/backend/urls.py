from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'patients', views.PatientProfileViewSet)
router.register(r'pros', views.ProfessionalProfileViewSet)
router.register(r'reports', views.ReportViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^', admin.site.urls),
    url(r'^', include('rest_framework.urls', namespace='rest_framework'))
]
