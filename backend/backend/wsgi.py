import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

from whitenoise.django import DjangoWhiteNoise

application = DjangoWhiteNoise(get_wsgi_application())