from django.shortcuts import render
from drf_spectacular.utils import extend_schema
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post, Category, BookMark
from .serializers import PostSerializer, CaregorySerializer, BookMarkSerializer
from rest_framework import status


# Create your views here.
class CategoryView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CaregorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@extend_schema(
    request=PostSerializer,
    responses={200: PostSerializer})
class PostView(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['author'] = request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@extend_schema(
    request=BookMarkSerializer,
    responses={200: BookMarkSerializer})
class BookMarkView(APIView):
    def get(self, request):
        posts = BookMark.objects.filter(user=request.user).all()
        serializer = BookMarkSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = BookMarkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['user'] = request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
