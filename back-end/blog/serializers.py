from django.utils import timezone
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Post, BookMark
from persiantools.jdatetime import JalaliDate, digits


class PostSerializer(serializers.ModelSerializer):
    created = serializers.SerializerMethodField()
    days_ago = serializers.SerializerMethodField()
    writer = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('title', 'description', 'category', 'writer', 'created', 'days_ago')
        extra_kwargs = {
            "author": {'required': False}
        }

    def get_days_ago(self, obj):
        return f"{digits.to_word((timezone.now().date() - obj.created.date()).days)} روز پیش"

    def get_created(self, obj):
        date = JalaliDate(obj.created, locale='fa')
        return date.strftime('%c')

    def get_writer(self, obj):
        name = f"{obj.author.first_name} {obj.author.last_name}"
        return name

    def get_category(self, obj):
        name = f"{obj.category.title}"
        return name


class BookMarkSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    post = PostSerializer()

    class Meta:
        model = BookMark
        fields = ['user', 'post']
        extra_kwargs = {
            "user": {'required': False}
        }

    def get_user(self, obj):
        name = f"{obj.user.first_name} {obj.user.last_name}"
        return name


class CaregorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
