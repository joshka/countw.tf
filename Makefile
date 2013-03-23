all: concat

concat:
	browserify site/scripts/app.js > site/scripts/app-built.js

debug:
	browserify site/scripts/app.js -o site/scripts/app-built.js --debug

