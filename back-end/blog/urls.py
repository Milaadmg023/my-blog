from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('posts', views.PostView.as_view(), name='post'),
    path('category', views.CategoryView.as_view(), name='category'),
    path('bookmark', views.BookMarkView.as_view(), name='bookmark')
]