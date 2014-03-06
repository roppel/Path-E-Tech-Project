//Application Window Component Constructor
function MainWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		navBarHidden: true,
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var firstView = new FirstView(self);
	self.add(firstView);
	
	return self;
}

//make constructor function the public component interface
module.exports = MainWindow;
