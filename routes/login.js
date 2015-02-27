var data = require("../tester.json");

exports.view = function(req, res){
  res.render('login', {
	'projects': [
		{ 	'name': 'The Cupcake Thieves: Insight on Food Patterns for Beagles',
		    'image': 'images/dog-3.jpg',
		    'profileURL': "images/profile4.jpg",
		    'like': "1,732",
		    "user": 'The Beagle Lover',
		    'id': 'project1'
		},
		{ 	'name': 'Comic Con 2014, Let Our Imaginations Begin',
			'image': 'images/comic1.jpg',
			'profileURL': "images/profile3.jpg",
			'like': "1,653",
		    "user": 'The Joker',
			'id': 'project2'
		}   	
	]
  });
};