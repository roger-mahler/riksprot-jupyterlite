SHELL := /bin/bash

ready: requirements.txt build

build: requirements.txt
	@poetry run jupyter lite build

requirements.txt: poetry.lock
	@poetry export --without-hashes -f requirements.txt --output requirements.txt

.PHONY: ready build requirements.txt
