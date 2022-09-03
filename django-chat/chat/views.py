from cmath import log
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def lobby(request):
    return render(request, 'chat/lobby.html')