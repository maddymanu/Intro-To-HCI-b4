
/**
 * Module dependencies.
 */

var express = require('express');
var multer = require('multer');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var project = require('./routes/project');
var login = require('./routes/login');
var register = require('./routes/register');
var story = require('./routes/story');

var newsfeed = require('./routes/newsfeed');
var publish = require('./routes/publish');
var profile = require('./routes/profile');
var newstory = require('./routes/newstory');
var published = require('./routes/published');
// Example route('./routes/story4');
// var user = require('./routes/user');

var app = express();

/*Configure the multer.*/

app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
}
}));

// var bodyParser = require('body-parser');
// var multer = require('multer');         

// these statements config express to use these modules, and only need to be run once
// app.use(bodyParser.json());         
// app.use(bodyParser.urlencoded({ extended: true }));                                
// app.use(multer);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.view);
app.get('/register', register.view);
app.get('/project/:id', project.projectInfo);

app.get('/newsfeed', newsfeed.view);
app.get('/publish', publish.view);
app.get('/profile', profile.view);
app.get('/newstory', newstory.view);
app.get('/published', published.view);

app.get('/add', publish.addStory);
app.get('/addAccount', register.addAccount);
app.get('/story', story.showS);

/*Handling routes.*/

app.get('/',function(req,res){
      res.sendfile("publish.handlebars");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
