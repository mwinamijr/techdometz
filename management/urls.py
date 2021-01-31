from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CarouselList, CarouselDetail, ServiceViewSet
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'services', ServiceViewSet)

urlpatterns = [
    path('carousel/', CarouselList.as_view()),
    path('carousel/<int:pk>/', CarouselDetail.as_view()),
    path('', include(router.urls)),
]

