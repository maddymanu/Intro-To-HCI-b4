
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
var done=false;

/*Configure the multer.*/

app.use(multer({ dest: 'public/uploads/',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

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
//app.get('/api/photo', publish.addStory);
app.get('/addAccount', register.addAccount);
app.get('/story', story.showS);
app.get('/',function(req,res){
      res.sendfile("publish.handlebars");
});
/*Handling routes.*/

app.post('/api/photo',function(req,res){
  if(done==true){
    console.log(req.files);



    var fs = require('fs');

	// Your code goes here
	var title = req.body.titleB;
	var img0 = req.files.images[0].path.substr('public/'.length);
	var img1 = req.files.images[1].path.substr('public/'.length);
	var img2 = req.files.images[2].path.substr('public/'.length);

	var des1 = req.body.txt1;
	var des2 = req.body.txt2;
	var des3 = req.body.txt3;

	 var outputFilename = "tester.json";

	var inFileName = "tester.json";

	var data2;

	fs.readFile(inFileName, 'utf8', function (err, data) {
	    if (err) {
	        console.log('Error: ' + err);
	    }
	 
	    data2 = JSON.parse(data);
	    console.dir(data2);

	   data2["stories"].push({title:title , profileURL: "images/profile1.png", imgURL: img0, img0: img0, img1: img1, img2: img2 , 
		des1: des1 , des2: des2 , des3:des3});

	    	fs.writeFile(outputFilename, JSON.stringify(data2, null, 4), function(err) {
			    if(err) {
			      console.log(err);
			    } else {
			      console.log("JSON saved to " + outputFilename);
			    }

			    //res.render('published', {title:title , img0: img0, img1: img1, img2: img2 , 
		//des1: des1 , des2: des2 , des3:des3});
	    	res.redirect('/newsfeed');
			});

	});

	
	console.dir(data2);   
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
