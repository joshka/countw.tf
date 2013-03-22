all: concat

concat:
	browserify scripts/app.js > scripts/app-built.js

watch:
	browserify scripts/app.js -o scripts/app-built.js --watch --debug