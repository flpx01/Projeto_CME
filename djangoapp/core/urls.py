from django.urls import path
from .views import UserViewSet, MaterialViewSet, ProcessViewSet
from .reports import generate_pdf_report, generate_xlsx_report
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Configuração dos endpoints de API
router = DefaultRouter()
router.register(r"users", UserViewSet, basename="user")
router.register(r"materials", MaterialViewSet, basename="material")
router.register(r"processes", ProcessViewSet, basename="process")

# Rotas para os relatórios
urlpatterns = router.urls + [
    path("reports/pdf/", generate_pdf_report, name="pdf_report"),
    path("reports/xlsx/", generate_xlsx_report, name="xlsx_report"),
]
