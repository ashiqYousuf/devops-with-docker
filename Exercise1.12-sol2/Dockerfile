FROM node:14.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --ignore-engines

COPY . .

RUN npm run build

RUN npm install -g http-server

EXPOSE 3000

CMD [ "http-server", "build", "-p", "3000" ]
