from django.urls import path
from . import views

app_name = 'account'

urlpatterns = [
    path('register', views.RegisterUserView.as_view(), name='register'),
    path('login', views.LoginUserView.as_view(), name='login'),
    path('profile', views.UserProfileView.as_view(), name='profile')

]
