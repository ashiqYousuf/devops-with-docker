Solution:-

docker run --rm -it --name looper ubuntu sh -c 'apt-get update; clear; apt-get install -y curl; while true; do echo "Input Website"; read website; echo "Searching..."; sleep 1; curl http://$website; done'
