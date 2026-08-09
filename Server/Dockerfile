FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json ./

# Solo dependencias de produccion: las de desarrollo (concurrently y su
# cadena, que arrastra shell-quote y lodash) no tienen por que viajar
# dentro de la imagen que corre expuesta a internet.
RUN npm ci --omit=dev

COPY . .

EXPOSE 5000

# node en vez de nodemon: nodemon es una herramienta de desarrollo que vigila
# el sistema de archivos y reinicia el proceso ante cualquier cambio.
CMD ["node", "server.js"]