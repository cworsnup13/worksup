var http = require('http');
    fs = require('fs');

var api_router = function(url_entry, res) {
  console.log(url_entry)
    fs.readFile('./api_index.html', function (err, api_html){
      if (err) {
        throw err;
      }
      res.write(api_html);
      res.end();
    });
}

var append_router = function(url_entry, res) {
  console.log(url_entry)
    fs.readFile('./append_index.html', function (err, append_html){
      if (err) {
        throw err;
      }
      res.write(append_html);
      res.end();
    });
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.url.indexOf("api") > -1) {
    api_router(req.url, res);
  }
  else if (req.url.indexOf("submit") > -1) {
    append_router(req.url, res);
  }

  else {
    fs.readFile('./index.html', function (err, html){
      if (err) {
        throw err;
        }
      res.write(html)
      res.end();
    });
  }
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1');

