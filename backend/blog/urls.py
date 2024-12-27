from django.urls import path
from .views import ArticleListApiView,CreateComment

urlpatterns = [
    path('articles/', ArticleListApiView.as_view(), name='article-list'),
    path('comment/', CreateComment.as_view(), name='comment-list'),

]
