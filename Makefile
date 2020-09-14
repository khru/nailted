SHELL=/bin/bash

include .env

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  run                    🚀 Starts the apps"
	@echo "  log/api                💽 API logs from the docker container"
	@echo "  log/front              💽 Front logs from the docker container"
	@echo "  permissions            🔑 Gives permissions to the 'scripts' folder"
	@echo "  env-example            🧬 Creates the .env file with the project config"

run:
	@cd api/
	@docker-compose up -d
	@cd ../front
	@docker-compose up -d
	env-example

log/api:
	cd $(value API_FOLDER); docker-compose logs -f -t

log/front:
	cd $(value FRONT_FOLDER); docker-compose logs -f -t

permissions:
	@find . -maxdepth 2 -type d -name "scripts" | xargs sudo chmod -R +x
	find . -maxdepth 2 -type d -name "scripts" | xargs ls -la 

env-example:
	./scripts/generate_env_example.sh