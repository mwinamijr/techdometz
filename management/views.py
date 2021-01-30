from .models import Carousel, Service
from .serializers import CarouselSerializer, ServiceSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CarouselList(APIView):
    """
    List all carousels, or create a new carousel.
    """
    def get(self, request, format=None):
        carousels = Carousel.objects.all()
        serializer = CarouselSerializer(carousels, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CarouselSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CarouselDetail(APIView):
    """
    Retrieve, update or delete a carousel instance.
    """
    def get_object(self, pk):
        try:
            return Carousel.objects.get(pk=pk)
        except Carousel.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        carousel = self.get_object(pk)
        serializer = CarouselSerializer(carousel)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        carousel = self.get_object(pk)
        serializer = CarouselSerializer(carousel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        carousel = self.get_object(pk)
        carousel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)