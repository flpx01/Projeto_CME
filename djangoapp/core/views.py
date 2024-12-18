from rest_framework import viewsets
from .models import User, Material, Process
from .serializers import UserSerializer, MaterialSerializer, ProcessSerializer
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class MaterialViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all().order_by("id")  # Ordenação por ID
    serializer_class = MaterialSerializer
    permission_classes = [IsAuthenticated]


class ProcessViewSet(viewsets.ModelViewSet):
    queryset = Process.objects.all().order_by("completed_at")
    serializer_class = ProcessSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtra por material (serial) se fornecido
        serial = self.request.query_params.get("serial", None)
        if serial:
            return self.queryset.filter(material__serial=serial)
        return self.queryset
