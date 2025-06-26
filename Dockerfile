# Use a imagem oficial do Nginx
FROM nginx:alpine

# Copie os arquivos do site para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Exponha a porta padrão do Nginx
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"] 