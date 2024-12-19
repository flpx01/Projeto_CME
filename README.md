Iniciar os Contêineres Docker:

sh
docker-compose up -d --build
Acessar o Contêiner do Backend:

sh
docker-compose exec backend bash
Aplicar Migrações do Banco de Dados:

sh
python manage.py makemigrations
python manage.py migrate
Criar um Superusuário:

sh
python manage.py createsuperuser
Iniciar o Servidor de Desenvolvimento do Django:

sh
python manage.py runserver 0.0.0.0:8000
Acessar o Contêiner do Banco de Dados:

sh
docker-compose exec db bash
Conectar ao Banco de Dados PostgreSQL:

sh
psql -U postgres -d cme_db
Para o Frontend (usando npm)
Acessar o Diretório do Frontend:

sh
cd /caminho/para/o/diretorio/do/frontend
Instalar Dependências:

sh
npm install
Iniciar o Servidor de Desenvolvimento do Frontend:

sh
npm start
Verificação Final
Acessar a Aplicação:

Backend: http://localhost:8000

Frontend: http://localhost:3000 (ou a porta configurada)

Testar Funcionalidades:

Verifique se o frontend comunica corretamente com o backend.

Utilize a interface de administração do Django (http://localhost:8000/admin) para gerenciar os dados.
