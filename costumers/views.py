from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Costumers, Cars
import re
from django.core import serializers
import json

def costumers(request):
    if request.method == "GET":
        costumer_list = Costumers.objects.all()
        return render(request, 'costumers.html', {'costumer': costumer_list})
    elif request.method == "POST":
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        car = request.POST.getlist('car')
        reg_number = request.POST.getlist('reg_number')
        year = request.POST.getlist('year')
        
        filtered_customers = Costumers.objects.filter(phone=phone)
        
        if filtered_customers.exists():
            return render(request, 'costumers.html', {'name': firstname, 'surname': lastname, 'phone': phone, 'email': email, 'cars':zip(car, reg_number, year)})
        
        if not re.fullmatch(re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+'), email):
            return render(request, 'costumers.html', {'name': firstname, 'surname': lastname, 'phone': phone, 'cars':zip(car, reg_number, year)})
    
        filtered_customers = Costumers(
            firstname = firstname,
            lastname = lastname,
            email = email,
            phone = phone
        )
        
        filtered_customers.save()
        
        x = list(zip(car, reg_number, year))
                
        return HttpResponse('teste')

def upd_costumer(request):
    id_costumer = request.POST.get('id_costumer')
    costumer = Costumers.objects.filter(id=id_costumer)
    costumer_json = json.loads(serializers.serialize('json', costumer))[0]['fields']
    return JsonResponse(costumer_json)