from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CarouselViewSet, ServiceViewSet
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'carousel', CarouselViewSet)
router.register(r'services', ServiceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

