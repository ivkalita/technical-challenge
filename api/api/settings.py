import os
import environ

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

env = environ.Env(
    DEBUG=(bool, False),
    SECRET_KEY=(str, 'hadfasdfasdobasdib23oir3208R#@$@!#&$^*RT&*GIWbekz&878YWFGD@!%'),
    DB_HOST=(str, 'localhost'),
    DB_PORT=(int, 5432),
    DB_NAME=(str, 'genetics_api'),
    DB_USER=(str, 'ivkalita'),
    DB_PASSWORD=(str, ''),
    AUTH_APP_BASE_URL=(str, 'http://localhost'),
)

AUTH_APP_BASE_URL = env('AUTH_APP_BASE_URL')

SECRET_KEY = env('SECRET_KEY')
DEBUG = env('DEBUG')

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'rest_framework',
    'results',
    'authenticator',
]

MIDDLEWARE = [
    'django.middleware.common.CommonMiddleware',
    'authenticator.entities.Middleware'
]

REST_FRAMEWORK = {
    # 'DEFAULT_AUTHENTICATION_CLASSES': (),
    'DEFAULT_RENDERER_CLASSES': ('rest_framework.renderers.JSONRenderer',),
    'EXCEPTION_HANDLER': 'rest_framework.views.exception_handler'
}


ROOT_URLCONF = 'api.urls'

WSGI_APPLICATION = 'api.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('DB_NAME'),
        'USER': env('DB_USER'),
        'PASSWORD': env('DB_PASSWORD'),
        'HOST': env('DB_HOST'),
        'PORT': env('DB_PORT')
    }
}


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
