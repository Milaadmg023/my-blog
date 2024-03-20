from rest_framework import serializers
from django.contrib.auth.models import User

class PostSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=200)
    description = serializers.CharField(max_length=200)


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('email', 'password', 'username')
        extra_kwargs = {
            'username': {'required': False}
        }

    def create(self, validated_data):
        username = validated_data['email']
        user = User.objects.create_user(username=username,**validated_data)
        return user

