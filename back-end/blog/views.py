from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post, Category
from .serializers import PostSerializer, CaregorySerializer
from rest_framework import status


# Create your views here.
class CategoryView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CaregorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PostView(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostSerializer(data=request.data, context={'user': request.user})
        if serializer.is_valid():
            serializer.validated_data['author'] = request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
