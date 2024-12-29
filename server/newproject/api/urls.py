from django.urls import path
from .views import get_scripts, create_script

urlpatterns = [
    path('scripts/', get_scripts, name='get_scripts'),
    path('scripts/create', create_script, name='create_script')
]
