SHELL=/bin/bash

include .env

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  run                    🚀 Starts the apps"
	@echo "  run/front              🚀 Starts the front"
	@echo "  run/api                🚀 Starts the api"
	@echo "  stop                    ✋ Stops the apps"
	@echo "  stop/front              ✋ Stops the front"
	@echo "  stop/api                ✋ Stops the api"
	@echo "  log/api                💽 API logs from the docker container"
	@echo "  log/front              💽 Front logs from the docker container"
	@echo "  run/front              ✔️ Launch the tests on the front-end application"
	@echo "  run/api                ✔️ Launch the tests on the back-end application"
	@echo "  run/api-watch          ✔️ Launch the tests on the back-end application and watch the changes"
	@echo "  permissions            🔑 Gives permissions to the 'scripts' folder"
	@echo "  env-example            🧬 Creates the .env file with the project config"

run: env-example run/api run/front
	@echo "🌟 All the docker containers running"
stop: env-example stop/api stop/front
	@echo "🛑 All the docker containers stopped"

run/api:
	cd $(API_FOLDER); docker-compose up -d

run/front:
	cd $(FRONT_FOLDER);docker-compose up -d

stop/api:
	cd $(API_FOLDER); docker-compose stop

stop/front:
	cd $(FRONT_FOLDER);docker-compose stop

test/api-watch: run/api
	cd $(API_FOLDER); npm run test:watch

test/api: run/api
	cd $(API_FOLDER); npm run test

test/front: run/front test/front-unit test/front-e2e

test/front-unit:
	cd $(FRONT_FOLDER); npm run test:unit

test/front-e2e:
	cd $(FRONT_FOLDER); npm run test:e2e

lint/front: run/front
	cd $(FRONT_FOLDER); npm run lint --fix

lint/api: run/api
	cd $(API_FOLDER); npm run lint:fix

log/api:
	cd $(value API_FOLDER); docker-compose logs -f -t

log/front:
	cd $(value FRONT_FOLDER); docker-compose logs -f -t

permissions:
	@find . -maxdepth 2 -type d -name "scripts" | xargs sudo chmod -R +x
	find . -maxdepth 2 -type d -name "scripts" | xargs ls -la 

env-example:
	./scripts/generate_env_example.sh