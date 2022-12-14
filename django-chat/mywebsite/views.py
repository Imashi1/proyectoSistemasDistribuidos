from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from  django.contrib.auth import logout,login

# Create your views here.
def index(request):
    return render(request,'index.html')

def register(request):    
    return render(request,'registration/register.html')

def registering(request):
    if(request.method == 'POST'):
        User.objects.create_user(request.POST['username'],'',request.POST['password'])
        return redirect('/')
    
    return redirect('/register')

def log_out(request):    
    request.session['username'] = request.user

    print(request.session['username'])
    logout(request)
    return redirect('/')