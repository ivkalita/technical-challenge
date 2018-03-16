from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser, models.Model):
    class Meta:
        app_label = 'custom_auth'
        db_table = 'custom_auth_user'

    dob = models.DateField()
    policy_code = models.CharField(max_length=20)
