from django.db import models
from django.core.validators import EmailValidator
from django.utils.translation import gettext_lazy as _

class Appointment(models.Model):
    # Define los estados posibles para la cita (valid o attended)
    class AppointmentStatus(models.TextChoices):
        PENDING = 'pending', _('Pending')
        ATTENDED = 'attended', _('Attended')
        CANCELLED = 'cancelled', _('Cancelled')
        NO_SHOW = 'no_show', _('No Show')

    # Define los tipos posibles para la cita (introduction, single session, etc.)
    class AppointmentType(models.TextChoices):
        INTRODUCTION = 'introduction', _('Introduction')
        SINGLE_SESSION = 'single_session', _('Single Session')
        MONTH_PLAN = 'month_plan', _('Month Plan')
        ANNUAL_PLAN = 'annual_plan', _('Annual Plan')

    appointment_client_email = models.EmailField(
        validators=[EmailValidator()], 
        unique=False, 
        verbose_name=_('Client Email')
    )
    appointment_time = models.TimeField(verbose_name=_('Appointment Time'))
    appointment_date = models.DateField(verbose_name=_('Appointment Date'))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('Created At'))
    appointment_status = models.CharField(
        max_length=10,
        choices=AppointmentStatus.choices,
        default=AppointmentStatus.PENDING,
        verbose_name=_('Appointment Status')
    )
    appointment_type = models.CharField(
        max_length=20,
        choices=AppointmentType.choices,
        verbose_name=_('Appointment Type')
    )
    appointment_notes = models.TextField(
        blank=True, 
        null=True, 
        verbose_name=_('Appointment Notes'), 
        help_text=_('Add any additional notes about the appointment')
    )
    appointment_url = models.URLField(
        blank=True, 
        null=True, 
        verbose_name=_('Appointment URL'), 
        help_text=_('URL link to the appointment (if needed)')
    )

     # Relación con el modelo Client
    client = models.ForeignKey(
        'clients.Client',  # Aquí se referencia el modelo 'Client' en la app 'clients'
        on_delete=models.CASCADE,  # Si se elimina un cliente, se eliminan sus citas
        related_name='appointments', 
        verbose_name=_('Client')
    )

    # Definir la restricción única a nivel de base de datos para evitar citas duplicadas
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['appointment_client_email', 'appointment_date', 'appointment_time'],
                name='unique_appointment_per_client_time'
            ),
        ]
        indexes = [
            models.Index(fields=['appointment_client_email', 'appointment_date', 'appointment_time']),
        ]
        ordering = ['appointment_date', 'appointment_time']

    def __str__(self):
        return f"Appointment for {self.appointment_client_email} on {self.appointment_date} at {self.appointment_time}"
