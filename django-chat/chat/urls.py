from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.lobby , name='lobby'),
    path('aEliminar/<uuid>', views.aEliminar, name='aEliminar')
]