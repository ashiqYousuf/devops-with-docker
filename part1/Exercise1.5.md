Solution:-

Exercise 1.5

docker run --rm -d devopsdockeruh/simple-web-service:alpine

docker ps [will give you container id]

docker exec -it *containerid* sh

tail -f ./text.log
