from django.urls import path 
from . import views 

urlpatterns = [
    path('ftp_server', views.ftp_index , name='ftp_index'),
]