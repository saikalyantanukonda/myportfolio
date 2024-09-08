from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
     path('blog/', views.blog_list, name='blog_list'),
    path('blog/<int:pk>/', views.blog_detail, name='blog_detail'),
     path('contact/', views.contact, name='contact'),
]