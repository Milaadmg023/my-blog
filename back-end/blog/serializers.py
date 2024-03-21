from rest_framework import serializers
from django.contrib.auth.models import User

class PostSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=200)
    description = serializers.CharField(max_length=200)