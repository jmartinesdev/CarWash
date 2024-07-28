from django.urls import path
from . import views

urlpatterns = [
    path('', views.costumers, name="costumers"),
    path('update_costumer/', views.upd_costumer, name="update_costumer"),
]
