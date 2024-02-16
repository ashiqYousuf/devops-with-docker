# As per exercise use ubuntu:20.04
FROM ubuntu

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y curl

COPY web.sh .

RUN chmod +x web.sh

CMD [ "./web.sh" ]
