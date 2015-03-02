'use strict';


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


function readURL(input , id) {

    // if (input.files && input.files[0]) {
    //     var reader = new FileReader();

    //     reader.onload = function (e) {
    //         $(id).attr('src', e.target.result);
    //     }

    //     reader.readAsDataURL(input.files[0]);
    // }

    if(input.files && input.files[0]) {
    	var reader = new FileReader();

        reader.onload = function (e) {
            $("#blah").attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }

    if(input.files && input.files[1]) {
    	var reader = new FileReader();

        reader.onload = function (e) {
            $("#blah2").attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[1]);
    }

    if(input.files && input.files[2]) {
    	var reader = new FileReader();

        reader.onload = function (e) {
            $("#blah3").attr('src', e.target.result);
            console.log(e.target.result);
        }

        reader.readAsDataURL(input.files[2]);
    }
}

$("#imgInp").change(function(){
    readURL(this , '#blah');
});

$("#imgInp2").change(function(){
    readURL(this , '#blah2');
});

$("#imgInp3").change(function(){
    readURL(this , '#blah3');
});

// http://www.ajaxblender.com/howto-resize-image-proportionally-using-javascript.html

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('.project').click(addProjectDetails);
	$("#testjs").click(function(e) {  
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
  // $("a.thumbnail").click(projectClick);
  $("#submitBtn").click(updateProject);
  $("#logoutBtn").click(logout);
  $("#registerBtn").click(goToRegister);
  $('#likeBtn').click(like);
  $('#commentBtn').click(addComment);
  $("#TopS").click(goToTopStories);
  $("#NewsFeed").click(goToNewsFeed);
  $("#Publish").click(goToPublish);
  $("#Profile").click(goToProfile);
  $("#story1").click(goToStory1);
  $("#story").click(goToStory);
  $("#story2").click(goToStory2);
  $("#story3").click(goToStory3);
  $("#story4").click(goToStory4);
  $("#story5").click(goToStory5);
  $("#story6").click(goToStory6);
  $("#newstory").click(goToNewStory);
  $("#published").click(goToPublished);
}
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
  // Prevent following the link
  e.preventDefault();

  // Get the div ID, e.g., "project3"
  var projectID = $(this).closest('.project').attr('id');
  // get rid of 'project' from the front of the id 'project3'
  var idNumber = projectID.substr('project'.length);
  var projectLink = $.get("/project/" + idNumber, addProject);

  console.log("User clicked on project " + idNumber);
  console.log("Project link is /project/" + idNumber);
}
function addProject(result) {
  console.log(result);
  var projectHTML = '<a href="#" class="thumbnail">' +
  '<img src="' + result['image'] + '" id="img">' + 
  '<img src="' + result['image2'] + '" id="img">' +
  '<p>' + result['title'] + '</p>' + 
  '<p><small>' + result['date'] + '</small></p></a>';

  var projectDescription = '<div class="new-container">'+ '<p>' + result['summary'] + '</p><img src="' + result['image'] + 
  '" class="img-rounded img-responsive" id="img">' +  '<p>' + result['description1'] + '</p>' +
  '<img src="' + result['image2'] + '" class="img-rounded img-responsive" id="img">' +
  '<p>' + result['description2'] + '</p></div>' ;

  $("#project-container").html(projectHTML);
  $("#project-description").html(result['summary']);
  var project = $("#project" + result['id']);
    var detail = project.find(".details");
    $(detail).html(projectDescription);

}
function like(e){
  e.preventDefault();
  console.log("User clicked on like button");
}
function addComment(e){
  e.preventDefault(); 
  console.log("User clicked on comment button");
}
function comment(result) {
  console.log(result);
  var projectDescription = '<img src="' + result['profileURL'] + '" class="detailsImage">' +
  '<p>' + result['title'] + '</p>' + 
  '<p><small>' + result['date'] + '</small>' + result['summary'] + '</p>' ;
  $(".details").html(projectDescription);
}
function logout(e) {
	window.location='/';
}
function goToNewStory(e) {
  console.log("newstory Link clicked!");
  window.location='/newstory';
}

function goToTopStories(e) {
	console.log("Top Stories Link clicked!");
	window.location='/login';
}

function goToStory(e) {
  console.log("story6 Link clicked!");
  window.location='/story6';
}

function goToNewsFeed(e) {
	window.location='/newsfeed';
}

function goToPublish(e) {
	window.location='/publish';
}

function goToProfile(e) {
	window.location='/profile';
}

 function updateProject(e) {
   window.location='/login';
 }

function goToRegister(e) {
  window.location='/register';
}

function projectClick(e) {
  
}
