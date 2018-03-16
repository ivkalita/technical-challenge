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
    first_name = serializers.CharField(max_length=60)
    last_name = serializers.CharField(max_length=60)

    def get_cleaned_data(self) -> dict:
        data = super().get_cleaned_data()
        data['dob'] = self.validated_data.get('dob', '')
        data['policy_code'] = self.validated_data.get('policy_code', '')
        data['first_name'] = self.validated_data.get('first_name', '')
        data['last_name'] = self.validated_data.get('last_name', '')
        data['username'] = self.validated_data.get('email', '')
        return data
