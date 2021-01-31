from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CarouselList, CarouselDetail

urlpatterns = [
    path('carousel/', CarouselList.as_view()),
    path('carousel/<int:pk>/', CarouselDetail.as_view()),
]

