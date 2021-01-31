from django.db import models

class Carousel(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField()
    photo = models.ImageField(upload_to="carousel")

    def __str__(self):
        return self.title

class Service(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    #description = models.TextField()
    photo = models.ImageField(upload_to="services")

    def __str__(self):
        return self.title
