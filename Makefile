install:
	npm ci

publish:
	npm publish --dry-run

dev:
	npm run dev

build:
	npm run build

lint:
	npx eslint .

lintfix:
	npx eslint --fix .
