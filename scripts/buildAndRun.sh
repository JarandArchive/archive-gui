#!/bin/bash

APP=archive-gui
NET=jarand-net

docker build -t $APP:latest .

docker rm -f $APP || true

docker network create $NET || true

docker run -d --name $APP --network $NET -p 82:80 \
  $APP:latest
