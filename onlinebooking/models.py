from django.utils import timezone
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


# Create your models here.

class Proxy(User):
    class Meta:
        proxy = True

    def __str__(self):
        return self.first_name


class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='proxy', null=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=50)
    address = models.TextField(max_length=100)
    created_date = models.DateTimeField(
        default=timezone.now)
    updated_date = models.DateTimeField(auto_now_add=True)

    def created(self):
        self.created_date = timezone.now()
        self.save()

    def updated(self):
        self.updated_date = timezone.now()
        self.save()

    def __str__(self):
        return self.first_name


class Room(models.Model):
    room_no = models.CharField(max_length=10, primary_key=True)
    room_type = models.CharField(max_length=255)
    availability = models.BooleanField(default=0)
    bedOption = models.CharField(max_length=255)
    price = models.IntegerField(default=0)
    view = models.CharField(max_length=255)
    totalRooms = models.CharField(max_length=255, null=True, blank=True)
    room_start_date = models.DateTimeField(
        default=timezone.now)
    room_end_date = models.DateTimeField(
        default=timezone.now)
    created_date = models.DateTimeField(
        default=timezone.now)
    updated_date = models.DateTimeField(auto_now_add=True)

    def created(self):
        self.created_date = timezone.now()
        self.save()

    def updated(self):
        self.updated_date = timezone.now()
        self.save()

    def __str__(self):
        return 'Room number {} is a {} room'.format(self.room_no, self.room_type)


class Booking(models.Model):
    """Models for reservations"""
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    cust_id = models.CharField(max_length=10, null=True, blank=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    no_of_children = models.PositiveSmallIntegerField(default=0)
    no_of_adults = models.PositiveSmallIntegerField(default=1)
    reservation_date_time = models.DateTimeField(default=timezone.now)
    checkIn = models.DateTimeField(default=timezone.now)
    checkOut = models.DateTimeField(default=timezone.now)
    totalPrice = models.IntegerField(default=0)
    created_date = models.DateTimeField(
        default=timezone.now)
    updated_date = models.DateTimeField(auto_now_add=True)

    def created(self):
        self.created_date = timezone.now()
        self.save()

    def updated(self):
        self.updated_date = timezone.now()
        self.save()

    def __str__(self):
        return '{} booked a room {} and checks in {} and checks out {}'.format(self.customer.first_name, self.room.room_no, self.checkIn, self.checkOut)
