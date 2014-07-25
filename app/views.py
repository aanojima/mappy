from django.shortcuts import render
from django.core.context_processors import csrf
from django.http import HttpResponse

# Create your views here.
def main(request):
	return render(request, "main/index.html")