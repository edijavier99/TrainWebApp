from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Article,BlogSubscriber
from .seerializers import ArticleSerializer,ArticleSerializerBlog,SubscriberSerializer
# from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
# from .consumer import ChatConsumer
# Importar la clase personalizada de throttling
from throttling import CustomAnonRateThrottle  # Asegúrate de que la ruta sea correcta
from rest_framework.throttling import UserRateThrottle
from django.shortcuts import get_object_or_404
from rest_framework.pagination import PageNumberPagination



class ArticleListApiView(APIView):
    throttle_classes = [CustomAnonRateThrottle, UserRateThrottle]

    def get(self, request):
        try:
            # Obtener todos los artículos, ahora ordenados
            all_articles = Article.objects.all().order_by('article_day_posted')  # Or use any other field
            
            # Crear la instancia de paginación
            paginator = PageNumberPagination()
            paginator.page_size = 10  # Número de artículos por página
            paginated_articles = paginator.paginate_queryset(all_articles, request)

            # Serializar los datos
            serializer = ArticleSerializerBlog(paginated_articles, many=True)
            
            # Retornar la respuesta paginada
            return paginator.get_paginated_response(serializer.data)

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
                # Retornar la respuesta con el artículo creado
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
class ArticleDetailApiView(APIView):
    def get(self, request, slug):
        try:
            # Obtener el artículo utilizando el slug
            article = get_object_or_404(Article, article_slug=slug)
            # Serializar los datos del artículo
            serializer = ArticleSerializer(article)
            # Retornar la respuesta JSON
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class BlogSubscriberApiView(APIView):

    def get(self, request):
        try:
            all_subscribers = BlogSubscriber.objects.all()
            paginator = PageNumberPagination()
            paginator.page_size = 10
            paginated_articles = paginator.paginate_queryset(all_subscribers, request)
            serializer = SubscriberSerializer(paginated_articles, many=True)

            return paginator.get_paginated_response(serializer.data)
        
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
    # @method_decorator(cache_page(60 * 15), name='dispatch')  # Cachea la respuesta durante 15 minutos
    def post(self,request):
        try:
            serializer = SubscriberSerializer(data=request.data)            
            # Comprobamos si los datos del serializer son válidos
            if serializer.is_valid():
                serializer.save()  # Los campos 'subscribed_at' e 'is_active' se gestionan automáticamente
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response(
                {"error": f"An unexpected error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    def patch(self, request, pk=None):
        """Actualizar la suscripción (cancelar suscripción) del usuario identificado por su ID."""
        try:
            # Obtener el suscriptor utilizando pk
            subscriber = get_object_or_404(BlogSubscriber, pk=pk)            
            subscriber.unsubscribe()            
            return Response({"message": "Subscription canceled successfully."}, status=status.HTTP_200_OK)
        
        except BlogSubscriber.DoesNotExist:
            return Response(
                {"error": "Subscriber not found."},
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"error": f"An unexpected error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        


