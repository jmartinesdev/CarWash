from django.shortcuts import render
from django.http import HttpResponse

def costumers(request):
    return render(request, 'costumers.html')