from rest_framework import serializers


class GeneticResultSerializer(serializers.Serializer):
    user_id = serializers.IntegerField()
    result = serializers.JSONField()
    created_at = serializers.DateTimeField()
