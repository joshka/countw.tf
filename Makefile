all: concat

concat:
	browserify site/scripts/app.js > site/scripts/app-built.js

debug:
	browserify site/scripts/app.js -o site/scripts/app-built.js --debug

watch:
	supervisor --watch site/scripts --ignore site/scripts/app-built.js --no-restart-on exit --exec make debug