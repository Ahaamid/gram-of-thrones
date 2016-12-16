var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require ('multer')
var upload = multer({ dest: 'entries/' })

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'ejs');
app.use(express.static('./public'));

var data = [];

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/entries', function(req, res) {
	res.render('entries');
});

app.post('/entries', upload.single('photo'), function(req, res) {
	console.log(req.body);
	console.log(req.file);
	res.render('entries', {data: req.body});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
