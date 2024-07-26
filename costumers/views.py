from django.shortcuts import render
from django.http import HttpResponse

def costumers(request):
    if request.method == "GET":
        return render(request, 'costumers.html')
    elif request.method == "POST":
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        car = request.POST.getlist('car')
        reg_number = request.POST.getlist('reg_number')
        year = request.POST.getlist('year')
        
        
        print(firstname)
        print(car)
        print(reg_number)
        print(year)
        
        return HttpResponse('teste')

        