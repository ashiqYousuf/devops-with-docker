Solution:-

docker pull devopsdockeruh/simple-web-service:ubuntu
docker run -d  --name secretMsg devopsdockeruh/simple-web-service:ubuntu
docker exec -it secretMsg bash

tail -f ./text.log
