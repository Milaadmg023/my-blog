from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = 'blog'

urlpatterns = [
    path('posts', views.PostView.as_view(), name='post'),
    path('register', views.RegisterUserView.as_view(), name='register'),
    path('login', views.LoginUser.as_view(), name='login'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]