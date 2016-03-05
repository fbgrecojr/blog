var   express   = require('express'),
      app       = express(),
      port      = process.env.PORT || 8080;


app.use(express.static(__dirname + '/'));

/*app.get('/', function(req, res){
    var options = {
      root: __dirname + '/'
    };

    res.sendFile('index.html', options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent: index.html');
      }
    });
});*/

app.listen(port, function(){
    console.log("LISTENING ON PORT " + port);
});