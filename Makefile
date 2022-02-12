SHELL := /bin/bash

ROOT_FOLDER=~/source/welfare-state-analytics/welfare_state_analytics

ready: requirements.txt build

build: requirements.txt
	@poetry run jupyter lite build --output-dir=./_output --force -y
	@rm -rf ./dist ./package
	@poetry build
	@mv ./dist ./package

requirements.txt: poetry.lock
	@poetry update
	@poetry export --without-hashes -f requirements.txt --output requirements.txt

clean:
	@-find . -name __paths__.py -delete  >& /dev/null
	@-find . -name __pycache__ -type d -exec rm -rf \{\} \; >& /dev/null
	@-find . -name .ipynb_checkpoints -type d -exec rm -rf \{\} \; >& /dev/null

nuke:
	@rm -rf ./content/notebooks ./westac/riksprot

.ONESHELL: source
source: nuke
	@mkdir -p content/notebooks content/data westac
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
		./content/notebooks
	@cp -r $(ROOT_FOLDER)/westac/riksprot ./westac
	@touch ./westac/__init__.py

set_version:
	@current_version=$$(poetry version | cut -d' ' -f2) \
	 && pushd . > /dev/null \
	 && cd $(ROOT_FOLDER) \
	 && westac_version="$$(poetry version | cut -d' ' -f2)" \
	 && popd > /dev/null \
	 && if [ "$${current_version}" != "$${current_version}" ] ; then \
			poetry version "$${westac_version}" ;  \
		fi

release: source clean ready commit nuke

commit:
	@git add .
	@git commit -m "✨✨✨✨"
	@git push

.PHONY: ready build requirements.txt source release help commit

help:
	@poetry run jupyter lite --help-all | less
