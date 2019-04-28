var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var cors       = require('cors');
var {validApiKey}  =  require('./app/config/middleware.config.js');

app.use(cors())
app.use(bodyParser.json())
app.use(validApiKey)


require('./app/route/customer.route.js')(app);
 
// Create a Server
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})