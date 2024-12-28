from django.urls import path
from .views import ArticleListApiView,ArticleDetailApiView

urlpatterns = [
    path('articles/', ArticleListApiView.as_view(), name='article-list'),
    path('articles/<slug:slug>/', ArticleDetailApiView.as_view(), name='article-detail'),  # Nueva ruta

]
