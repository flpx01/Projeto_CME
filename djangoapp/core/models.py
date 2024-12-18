from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


class User(AbstractUser):
    USER_TYPES = [
        ("Técnico", "Técnico"),
        ("Enfermagem", "Enfermagem"),
        ("Administrativo", "Administrativo"),
    ]
    user_type = models.CharField(max_length=50, choices=USER_TYPES, default="Técnico")
    password = models.CharField(max_length=128, default="defaultpassword")

    groups = models.ManyToManyField(
        Group,
        related_name="custom_user_groups",
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="custom_user_permissions",
        blank=True,
    )

    def __str__(self):
        return f"{self.username} ({self.user_type})"


# Materiais
class Material(models.Model):
    name = models.CharField(max_length=100, unique=True)  # Nome do material
    material_type = models.CharField(max_length=100)  # Tipo do material
    expiration_date = models.DateField()  # Data de validade
    serial = models.CharField(
        max_length=100, unique=True, blank=True
    )  # Serial gerado automaticamente

    def save(self, *args, **kwargs):
        # Gerar o serial automaticamente com base no nome
        if not self.serial:
            self.serial = f"{self.name.replace(' ', '').upper()}-{self.pk or 'NEW'}"
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


# Processos
class Process(models.Model):
    STAGES = [
        ("Recebimento", "Recebimento"),
        ("Lavagem", "Lavagem"),
        ("Esterilização", "Esterilização"),
        ("Distribuição", "Distribuição"),
    ]
    material = models.ForeignKey(
        Material, on_delete=models.CASCADE, related_name="processes"
    )
    stage = models.CharField(max_length=50, choices=STAGES)
    completed_at = models.DateTimeField(auto_now_add=True)
    has_failure = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.material.name} - {self.stage}"
