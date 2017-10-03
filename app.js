var express = require('express'),
app = express(),
cors = require('cors'),
bodyParser = require('body-parser'),
port = process.env.PORT || 3000;

/* Enabled cors */
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

/* Load routes */
var index = require('./routes/index');
var gifs = require('./routes/gifs');

app.use('/', index);
app.use('/gifs', gifs);

console.log('todo list RESTful API server started on: ' + port);
