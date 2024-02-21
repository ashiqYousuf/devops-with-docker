FROM ubuntu

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y wget

RUN wget https://go.dev/dl/go1.17.6.linux-amd64.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf go1.17.6.linux-amd64.tar.gz
ENV PATH=$PATH:/usr/local/go/bin

COPY go.mod go.sum ./

RUN go mod download && go mod verify

COPY . .

ENV REQUEST_ORIGIN=http://frontend-server:3000

RUN go build -o server

RUN test ./...

EXPOSE 8080

CMD [ "./server" ]
