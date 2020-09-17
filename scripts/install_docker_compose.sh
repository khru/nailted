#!/bin/sh
source "${BASH_SOURCE%/*}/0-ensure.sh"
ensure::jq
ensure::curl
echo "+===================+"
echo "| 🐳 DOCKER-COMPOSE |"
echo "+===================+"

REPO=docker/compose
OUTPUT_ROUTE=/usr/local/bin/docker-compose
LATEST_VERSION=$(curl -s https://api.github.com/repos/${REPO}/releases/latest | jq -r '.tag_name')

# IF JQ INSTALLATION FAILS
# LATEST_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | awk '{ print $2 }' | sed -e 's/"//' | sed -e 's/"//' | sed -e 's/,//')

sudo curl -L "https://github.com/docker/compose/releases/download/${LATEST_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o ${OUTPUT_ROUTE}
sudo chmod +x ${OUTPUT_ROUTE}