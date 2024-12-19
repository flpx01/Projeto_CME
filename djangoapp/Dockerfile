FROM python:3.12

# Definir diretório de trabalho
WORKDIR /app

# Copiar os requisitos e instalar dependências
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copiar todo o conteúdo para o diretório de trabalho
COPY . .

# Comando para iniciar o servidor
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

