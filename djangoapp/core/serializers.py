from rest_framework import serializers
from .models import User, Material, Process


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = [
            "id",
            "name",
            "material_type",
            "expiration_date",
            "serial",
        ]  # Campos visíveis
        read_only_fields = ["serial"]  # O serial será apenas leitura


class ProcessSerializer(serializers.ModelSerializer):
    material_name = serializers.ReadOnlyField(
        source="material.name"
    )  # Nome do material

    class Meta:
        model = Process
        fields = [
            "id",
            "material",
            "material_name",
            "stage",
            "completed_at",
            "has_failure",
        ]
