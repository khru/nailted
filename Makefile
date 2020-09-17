SHELL=/bin/sh

include .env

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  pre_requirements         💻 Installs all the software need it to run the project"
	@echo "  run                      🚀 Starts the api and front"
	@echo "  run/front                🚀 Starts the front"
	@echo "  run/api                  🚀 Starts the api"
	@echo "  stop                      ✋ Stops the apps"
	@echo "  stop/front                ✋ Stops the front"
	@echo "  stop/api                  ✋ Stops the api"
	@echo "  log/api                  💽 API logs from the docker container"
	@echo "  log/front                💽 Front logs from the docker container"
	@echo "  test/front               ✔️ Launch the tests on the front-end application"
	@echo "  test/front-unit          ✔️ Launch the unit tests on the front-end application"
	@echo "  test/front-e2e           ✔️ Launch the end to end tests with crypress app on the front-end application"
	@echo "  test/front-e2e-headless  ✔️ Launch the end to end tests with chrome headless on the front-end application"
	@echo "  test/api                 ✔️ Launch the tests on the back-end application"
	@echo "  permissions              🔑 Gives permissions to the 'scripts' folder"
	@echo "  env/example              🧬 Creates the .env file with the project config"
	@echo "  env/create               🔓 alias for env/base_64_to_env"
	@echo "  env/to_base_64           🔒 creates a env_base64 file with de content of all the .env files of the app"
	@echo "  env/base_64_to_env       🔓 restore .env files with the development information"

run: env/example run/api run/front
	@echo "🌟 All the docker containers running"

stop: env/example stop/api stop/front
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

test/front: run/front test/front-unit test/front-e2e-headless

test/front-unit:
	cd $(FRONT_FOLDER); npm run docker:unit

test/front-e2e-headless:
	cd $(FRONT_FOLDER); npm run docker:e2e-headless

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

env/example:
	$(SCRIPTS_FOLDER)/generate_env_example.sh
	cd $(FRONT_FOLDER); ./scripts/generate_env_example.sh
	cd $(API_FOLDER); ./scripts/generate_env_example.sh

env/to_base_64:
	$(SCRIPTS_FOLDER)/env_files_to_64.sh > env_base64
	
env/base_64_to_env:
# DO NOT CHANGE FOR $(SCRIPTS_FOLDER)
	./scripts/base_64_to_env.sh

env/create: env/base_64_to_env

pre_requirements:
	$(SCRIPTS_FOLDER)/install_pre_requirements.sh
	$(SCRIPTS_FOLDER)/install_docker.sh
	$(SCRIPTS_FOLDER)/install_docker_compose.sh
