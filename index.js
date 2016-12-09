var express = require('express');
var app = express();
var port = 4000;
var bodyParser = require('body-parser');
var multer = require ('multer')
var upload = multer({ dest: 'uploads/' })

app.use(
  bodyParser.urlencoded({ extended: true})
);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

var contact = [
  {
    Name: "Ahmad",
    Number: "420-8351",
    Address: "123 seasame st"
  },
  {
    Name:"Molly",
    Number:"555-5555",
    Address:"456 whatever st"
  },

];

app.get('/contact', function(req, res){
  res.render('contact', { contact: contacts })
})

app.get('/new_contact',function(req, res){
  res.render('new-contact')
})

app.post('/create', function(req, res){
  contact.push(req.body)
  console.log(contact);
  if (!req.body.name){
    console.log("I dont have a name");
  }
  res.render('contact', { contact: contact })
})


app.listen(port, function() {
  console.log("Listening on port..." + port);
})