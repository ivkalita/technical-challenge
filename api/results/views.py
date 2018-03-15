from django.db.models import QuerySet
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from results.models import GeneticResult
from results.serializers import GeneticResultSerializer


class GeneticResultViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = GeneticResultSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self) -> QuerySet:
        return GeneticResult.objects.filter(user_id=self.request.user.id).all()
