function description(title,link){
	var win=Ti.UI.createWindow({
		layout:'vertical',
		title:title,
		backgroundColor:'green'
	});
	 
	// Create a WebView
	var WebView = Ti.UI.createWebView({
		url : link,
	});
	
	
	// Add to the parent view.
	win.add(WebView);
	return win;
	
   }
   module.exports=description;