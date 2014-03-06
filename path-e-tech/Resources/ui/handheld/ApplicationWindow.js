function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundImage : '/images/background/bg.jpg',
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			navBarHidden: true,
			title: L('newWindow'),
			backgroundImage : '/images/background/bg.jpg',
		}));
	});
	
	return self;
};

module.exports = ApplicationWindow;
