from allauth.account.adapter import DefaultAccountAdapter


class UserAccountAdapter(DefaultAccountAdapter):
    def save_user(self, request, user, form, commit=True) -> None:
        user = super(UserAccountAdapter, self).save_user(request, user, form, commit=False)
        user.policy_code = form.cleaned_data.get('policy_code')
        user.dob = form.cleaned_data.get('dob')
        user.first_name = form.cleaned_data.get('first_name')
        user.last_name = form.cleaned_data.get('last_name')
        user.username = form.cleaned_data.get('username')
        user.save()
