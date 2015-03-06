
var fs = require('fs');

exports.view = function(req, res){
  

  var inFileName = "tester.json";

	fs.readFile(inFileName, 'utf8', function (err, data) {
	    if (err) {
	        console.log('Error: ' + err);
	    }
	 
	    data = JSON.parse(data);
	    console.dir(data);

	    res.render('published', data);
	});

  // 
};