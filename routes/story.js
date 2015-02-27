
var fs = require('fs');


exports.showS = function(req, res){

  
  var title = req.query.title;
  console.log(title);

  var inFileName = "tester.json";

  	var data2;

  fs.readFile(inFileName, 'utf8', function (err, data) {
	    if (err) {
	        console.log('Error: ' + err);
	    }
	 
	    data2 = JSON.parse(data);
	    // console.dir(data2);

	    // data2['stories'].push({"title":title, 
	    // 	"status":"pending"});

  		for (var i = 0; i < data2["stories"].length; i++){
  // look for the entry with a matching `code` value
		  if (data2['stories'][i]["title"] == title){
		     // we found it
		    // obj[i].name is the matched result
		     console.log(data2['stories'][i]);

		     res.render('story', data2['stories'][i]);
		  }
		}

		 // console.log(data2['stories'][3]["title"]);


	});

  // res.render('story', {

  // });


};