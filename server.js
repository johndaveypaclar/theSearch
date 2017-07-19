var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
  });
app.get('/b5', function(req, res){
  res.sendFile(path.join(__dirname, 'views/canonicalization.html'));
  });
app.get('/b3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/onpageoffpage.html'));
  });
app.get('/b4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/responsive.html'));
  });
app.get('/b2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/seoandsem.html'));
  });
app.get('/b1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/whatisseo.html'));
  });



//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});