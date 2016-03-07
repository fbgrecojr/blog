var   express   = require('express'),
      app       = express(),
      port      = process.env.PORT || 8080;


app.use(express.static(__dirname + '/'));

app.put('/blog', function(req, res){
  console.log('put was called');
  res.sendStatus(200);
});

app.post('/blog', function(req, res){
  console.log('post was called');
});

app.listen(port, function(){
    console.log("LISTENING ON PORT " + port);
});