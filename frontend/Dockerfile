# Usar a imagem oficial do Node.js
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos de configuração do npm
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código do projeto
COPY . .

# Expor a porta que o aplicativo irá usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
