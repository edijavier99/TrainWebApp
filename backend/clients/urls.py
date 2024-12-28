from django.urls import path
from .views import ClientList, ClientCreateView

urlpatterns = [
    # GET para obtener información de un cliente por su correo electrónico
    path('verify/<str:email>/', ClientList.as_view(), name='get-client'),
    
    # POST para crear un nuevo cliente
    path('register/', ClientCreateView.as_view(), name='create-client'),
    
    # PATCH para marcar la introducción como completada
    path('<str:email>/intro/', ClientList.as_view(), name='update-client-intro'),
]
