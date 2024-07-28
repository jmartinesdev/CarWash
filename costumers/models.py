from django.db import models

from django.db import models

class Costumers(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)
    
    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    
class Cars(models.Model):
    car = models.CharField(max_length=20)
    reg_number = models.CharField(max_length=8)
    year = models.IntegerField()
    costumers = models.ForeignKey(Costumers, on_delete=models.CASCADE)
    wash = models.IntegerField(default=0)
    
    def __str__(self) -> str:
        return self.car