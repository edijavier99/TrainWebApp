from rest_framework import serializers
from .models import Article


class ArticleSerializerBlog(serializers.ModelSerializer):
    first_image = serializers.SerializerMethodField()  # Campo adicional
    class Meta:
        model = Article
        fields = [ 
            "article_slug", "artitle_title", "article_day_posted", 
            "article_first_paragraph", "article_category", "first_image"
        ]

    def get_first_image(self, obj):
        """Obtiene la primera imagen utilizando el método del modelo."""
        return obj.get_first_image()  # Llama al método definido en el modelo
        
class ArticleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Article
        fields = '__all__'


