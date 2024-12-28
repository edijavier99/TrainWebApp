from django.db import models
from django.utils.timezone import now

class Client(models.Model):
    client_name = models.CharField(
        max_length=40, 
        verbose_name="Nombre del cliente"
    )
    client_surname = models.CharField(
        max_length=40, 
        verbose_name="Apellido del cliente"
    )
    client_email = models.EmailField(
        unique=True, 
        verbose_name="Email"
    )
    date_joined = models.DateTimeField(
        default=now, 
        verbose_name="Fecha de registro"
    )
    has_had_intro = models.BooleanField(
        default=False,
        verbose_name="¿Ha recibido introducción gratuita?"
    )

    class Meta:
        verbose_name = "Client"
        verbose_name_plural = "Clients"
        ordering = ['-date_joined']
        indexes = [
            models.Index(fields=['client_email'], name='client_email_idx'),
        ]
    def mark_intro_as_done(self):
        """
        Función interna que marca el campo 'has_had_intro' como True
        cuando el cliente haya recibido la introducción gratuita.
        """
        self.has_had_intro = True
        self.save(update_fields=['has_had_intro'])  # Guarda solo el campo actualizado

    def __str__(self):
        return f"{self.client_name} {self.client_surname} ({self.client_email})"
