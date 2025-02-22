# Generated by Django 4.2.19 on 2025-02-17 10:16

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_blogsubscriber_delete_comment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blogsubscriber',
            options={'ordering': ['-subscribed_at'], 'verbose_name': 'Subscriber', 'verbose_name_plural': 'Blog Subscribers'},
        ),
        migrations.AlterField(
            model_name='blogsubscriber',
            name='subscriber_email',
            field=models.EmailField(max_length=254, unique=True, validators=[django.core.validators.EmailValidator()], verbose_name='subscription email'),
        ),
    ]
