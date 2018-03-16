from rest_auth.serializers import UserDetailsSerializer as DefaultUserDetailsSerializer

from custom_auth.models import User


class UserDetailsSerializer(DefaultUserDetailsSerializer):
    class Meta:
        model = User
        fields = ('pk', 'email', 'first_name', 'last_name', 'dob', 'policy_code')
        read_only_fields = ('email',)
