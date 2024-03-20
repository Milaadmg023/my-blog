from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post
from .serializers import PostSerializer
from rest_framework import status


# Create your views here.

class PostView(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            new_post = Post.objects.create(title=request.data['title'], description=request.data['description'])
            new_post.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'message': 'error creating post!'}, status=status.HTTP_400_BAD_REQUEST)
