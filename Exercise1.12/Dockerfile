FROM ubuntu

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apt-get update

RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash

RUN apt-get install -y nodejs

COPY package*.json .

RUN npm i --ignore-engines

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:8080

RUN npm run build

RUN npm install -g http-server

EXPOSE 3000

CMD [ "http-server", "build", "-p", "3000" ]
