from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Client
from .serializers import ClientPostSerializer, ClientIntroVerificationSerializer

class ClientList(APIView):    
    def get(self, request, email):
        try:
            # Intentamos obtener el cliente por su email
            client = Client.objects.get(client_email=email)
            # Si lo encontramos, serializamos y devolvemos la respuesta
            serializer = ClientIntroVerificationSerializer(client)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Client.DoesNotExist:
            # Si el cliente no existe, devolvemos un 404 y un mensaje para el frontend
            return Response(
                {"detail": "Cliente no encontrado. Por favor regístrate."},
                status=status.HTTP_404_NOT_FOUND
            )

    def patch(self, request, email):
        try:
            client = Client.objects.get(client_email=email)
            # Marcar la introducción como hecha
            client.mark_intro_as_done()
            # Serializar el cliente actualizado
            serializer = ClientPostSerializer(client)

            return Response(serializer.data, status=status.HTTP_200_OK)
        except Client.DoesNotExist:
            return Response(
                {"detail": "Client not found."}, 
                status=status.HTTP_404_NOT_FOUND
            )

class ClientCreateView(APIView):
    def post(self, request):
        try:
            # Intenta serializar los datos
            serializer = ClientPostSerializer(data=request.data)
            if serializer.is_valid():
                # Si el serializador es válido, guarda el nuevo cliente
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                # Si los datos no son válidos, devuelve un error de validación
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Captura cualquier excepción inesperada y devuelve un error 500
            return Response({"detail": f"Ocurrió un error: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
