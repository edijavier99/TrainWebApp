from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Article
from .seerializers import ArticleSerializer,CommentSerializer
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from .consumer import ChatConsumer
# Importar la clase personalizada de throttling
from throttling import CustomAnonRateThrottle  # Asegúrate de que la ruta sea correcta
from rest_framework.throttling import UserRateThrottle


class ArticleListApiView(APIView): 
    # Usamos la clase personalizada de throttling
    throttle_classes = [CustomAnonRateThrottle, UserRateThrottle]

    @method_decorator(cache_page(60 * 15), name='dispatch')  # Cachea la respuesta durante 15 minutos
    def get(self, request):
        try:
            # Obtener todos los artículos
            all_articles = Article.objects.all()
            # Serializar los datos
            serializer = ArticleSerializer(all_articles, many=True)
            # Retornar la respuesta JSON
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
    def post(self, request):
        try:
            # Crear un nuevo artículo con los datos del cuerpo de la solicitud
            serializer = ArticleSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()  # Guardar el artículo en la base de datos
                
                # Enviar una notificación a todos los consumidores WebSocket
                message = f"Nuevo artículo creado: {serializer.validated_data['title']}"
                ChatConsumer.send_notification(message)
                
                # Retornar la respuesta con el artículo creado
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class CreateComment(APIView):
    def post(self, request):
        try:
            # Crear un nuevo artículo con los datos del cuerpo de la solicitud
            serializer = CommentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()  # Guardar el artículo en la base de datos
                
                # Enviar una notificación a todos los consumidores WebSocket
                message = f"Nuevo comentariooooo creado: {serializer.validated_data['title']}"
                ChatConsumer.send_notification(message)
                
                # Retornar la respuesta con el artículo creado
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )