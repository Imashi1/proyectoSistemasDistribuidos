from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from  django.contrib.auth import logout

# Create your views here.
def index(request):
    return render(request,'index.html')

def register(request):    
    return render(request,'registration/register.html')

def registering(request):
    if(request.method == 'POST'):
        user = User.objects.create_user(request.POST['username'],'',request.POST['password'])
        print('Usuario Registrado')
        return redirect('/')
    
    return redirect('/register')

def log_out(request):
    user = User.objects.get(username = request.user)
    logout(request)
    user.delete()
    return redirect('/')