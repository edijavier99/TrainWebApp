
from rest_framework import serializers
from .models import Client

class ClientPostSerializer(serializers.ModelSerializer):

    class Meta():
        model = Client
        fields = ['client_name', 'client_surname', 'client_email']  


class ClientIntroVerificationSerializer(serializers.ModelSerializer):

    class Meta():
        model = Client
        fields = ['client_email', 'has_had_intro']  

class ClientSerializer(serializers.ModelSerializer):
    class Meta():
        model = Client
        fields = '__all__'
