var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });

var app = express();

app.set('port', 3000);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/upload', upload.single('file-to-upload'), function(req, res) {
  console.log(req.file);

  var uploadedFile = req.file.path;
  var newLocation = `${req.file.destination}/${req.file.originalname}`;
  fs.rename(uploadedFile, newLocation, function() {
    res.send(`Saved to ${newLocation}.`);
  });
});

app.listen(app.get('port'), function() {
  console.log("Server started on port " + app.get('port'));
});
