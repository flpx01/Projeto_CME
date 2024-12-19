from rest_framework import viewsets
from .models import User, Material, Process
from .serializers import UserSerializer, MaterialSerializer, ProcessSerializer
import logging
from rest_framework.permissions import AllowAny

logger = logging.getLogger(__name__)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action == "create":
            return [AllowAny()]


class MaterialViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all().order_by("id")  # Ordenação por ID
    serializer_class = MaterialSerializer


class ProcessViewSet(viewsets.ModelViewSet):
    queryset = Process.objects.all().order_by("completed_at")
    serializer_class = ProcessSerializer

    def get_queryset(self):
        # Log do parâmetro recebido
        serial = self.request.query_params.get("serial", None)
        logger.info(f"Parâmetro serial recebido: {serial}")

        # Filtra por material (serial) se fornecido
        if serial:
            queryset_filtrado = self.queryset.filter(material__serial=serial)
            logger.info(f"Queryset filtrado: {queryset_filtrado}")
            return queryset_filtrado
        return self.queryset


# def get_queryset(self):
# Filtra por material (serial) se fornecido
#  serial = self.request.query_params.get("serial", None)
# if serial:
#     return self.queryset.filter(material__serial=serial)
#   return self.queryset

# class ProcessViewSet(viewsets.ModelViewSet):
# queryset = Process.objects.all().order_by("completed_at")
# serializer_class = ProcessSerializer
# permission_classes = [IsAuthenticated]#
