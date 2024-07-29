# Makefile for the template-app project

# Define variables for commands
NPM = npm
ESLINT = eslint --ignore-path .gitignore "src/**/*.+(ts|js|tsx)"
PRETTIER = prettier --ignore-path .gitignore "src/**/*.+(ts|js|tsx)" --write
TS_CHECK = tsc
SVGO = svgo -f public/icon

# Default target: run development server
.PHONY: all
all: dev

# Run the development server
.PHONY: dev
dev:
	$(NPM) run dev

# Build the project
.PHONY: build
build:
	$(NPM) run build

# Start the production server
.PHONY: start
start:
	$(NPM) run start

# Type check using TypeScript
.PHONY: type-check
type-check:
	$(NPM) run type-check

# Lint the codebase
.PHONY: lint
lint:
	$(NPM) run lint

# Format the codebase
.PHONY: format
format:
	$(NPM) run format

# Commit using Commitizen
.PHONY: commit
commit:
	$(NPM) run commit

# Optimize SVG files
.PHONY: svgo
svgo:
	$(NPM) run svgo
