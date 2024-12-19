# Usar a imagem oficial do Python
FROM python:3.12

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos de requisitos
COPY requirements.txt .

# Atualizar o pip e instalar as dependências
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Copiar o código do projeto
COPY . .

# Comando para rodar o servidor de desenvolvimento do Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
