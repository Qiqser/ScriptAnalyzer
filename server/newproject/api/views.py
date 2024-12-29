from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Script
from .serializer import ScriptSerializer


@api_view(['GET'])
def get_scripts(request):
    scripts = Script.objects.all()
    serializer = ScriptSerializer(scripts, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_script(request):
    serializer = ScriptSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

