/**
 * @author Zack Roppel
 */

var win = Ti.UI.currentWindow;
win.navBarHidden = true;

function navBar(_title){
	var nav = Ti.UI.createView({
		top : 0,
		width : Ti.UI.FILL,
		height : 50,
		backgroundImage : '/images/background/top_bar.jpg',
	});
	
	if(_title == null){
	var title = '';
	}
	
	var navTitle = Ti.UI.createLabel({
		text : _title,
		color : 'white',
		left : 5,
		right : 5,
		font:{
        	fontSize: 15,
			fontFamily: 'Helvetica Neue',
			fontWeight:'bold'
		},
	});
	
	nav.add(navTitle);
	
	return nav;
}

win.add(navBar(win.title));


var scrollView = Ti.UI.createView({
  top : 50,
  bottom : 0,
  width : Ti.UI.FILL
});
if (win.rating == 1) {
var stars = Ti.UI.createImageView({
  image:'/images/1star.png',
  top:80,
  left:15
});
}
else if (win.rating == 2) {
var stars = Ti.UI.createImageView({
  image:'/images/2stars.png',
  top:80,
  left:15
});
}
else if (win.rating == 3) {
var stars = Ti.UI.createImageView({
  image:'/images/3stars.png',
  top:80,
  left:15
});
}
else if (win.rating == 4) {
var stars = Ti.UI.createImageView({
  image:'/images/4stars.png',
  top:80,
  left:15
});
}
else if (win.rating == 5) {
var stars = Ti.UI.createImageView({
  image:'/images/5stars.png',
  top:80,
  left:15
});
}
scrollView.add(stars);

var image = Ti.UI.createImageView({
  image:'/images/pewpew.jpg',
  top:10,
  right:10,
  width:'40%'
});
//scrollView.add(image);

	var description = Ti.UI.createLabel({
		color:'#000000',
		text:'Your rating:',
		top:30,
		width:'50%',
		left:15,
		textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
	});
	scrollView.add(description);

var RatingControl = require('ui/common/RatingControl');
var ratingControl = new RatingControl();
//scrollView.add(ratingControl);

var line = Ti.UI.createView({height:2,top:160,bottom:0,left:0,right:0,borderWidth:1,borderColor:'#000'});
scrollView.add(line);


//A Text Area is similar to a Text Field except that it will allow multiple lines of text entry
var review = Titanium.UI.createTextArea({
    value:"Review:", //This text will remain in place when the user begins to enter text
    top:180,
    height:150,
    width:300,
    suppressReturn:true,//Use this property to allow the return key to function as a line-return key and not a blur-keyboard key
    borderWidth:1,
    borderColor:"#CCC",
    borderRadius:12,
    maxLength:200
});

review.addEventListener("focus",function(e){
	//Wipe out the default text on initial focus
	if(e.value == "Review:"){
		e.source.value = "";
	}
});

review.addEventListener("blur",function(e){
	//Restore the defaut text if on blur there is no text in the text area
	if(e.value == ""){
		e.source.value = "Review:";
	}
});

//Add an event listener to the window that allows for the keyboard or input keys to be hidden if the user taps outside a text field
//Note: each text field to be blurred would be added below
scrollView.addEventListener("click", function(e){
	review.blur(); // Cause the text area to lose focus, thereby hiding the keyboard (if visible)
});


scrollView.add(review);

var closeButton = Titanium.UI.createButton({
	backgroundImage : '/images/buttons/cancel.png',
	bottom:25,
	right:50,
	height : 40,
	width : 100,
})

closeButton.addEventListener("click", function(e){
	//e is the event itself
	//e.source is the object that fired the event
	//properly close the tab group with two calls
	win.close({ animated : true });
	

});
scrollView.add(closeButton);

var submitButton = Titanium.UI.createButton({
	backgroundImage : '/images/buttons/submit.png',
	bottom:25,
	left:50,
	height : 40,
	width : 100,
	
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
})

submitButton.addEventListener("click", function(e){
	//e is the event itself
	//e.source is the object that fired the event
	if (review.value == 'Review:') {
		var alert = Titanium.UI.createAlertDialog({
    title:"Nothing added",
	
   message:"Please leave a review or cancel.",
   buttonNames: ["Ok"]
  })
  alert.show();
	}
	
	else {
		
  	var json;
  	var url = win.urlPassed + "&comment=" + review.value;
  	Ti.API.info(url);
 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         Ti.API.info(url);
         json = JSON.parse(this.responseText);
         if (json.status == "error") {
         	var alert = Titanium.UI.createAlertDialog({
         		title:"Error",
         		message:"Your rating was not saved.",
         		buttonNames:["Ok"]
         		})
  alert.show();
         }
         else {
  var alert = Titanium.UI.createAlertDialog({
    title:"Review Successful",
	
   message:"Your review has been submitted.",
   buttonNames: ["Ok"]
  })
  alert.show();
  
  alert.addEventListener("click",function(e){

	win.close({ animated : true });
	
});

} },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send();

}
});
		
		
	  // var alert = Titanium.UI.createAlertDialog({
    // title:"Review Successful",
// 	
   // message:"Your review has been submitted.",
   // buttonNames: ["Ok"]
  // })
  // alert.show();
//   
  // alert.addEventListener("click",function(e){
// 
// 	
	// tabGroup.removeTab(tab);
	// tabGroup.close();
// });

	

//});
scrollView.add(submitButton);

win.add(scrollView);


