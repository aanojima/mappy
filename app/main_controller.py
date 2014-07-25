from django.shortcuts import render
from django.core.context_processors import csrf
from django.http import HttpResponse

# Views
def index(request):
	return render(request, "main/index.html")