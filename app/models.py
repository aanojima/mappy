from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Annotation(models.Model):
	creator = models.ForeignKey(User)
	latitude = models.DecimalField(max_digits=13, decimal_places=10)
	longitude = models.DecimalField(max_digits=13, decimal_places=10)
	title = models.CharField(max_length=50)
	description = models.CharField(max_length=200)