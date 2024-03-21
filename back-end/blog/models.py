from django.db import models
from django.contrib.auth.models import User
from django_jalali.db import models as jmodels


# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=255)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Post(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created = jmodels.jDateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
