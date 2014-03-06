/*
 * Path-E-Tech Management mobile app
 * built for AppMatrix
 * copyright 2013
 * senior project csc 191 CSUS
 *  
 */

// This is a single context application with multiple windows in a stack
(function() {
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/MainWindow');
	}
	else {
		
			Window = require('ui/handheld/MainWindow');
		
	}
	new Window().open();
})();




