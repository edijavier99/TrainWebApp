# Generated by Django 4.2.19 on 2025-02-17 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0002_alter_client_client_email'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='client',
            options={'ordering': ['-date_joined'], 'verbose_name': 'Client', 'verbose_name_plural': 'Clients'},
        ),
        migrations.AlterField(
            model_name='client',
            name='client_email',
            field=models.EmailField(max_length=254, unique=True, verbose_name='Email'),
        ),
    ]
