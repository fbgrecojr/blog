const app       = require('express')(),
      twilio    = require('twilio'),
      authToken = '2435e46cfff31113bd81eed73497cafb',
      sid       = 'AC1582bdee16226c1bfff1f328c48978be',
      number    = '+14144090913',
      port      = process.env.PORT || 8080;

var   client    = new twilio.RestClient(authToken, sid);


app.get('/', function(req, res){
    res.send("Welcome to Express!!!");
});

app.post('/text', function(req, res){
    client.sms.messages.create({
        to: '+14144779013',
        from: number,
        body: 'req.body.message'
    }, function(error, message) {
        if (!error) {
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);

            console.log('Message sent on:');
            console.log(message.dateCreated);
        } else {
            console.log('Oops! There was an error.');
            throw error;
        }
    });
});

app.listen(port, function(){
    console.log("LISTENING ON PORT " + port);
});