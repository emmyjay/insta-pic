// Grab the packages we need
var express = require('express');
var app = express();
var unsplash = require('unsplash-api');

// Configure the app
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// Configure instagram app with access token

var clientId = '5a066724b51f70205a5a879987f88fdeacb55f0a63fdb594e3a926397882d68f';
 unsplash.init(clientId);

 //set the routes

 //home pages route - our profile's images
 app.get('/', function(req, res) {

unsplash.getPhotos(1, 30, function(error, photos, link){

     res.render('pages/index', {grams: photos});
   })
 });

// var port = 8181;
//
//  app.listen(port);
//  console.log('App started! look at http://localhost:' + port);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
});
