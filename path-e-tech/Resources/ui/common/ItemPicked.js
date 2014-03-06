/**
 * @author Zack Roppel
 * 
 * when user picks something on Content page, this page opens up
 */



var win = Ti.UI.currentWindow;

var image = Ti.UI.createImageView({
  image:'/images/pewpew.jpg',
  top:20,
  right:10,
  width:'40%'
});
win.add(image);

	var description = Ti.UI.createLabel({
		color:'#000000',
		text:'It\'s a cat with lazers',
		top:20,
		width:'50%',
		left:20,
		textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
	});
	win.add(description);

var RatingControl = require('ui/common/RatingControl');
var ratingControl = new RatingControl();
win.add(ratingControl);
 
 
    
    var submitButton = Titanium.UI.createButton({
	title:"Submit Rating",
	height:30,
	width:110,
	top:125,
	left:20
});  
 
win.add(submitButton);

//this is the window where the item review takes place
var w = Ti.UI.createWindow({
				title:'Title',//Take the title from the row
				backgroundColor:"#FFFFFF",
				tabBarHidden:true,
				navBarHidden: true,
				//dataToPass:e.source.dataToPass,
				url:'ItemReview.js'//The url property of a window will load an external .js file for window contents (be sure that external file is properly formatted!)
			});
submitButton.addEventListener('click', function() {
  // alert(ratingControl.getValue());
  var alert = Titanium.UI.createAlertDialog({
    title:"Rating Successful: " + ratingControl.getValue(),
	
   message:"Would you like to leave a comment?",
   buttonNames: ["No","Yes"]
  })
  alert.show();
  
  alert.addEventListener("click",function(e){

	
	if(e.index === 0){
		//if no
	}else if(e.index === 1){
		//if yes
		
			w.open();
	}
});
});


var line = Ti.UI.createView({height:2,top:160,bottom:0,left:0,right:0,borderWidth:1,borderColor:'#000'});
win.add(line);

	var average = Ti.UI.createLabel({
		color:'#000000',
		text:'133 Reviews, Average rating: 4.7/5',
		top:170,
		width:'100%',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	win.add(average);

var line = Ti.UI.createView({height:2,top:200,bottom:0,left:0,right:0,borderWidth:1,borderColor:'#000'});
win.add(line);

	var reviews = Ti.UI.createLabel({
		color:'#000000',
		text:'133 Reviews, Average rating: 4.7/5',
		top:170,
		width:'100%',
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	win.add(average);

