from cmath import log
from django.shortcuts import render,redirect
from .models import Post
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def lobby(request):
    all_Post = Post.objects.all()
    return render(request, 'chat/lobby.html',{'mensajes':all_Post})
def aEliminar(request, uuid=None):
    postAEliminar = Post.objects.get(uuid=uuid) 
    postAEliminar.delete()
    return redirect('/')
