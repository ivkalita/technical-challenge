from django.conf.urls import url, include
from rest_framework.routers import SimpleRouter

from results.views import GeneticResultViewSet

router = SimpleRouter()
router.register(r'results', viewset=GeneticResultViewSet, base_name='result')
# print(router.urls)
urlpatterns = [
    url(r'^', include(router.urls))
]
