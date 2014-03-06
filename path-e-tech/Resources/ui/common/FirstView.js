
//FirstView Component Constructor
//this is the first page with login screen
function FirstView(window) {
	//create object instance, a parasitic subclass of Observable
//	var window = Ti.UI.currentWindow();
	var self = Ti.UI.createView();
	var win = window;
	win.backgroundImage = '/images/background/bg.jpg';
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	// var title = Ti.UI.createLabel({
		// color:'#000000',
		// text:String.format(L('m2Nexus Ratings Engine'),'m2Nexus Ratings Engine'),
		// top:50,
		// width:'auto'
	// });
	// self.add(title);
	
	var logo = Ti.UI.createView({
		top : 50,
		height : 50,
		width : 150,
		backgroundImage : '/images/views/logo.png'
	});
	self.add(logo);
	
	userID = Ti.UI.createTextField({
		top:175,
		width:200,
		left:50,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText:"Username",
		value : '123'
	});
	self.add(userID);
	
	jibeValue = Ti.UI.createTextField({
		top:225,
		width:200,
		left:50,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText:"Jibe",
		value : '12'
	});
	self.add(jibeValue);
	/*
	var password = Ti.UI.createTextField({
		top:160,
		width:200,
		left:50,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText:"Password",
		passwordMask:true
	});
	self.add(password);
	
	*/
	var button = Ti.UI.createButton({
		top:330,
		width:200,
		height:40,
		backgroundImage : '/images/buttons/login_button.png',
		backgroundImageSelected : '/images/buttons/login_button_down.png',
	});
	self.add(button);
	//Add behavior for UI
	button.addEventListener('click', function(e) {
		if (userID.value == "") {
			alert('Please enter a user ID');
		}
		else {
			
			
			win.close();
    var introPage = require('ui/common/Content');
    
    /*
			var dialog = Ti.UI.createAlertDialog({
		
		
		title: 'Enter Jibe values:',
    style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
    buttonNames: ['OK']
		});
		dialog.addEventListener('click', function(e){
			jibeValue = Ti.UI.createTextField({
				value:e.text
			});
    Ti.API.info('e.text: ' + jibeValue.value);
    
  
  });
  dialog.show();
  */
	}
		
	});
	
//	Window = require('ui/tablet/IntroPage');
	
	//we love dilbert
	//I love Dilbert too but marketing said he needs to stay away from the customers

	return self;
}

module.exports = FirstView;
