from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'description', 'category', 'author')
        extra_kwargs = {
            "author": {'required': False}
        }
