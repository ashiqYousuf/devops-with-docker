FROM alpine:3.13

WORKDIR /usr/src/app

COPY hello.sh .

RUN chmod +x hello.sh

RUN touch additional.txt

CMD [ "./hello.sh" ]
