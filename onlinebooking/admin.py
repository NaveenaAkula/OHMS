
from django.contrib import admin
from .models import Customer, Room, Booking

# Register your models here.
admin.site.register(Customer),

admin.site.register(Room),
admin.site.register(Booking),
