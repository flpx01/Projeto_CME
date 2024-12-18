# Frontend Dockerfile
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package.json /app/
COPY package-lock.json /app/

# Instala as dependências
RUN npm install

# Copia o código do projeto para dentro do container
COPY . /app

# Exposição da porta 3000
EXPOSE 3000

# Comando padrão para iniciar o servidor React
CMD ["npm", "start"]