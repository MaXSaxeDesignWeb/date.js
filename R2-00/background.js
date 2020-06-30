// background.js
// Revision 1.00
// Copyright 2020 MaX Saxe Design
// All rights reserved
// Author: MaX Falstein

var goURL = "https://findstarlink.com/#10007;3";
var analyticsCode = "UA-";

var tabQty = 2;
var i;

for (i = 0; i < tabQty; i++) {
	chrome.browserAction.onClicked.addListener(
		function(tab) {
			console.log('Going to url...');
			localStorage.lastTime = Date.now();
		chrome.tabs.create({url:goURL}, function(tab) {
				console.log('Tab Created' + goURL);
			});
		}
	);
}
