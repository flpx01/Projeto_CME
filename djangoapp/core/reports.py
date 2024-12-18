from django.http import HttpResponse
from reportlab.pdfgen import canvas
from openpyxl import Workbook
from .models import Process


def generate_pdf_report(request):
    response = HttpResponse(content_type="application/pdf")
    response["Content-Disposition"] = 'attachment; filename="process_report.pdf"'

    # Criar o PDF
    p = canvas.Canvas(response)
    p.setFont("Helvetica", 12)

    # Cabeçalho
    p.drawString(100, 800, "Relatório de Rastreabilidade de Materiais")

    # Dados
    y = 750
    for process in Process.objects.all():
        line = f"{process.material.name} - {process.stage} - {process.completed_at.strftime('%Y-%m-%d %H:%M:%S')}"
        if process.has_failure:
            line += " - FALHA"
        p.drawString(100, y, line)
        y -= 20

    p.save()
    return response


def generate_xlsx_report(request):
    response = HttpResponse(
        content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
    response["Content-Disposition"] = 'attachment; filename="process_report.xlsx"'

    # Criar o arquivo XLSX
    wb = Workbook()
    ws = wb.active
    ws.title = "Relatório de Processos"

    # Cabeçalho
    ws.append(["Material", "Etapa", "Data", "Falha"])

    # Dados
    for process in Process.objects.all():
        ws.append(
            [
                process.material.name,
                process.stage,
                process.completed_at.strftime("%Y-%m-%d %H:%M:%S"),
                "Sim" if process.has_failure else "Não",
            ]
        )

    wb.save(response)
    return response
