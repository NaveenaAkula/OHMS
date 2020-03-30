from django.urls import re_path, path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from .views import BookingList, BookingById, CustomerByUserId, CustomerList, CustomerById, RoomById, RoomList, ProxyList
from django.conf.urls import url
from . import views
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    path(r'', views.index, name='index'),
    path('login', views.index, name='index'),
    path('booking', views.BookingList.as_view()),
    path('booking/<int:pk>/', views.BookingById.as_view()),
    path('customer/<int:pk>/', views.CustomerById.as_view()),
    path('customerById/<int:user>/', views.CustomerByUserId.as_view()),
    path('customer', views.CustomerList.as_view()),
    path('room/<int:pk>/', views.RoomById.as_view()),
    path('room', views.RoomList.as_view()),
    path('proxy', views.ProxyList.as_view()),


]
