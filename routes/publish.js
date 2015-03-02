
// var tester = require("../ts.json");

// var ts = require("ts.json");
// var data = require("../data.json");
// var express = require('express');
// var app = express();
// var http = require('http');
// var server = http.createServer(app);
var fs = require('fs');



exports.view = function(req, res){
  // console.log(req.obj["name"]);
  // data["stories"].push(req.obj);
  res.render('publish', {});
  // var txt1 = (document.getElementById("txt1").value);
};


exports.addStory = function(req, res) {    
	// Your code goes here
	var title = req.query.titleB;
	var img0 = "uploads/" + req.query.images[0];
	var img1 = "uploads/" + req.query.images[1];
	var img2 = "uploads/" + req.query.images[2];

	var des1 = req.query.txt1;
	var des2 = req.query.txt2;
	var des3 = req.query.txt3;

	 var outputFilename = "tester.json";

	var inFileName = "tester.json";

	var data2;

	fs.readFile(inFileName, 'utf8', function (err, data) {
	    if (err) {
	        console.log('Error: ' + err);
	    }
	 
	    data2 = JSON.parse(data);
	    console.dir(data2);

	    // data2['stories'].push({"title":title, 
	    // 	"status":"pending"});

	   data2["stories"].push({title:title , profileURL: "images/profile1.png", imgURL: img0, img0: img0, img1: img1, img2: img2 , 
		des1: des1 , des2: des2 , des3:des3});

	    	fs.writeFile(outputFilename, JSON.stringify(data2, null, 4), function(err) {
			    if(err) {
			      console.log(err);
			    } else {
			      console.log("JSON saved to " + outputFilename);
			    }

			    res.render('published', {title:title , img0: img0, img1: img1, img2: img2 , 
		des1: des1 , des2: des2 , des3:des3});
			});


	});

	
	console.dir(data2);
	
	
 }

exports.renew = function(req, res) {
	var inFileName = "tester.json";

	fs.readFile(inFileName, 'utf8', function (err, data) {
	    if (err) {
	        console.log('Error: ' + err);
	    }
	 
	    data = JSON.parse(data);
	    console.dir(data);

	    res.render('published', data);
	});
}
