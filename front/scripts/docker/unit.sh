#!/bin/sh

CONTAINER_ID=$(grep -w NODE_CONTAINER_NAME .env | cut -d '=' -f2);

docker exec -it $CONTAINER_ID test:watch $@

return 0;
