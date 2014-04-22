var win = Titanium.UI.createWindow({
backgroundColor:'black',
title:'Bd News'
});
 
var data = [];
var table = Ti.UI.createTableView({
color:'white'
});
 
//var url="http://static.cricinfo.com/rss/livescores.xml"; // rss feed url
//var url="http://bdnews24.com/?widgetName=rssfeed&widgetId=1150&getXmlFeed=true";

var url="http://bangla.bdnews24.com/?widgetName=rssfeed&widgetId=1151&getXmlFeed=true";
var xhr = Titanium.Network.createHTTPClient();
 
xhr.onload = function() {
// Data is returned from the blog, start parsing
var doc = this.responseXML.documentElement;
var items = doc.getElementsByTagName("item");
for (var i=0;i<items.length;i++) {
data.push({
title: items.item(i).getElementsByTagName("title").item(0).text,
link: items.item(i).getElementsByTagName("link").item(0).text
});
}
table.data = data;
// Listen for click events.
table.addEventListener('click', function(e) {
var win1= require('ui/common/Details');
var info=new win1(e.rowData.title,e.rowData.link);
info.open();
});
 
win.add(table);
};
 
xhr.onerror = function(e) {
// should do something more robust
alert('No Internet Connection');
};
timeout:5000;
xhr.open('GET',url);
xhr.send();
 
win.open();