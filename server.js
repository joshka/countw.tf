var http = require('http');
var send = require('send');
var url = require('url');
var path = require('path')
var app = require('express')()

var server = http.createServer(app).listen(process.env.PORT || 8080)

app.all('/*', function(req, res, next){
  if (req.headers.host.match(/^www/)) {
    res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();     
  }
});

app.use(function(req, res) {
  function error(err) {
    res.statusCode = err.status || 500;
    res.end(err.message);
  }
  function redirect() {
    res.statusCode = 301;
    res.setHeader('Location', req.url + '/');
    res.end('Redirecting to ' + req.url + '/');
  }
  send(req, url.parse(req.url).pathname)
    .root(path.join(__dirname, ''))
    .on('error', error)
    .on('directory', redirect)
    .pipe(res);
})