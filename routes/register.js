var fs = require('fs');

exports.view = function(req, res){
  res.render('register',  {});
};

exports.addAccount = function(req, res) {
	// Your code goes here
	var username = req.query.username;
	var password = req.query.password;

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

	   data2["users"].push({username:username, password:password});

	    	fs.writeFile(outputFilename, JSON.stringify(data2, null, 4), function(err) {
			    if(err) {
			      console.log(err);
			    } else {
			      console.log("JSON saved to " + outputFilename);
			    }

			    res.render('login', data2);
			});


	});

	
	console.dir(data2);
}