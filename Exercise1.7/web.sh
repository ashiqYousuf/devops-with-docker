#!/bin/sh

while true
do
    echo "Input Website"
    read website
    echo "Seaching..."
    sleep 1
    curl http://$website
done
