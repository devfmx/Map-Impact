var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');


app.use(express.static("src/css"));
app.use(express.static("src/js"));
app.use(express.static("src/app"));
app.use(express.static("src/partials"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get('/', function(req, res){
  res.render('home.ejs');
  request('', function(error, response, body){
    if(error){
      console.log("SOMETHING WENT GRONG!");
      console.log(error);
    } else {
      if(response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData);
      }
    }
  });
});

app.post('/vota', function(req, res){
  console.log(req.body.estado);
  res.send("YOU HAVE REACHED THE POST ROUTE!!");
});

app.get('/bye', function(req, res){
  res.send("Goodbye!");
});

app.get('/cat', function(req, res){
  res.send("Meao!");
});

app.get('/estados/:estado', function(req, res){
  var estado = req.params.estado;
  res.send("Datos del estado de " + estado.toUpperCase());
});

app.get("*", function(req, res){
  res.send("YOU ARE A STAR!!");
});


app.listen(3000, function(){
  console.log("Map running on port 3000!!!");
});