#!/bin/sh

CONTAINER_ID=$(grep -w NODE_CONTAINER_NAME .env | cut -d '=' -f2);

docker exec -it $CONTAINER_ID npm run test:e2e-headless

return 0;
