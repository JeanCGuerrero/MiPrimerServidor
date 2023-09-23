# Usar una imagen de Node.js como imagen base
FROM node:20

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3001
EXPOSE 3002
EXPOSE 3003

# Comando para ejecutar la aplicación
CMD [ "node", "HelloWorld.js" ]
