from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def test_connection(request):
    return JsonResponse({"message": "Frontend connected to Backend!"})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/test/", test_connection),
    path("api/", include("core.urls")),  # Rota de teste
]
