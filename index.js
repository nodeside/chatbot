var express = require('express');
var database = require('./database')();
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({
	limit: '20mb'
}));

var routes = require('./routes')(app);

database.connect({}, function(err) {
	console.log('connected to db');
});


app.listen(process.env.PORT || 3000);