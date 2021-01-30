from rest_framework import serializers

from .models import Carousel, Service

class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = ['id', 'title', 'description', 'image']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'image']