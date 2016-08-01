(function (global) {

	var hlryd = {};

	var homeHtmlUrl = "snippets/home-snippet.html";

	// Convenience function for inserting innerHTML for 'select'
	var insertHtml = function (selector, html) {
	  var targetElem = document.querySelector(selector);
	  targetElem.innerHTML = html;
	};

	// Show loading icon inside element identified by 'selector'.
	var showLoading = function (selector) {
	  var html = "<div class='text-center'>";
	  html += "<img src='images/ajax-loader.gif'></div>";
	  insertHtml(selector, html);
	};

	// Changes active menu option on side-bar
	hlryd.selected = function (clicked) {
		document.getElementsByClassName('selected')[0].className = "";
		document.getElementById(clicked).className += " selected";
	};

	// On page load (before images or CSS)
	document.addEventListener("DOMContentLoaded", function (event) {
		// *** start ***
		// On first load, show home view
		showLoading("#changable-content");

		// Load home snippet page
  		$ajaxUtils.sendGetRequest(
    		homeHtmlUrl,
    		function (homeHtml) {
    			insertHtml("#changable-content", homeHtml);
    		}, false);
	});

	global.$hlryd = hlryd;

})(window);








