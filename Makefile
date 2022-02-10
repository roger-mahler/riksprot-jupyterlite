SHELL := /bin/bash

ready: requirements.txt build

build: requirements.txt
	@poetry run jupyter lite build

requirements.txt: poetry.lock
	@poetry export --without-hashes -f requirements.txt --output requirements.txt

clean:
	@ find . -name __paths__.py -delete
	@-find . -name __pycache__ -type d -exec rm -rf \{\} \; >& /dev/null
	@-find . -name .ipynb_checkpoints -type d -exec rm -rf \{\} \; >& /dev/null

.PHONY: ready build requirements.txt
