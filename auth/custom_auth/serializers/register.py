from datetime import datetime

from django.core import validators
from rest_auth.registration.serializers import (RegisterSerializer as DefaultRegisterSerializer)
from rest_framework import serializers

policy_code_validators = [
    validators.MaxLengthValidator(8),
    validators.MinLengthValidator(8),
    validators.RegexValidator(
        regex='^[a-zA-Z0-9]*$',
        message='must be alphanumeric',
        code='invalid'
    )
]


class RegisterSerializer(DefaultRegisterSerializer):
    dob = serializers.DateField(required=True)
    policy_code = serializers.CharField(max_length=20, validators=policy_code_validators)

    def get_cleaned_data(self) -> dict:
        data = super().get_cleaned_data()
        data['dob'] = self.validated_data.get('dob', '')
        data['policy_code'] = self.validated_data.get('policy_code', '')
        return data
