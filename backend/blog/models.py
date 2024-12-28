from django.db import models
from django.utils.text import slugify
import math
from django.core.validators import EmailValidator
from django.utils import timezone

class Article(models.Model):
    artitle_title = models.CharField(max_length=100)
    article_slug = models.SlugField(unique=True, blank=True)  # SlugField para la URL amigable
    article_day_posted = models.DateField()
    article_first_paragraph = models.TextField()
    article_second_paragraph = models.TextField(blank=True, null=True)
    article_third_paragraph = models.TextField(blank=True, null=True)
    article_fourth_paragraph = models.TextField(blank=True, null=True)
    article_fifth_paragraph = models.TextField(blank=True, null=True)
    article_images = models.JSONField(default=list, blank=True)  # Almacena un array de URLs
    article_category = models.CharField(max_length=100, blank=True, null=True)
    reading_time = models.PositiveIntegerField(blank=True, null=True)

 # Método para generar automáticamente el slug si no se define
    def save(self, *args, **kwargs):
        # Calcular el tiempo de lectura cuando se guarda el artículo
        if not self.reading_time:
            # Estimación del promedio de palabras leídas por minuto
            words_per_minute = 250  # Asumimos 250 palabras por minuto
            total_text = f"{self.article_first_paragraph} {self.article_second_paragraph} {self.article_third_paragraph} {self.article_fourth_paragraph} {self.article_fifth_paragraph}"
            word_count = len(total_text.split())  # Contamos las palabras
            self.reading_time = math.ceil(word_count / words_per_minute)  # Redondeamos hacia arriba el tiempo en minutos

        # Generar automáticamente el slug si no se proporciona
        if not self.article_slug:
            self.article_slug = slugify(self.artitle_title)
        
        # Guardar el artículo
        super().save(*args, **kwargs)

    def __str__(self):
        return self.artitle_title
    
    class Meta:
        # Definir índices para mejorar la búsqueda y el rendimiento de consultas
        indexes = [
            models.Index(fields=['article_slug']),  # Índice para la búsqueda por slug
        ]
        # También se puede agregar un índice único si es necesario
        unique_together = ('artitle_title', 'article_slug')  # Asegura que cada artículo tiene un slug único
    
    def get_first_image(self):
        """Devuelve la primera imagen del array de URLs, o None si no hay imágenes."""
        if isinstance(self.article_images, list) and self.article_images:
            return self.article_images[0]  # Retorna la primera URL del array
        return None  # Retorna None si no hay imágenes
    

class BlogSubscriber(models.Model):
    subscriber_email = models.EmailField(unique=True, validators=[EmailValidator()])
    subscribed_at = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
 
    # Métodos de utilidad
    def __str__(self):
        return f"{self.subscriber_name or self.subscriber_email}"

    def unsubscribe(self):
        """Método para cancelar la suscripción."""
        self.is_active = False
        self.save()

    def __str__(self):
        return f"{self.subscriber_name or self.subscriber_email}"

    class Meta:
        verbose_name = "Blog Subscriber"
        verbose_name_plural = "Blog Subscribers"
        ordering = ['-subscribed_at']