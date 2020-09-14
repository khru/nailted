#!/bin/sh

# It doesn't matter to use the front or de back container we just need a container with NPM and node install
CONTAINER_ID=$(grep -w NODE_CONTAINER_NAME .env | cut -d '=' -f2);

docker exec -it $CONTAINER_ID npm run lint:fix $@

return 0;
