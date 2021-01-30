from django.db import models

class Carousel(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField()
    image = models.ImageField(name="carousels", upload_to="carousel")

    def __str__(self):
        return self.title