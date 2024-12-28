from django.urls import path
from .views import ArticleListApiView,ArticleDetailApiView,BlogSubscriberApiView

urlpatterns = [
    # URLS FOR ARTICLES
    path('articles/', ArticleListApiView.as_view(), name='article-list'),
    path('articles/<slug:slug>/', ArticleDetailApiView.as_view(), name='article-detail'),  # Nueva ruta
    
    #URLS FOR BLOG SUBSCRIBERS
    path('susbcribers/',BlogSubscriberApiView.as_view(), name='subscribers-list' ),
    path('subscribers/<int:pk>/unsubscribe/', BlogSubscriberApiView.as_view(), name='subscriber-unsubscribe'),

]
