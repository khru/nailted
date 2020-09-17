#!/bin/bash

echo "+==================+"
echo "|    🐳 DOCKER     |"
echo "+==================+"
sudo apt-get remove docker docker.io
apt install -y docker.io
if [ ! $(grep -E "^docker:*" /etc/group) ]; then
	sudo groupadd docker
fi
sudo usermod -aG docker $USER
newgrp docker
sudo systemctl start docker
sudo systemctl enable docker
sudo service docker restart
sudo systemctl daemon-reload
sudo apt-get install aufs-tools debootstrap docker-doc rinse zfsutils

echo "↕️ La versión de docker es: " $(docker --version) 