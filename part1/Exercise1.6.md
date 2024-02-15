Solution:-

For this you need to know the Dockerfile content.
You can do like this

docker run -d -it devopsdockeruh/pull_exercise

then enter into the container

docker exec -it *cotainerid* sh

do the following
ls
cat Dockerfile [You can see the node index.js file is executed when we run the container]
cat index.js [Looking a bit at the logic, you can see password:- basics can led us to victory]

Ans:- basics
