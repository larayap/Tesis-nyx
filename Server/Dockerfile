FROM node:18

RUN npm i -g nodemon
RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["nodemon", "--legacy-watch", "server.js"]