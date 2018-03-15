from django.contrib.postgres.fields.jsonb import JSONField
from django.db import models


class GeneticResult(models.Model):
    class Meta:
        app_label = 'results'

    user_id = models.IntegerField()
    result = JSONField(default={})
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
