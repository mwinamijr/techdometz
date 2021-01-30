from rest_framework import serializers

from .models import Carousel, Service

class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = "__all__"

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"