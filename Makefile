SHELL := /bin/bash

ROOT_FOLDER=~/source/welfare-state-analytics/welfare_state_analytics

ready: requirements.txt build

build: requirements.txt
	@poetry run jupyter lite build

requirements.txt: poetry.lock
	@poetry export --without-hashes -f requirements.txt --output requirements.txt

clean:
	@ find . -name __paths__.py -delete
	@-find . -name __pycache__ -type d -exec rm -rf \{\} \; >& /dev/null
	@-find . -name .ipynb_checkpoints -type d -exec rm -rf \{\} \; >& /dev/null

source:
	@rm -rf ./content/*
	@rsync -av --prune-empty-dirs \
		--exclude "__paths__.py" \
		--exclude "__pycache__" \
		--exclude ".ipynb_checkpoints" \
		--include "*.py" \
		--include "*.ipynb" \
		--include "*.yml" \
		--include "*/" \
		--exclude "*" \
		$(ROOT_FOLDER)/notebooks/riksdagens_protokoll/ \
		./content
	@mkdir -p content/data content/westac
	@cp $(ROOT_FOLDER)/__paths__.py ./content/
	@cp -r $(ROOT_FOLDER)/westac/riksprot ./content/westac

release: clean source ready

.PHONY: ready build requirements.txt source release help

help:
	@poetry run jupyter lite --help-all | less
