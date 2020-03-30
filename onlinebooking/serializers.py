from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Customer, Proxy, Room, Booking


class RoomSerializer(ModelSerializer):
    class Meta:
        model = Room
        fields = "__all__"
        # fields = ('pk', 'customer', 'menu', 'orderType',
        #         'time_of_arrival', 'unit_size')


class BookingSerializer(ModelSerializer):
    class Meta:
        model = Booking
        fields = "__all__"


class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"


class ProxySerializer(ModelSerializer):
    class Meta:
        model = Proxy
        fields = "__all__"
