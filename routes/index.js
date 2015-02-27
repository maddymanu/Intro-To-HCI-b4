
/*
 * GET home page.
 */
//get login to work.

exports.view = function(req, res){
  res.render('index', {});
};

exports.validateform = function(req, res) {
//vars
var username = document.forms["signupForm"]["username"].value;
var pass1 = document.forms["signupForm"]["password"].value;
var isFilled=true;
var msg="";
//null check
if(username == "") {
    msg+="You forgot the user name\n";
    isFilled=false;
}
if(email == "") {
    msg+="You forgot the email address\n";
    isFilled=false;
}
if(pass1 == "") {
    msg+="You forgot a password address\n";
    isFilled=false;
}

if (username.length < 3 || username.length > 15) {
    msg+="User name is too short (under 3) or too big (over 15)\n";
    isFilled=false;
}

if (password.length < 4) {
    msg+="Your is password is too short (under 4)\n";
    isFilled=false;
}

if(!isFilled) {
    alert(msg);
}
return isFilled;

};