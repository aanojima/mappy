from django.shortcuts import render
from django.core.context_processors import csrf
from django.http import HttpResponse

# Create your views here.
def home(request):
	return render(request, "home/home.html")