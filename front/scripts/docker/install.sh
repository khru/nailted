#!/bin/sh

# Getting .env values to use on the script
CONTAINER_ID=$(grep FRONT_NODE_CONTAINER_NAME .env | cut -d '=' -f2);

docker exec -it $CONTAINER_ID npm install && npm audit fix;

return 0;
