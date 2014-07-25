from django.conf.urls import patterns, url

from app import main_controller

urlpatterns = patterns('',
	url(r'^$', main_controller.index)
)