/**
 * @author Zack Roppel
 * 
 * when user picks something on Content page, this page opens up
 */

function navBar(_title){
	var nav = Ti.UI.createView({
		top : 0,
		width : Ti.UI.FILL,
		height : 50,
		backgroundImage : '/images/background/top_bar.jpg',
	});
	
	if(_title != null){
	var title = _title.slice(0,(_title.length-7));
	}
	
	var titleContainer = Ti.UI.createView({
		left : 75,
		top : 0,
		bottom : 0,
		right : 0,
	});
	
	nav.add(titleContainer);
	
	var navTitle = Ti.UI.createLabel({
		text : title,
		color : 'white',
		font:{
        	fontSize: 15,
			fontFamily: 'Helvetica Neue',
			fontWeight:'bold'
		},
	});
	
	titleContainer.add(navTitle);
	
	var backBttn = Ti.UI.createButton({
		left : 2,
		height : 30,
		width : 70,
		backgroundImage : '/images/buttons/movies.png'
	});
	
	nav.add(backBttn);
	
	backBttn.addEventListener('click', function(){
		win.close({ animated : true });
	});
	
	return nav;
}

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

win.add(navBar(win.title));

var topView = Ti.UI.createView({
	top : 50,
	left : 0,
	right : 0,
	height : 200,
});

win.add(topView);

var movieImage = Ti.UI.createImageView({
	image: '/images/views/film-reel.png',
	top : 30,
	left : 10,
	height : 100,
	width : 100,
});

topView.add(movieImage);

var genre = Ti.UI.createLabel({
	top : 10,
	left : 150,
	text : win.topLeftText,
	font:{
    	fontSize: 15,
		fontFamily: 'Helvetica Neue',
	},
});

topView.add(genre);

var fivestar = Ti.UI.createImageView({
  image:'/images/5stars.png',
  top:40,
  left:150,
  width:'30%'
});
topView.add(fivestar);

var fivestar = Ti.UI.createLabel({
		color:'#000000',
		text:': ' + win.fiveStarRatings,
		top:37,
		left:250
	});
	topView.add(fivestar);

var fourstar = Ti.UI.createImageView({
  image:'/images/4stars.png',
  top:60,
  left:150,
  width:'30%'
});
topView.add(fourstar);

var fourstar = Ti.UI.createLabel({
		color:'#000000',
		text:': ' + win.fourStarRatings,
		top:57,
		left:250
	});
	topView.add(fourstar);

var threestar = Ti.UI.createImageView({
  image:'/images/3stars.png',
  top:80,
  left:150,
  width:'30%'
});
topView.add(threestar);

var threestar = Ti.UI.createLabel({
		color:'#000000',
		text:': ' + win.threeStarRatings,
		top:77,
		left:250
	});
	topView.add(threestar);

var twostar = Ti.UI.createImageView({
  image:'/images/2stars.png',
  top:100,
  left:150,
  width:'30%'
});
topView.add(twostar);

var twostar = Ti.UI.createLabel({
		color:'#000000',
		text:': ' + win.twoStarRatings,
		top:97,
		left:250
	});
	topView.add(twostar);

var onestar = Ti.UI.createImageView({
  image:'/images/1star.png',
  top:120,
  left:150,
  width:'30%'
});
topView.add(onestar);

var onestar = Ti.UI.createLabel({
		color:'#000000',
		text:': ' + win.oneStarRatings,
		top:117,
		left:250
	});
	topView.add(onestar);


var RatingControl = require('ui/common/RatingControl');
var ratingControl = new RatingControl();

topView.add(ratingControl);

var submitButton = Titanium.UI.createButton({
	backgroundImage : '/images/buttons/submit_button.png',
	height:30,
	width:110,
	top:150,
	right:15
});  
 
topView.add(submitButton);

//this is the window where the item review takes place

submitButton.addEventListener('click', function() {
  if (ratingControl.getValue() == 0) {
  	var alert = Titanium.UI.createAlertDialog({
  		title:"No Rating Selected",
  		message:"Please enter a value 1-5."})
  alert.show();
  }
  else {
  	var json;
  	var url = "http://108.166.89.121/Recommender.php?functionCall=LeaveRequest&uid="+ win.userID + "&iid=" + win.itemID + "&type=movies&rate=" + ratingControl.getValue();

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
           	
  	
  	
    title:"Success: " + ratingControl.getValue(),
   
	
   message:"Would you like to leave a comment?",
   buttonNames: ["No","Yes"]
  })
  alert.show();
  
  alert.addEventListener("click",function(e){

	
	if(e.index == 0){
		//if no
		
	}else if(e.index == 1){
		//if yes
		
		var w = Ti.UI.createWindow({
				//title:'Title',//Take the title from the row
				backgroundColor:"#FFFFFF",
				tabBarHidden:true,
				navBarHidden: true,
				urlPassed:url,
				rating:ratingControl.getValue(),
				title:win.getTitle(),
				url:'ItemReview.js'//The url property of a window will load an external .js file for window contents (be sure that external file is properly formatted!)
			});
			w.open();
		
	}
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

 //Method for custom table row creation for our content
//1. Store all the data we need in an array of objects
//2. Traverse the array in a for loop and make TableViewRows out of views
//3. Store the created TableViewRows in a new array
//4. Set the new array as the data source for our TableView

//1. Store all the data we need in an array of objects

//need to add using json and push onto array like this
//menu.push({id: 4, title: "this is the title" });
// var data = [ 
	// {review: 'I really liked this picture of a cat. It\'s hilarious!', author:'Steve Donnelly', rating:'5'}, 
	// {review: 'I don\'t really like cats, but this one is funny.', author:'Zack Roppel', rating:'4'}, 
	// {review: 'This is animal abuse. I am going to report you to PETA.', author:'Olga Tovashova', rating:'1'}, 
	// {review: 'Meow meow meow', author:'Nikolay Cherepanov', rating:'5'},
	// {review: 'If it\'s not Dilbert or Steve Jobs, it\'s bullshit.', author:'Bob Buckley', rating:'1'}
// 	
	// ]
	
	var data = win.itemReviews;
	var rowData = []; //An array that will hold our row objects created by createTableViewRow

//2. Traverse the array in a for loop and make TableViewRows out of views
for(var i = 0; i < data.length; i++){
	
	//Create rows to insert in the table row

	var review = Titanium.UI.createLabel({
		text:"Review: " + data[i].comment +
		"\nAuthor: " + data[i].userID
		 + "\nRating: " + data[i].ratingValue,//The title property of the data array
		height:'auto',
		width:'95%', //Ideally the screen width
		//bottom:0,
		//left:5,
		color:"#000",
		textAlign:"left"
	});
/*
	var author = Titanium.UI.createLabel({
		text:"Author: " + data[i].author,
		 + "\nRating: " + data[i].rating,
		 + //The amount property of the data array
		height:'auto',
		width:'auto', //Ideally the screen width
		//bottom:0,
		left:0,
		color:"#000",
		textAlign:"left"
	});
	
	var rating = Titanium.UI.createLabel({
		text:"Rating: " + data[i].rating,//The amount property of the data array
		height:'auto',
		width:'auto', //Ideally the screen width
		//bottom:0,
		left:0,
		color:"#000",
		textAlign:"left"
	});
	*/
	//Create the row
	var row = Titanium.UI.createTableViewRow({
		height:"auto",//Set the height of the row to auto so that it expands freely in the vertical direction
		touchEnabled: false,
		backgroundColor : (i%2==0) ? '#ECECEC' : '#ffffff',
	});
	
	//Add the views to the row
	row.add(review);
	

	//3. Store the created TableViewRows in a new array
	//push the row into the array
	rowData.push(row);
}

//More complex table will use rows created with createTableViewRow
var tableView = Titanium.UI.createTableView({
	//4. Set the new array as the data source for our TableView
	data:rowData,
	top:250,
	bottom : 0,
});

win.add(tableView);
