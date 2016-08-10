(function (global) {


	var hlryd = {};

	var previousKeyword = 'Home';

	var homeHtmlUrl = "snippets/home-snippet.html",
		histroyHTMLUrl = "snippets/history-snippet.html",
		doctorsHTMLUrl = "snippets/history-snippet.html",
		staffHTMLUrl = "snippets/history-snippet.html",
		linkHTMLUrl = "snippets/links-snippet.html";

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
	hlryd.selected = function (keyWord) {


		hlryd.loadPage(keyWord);
		document.getElementsByClassName('selected')[0].className = previousKeyword;
		document.getElementsByClassName('selected')[0].className = previousKeyword;

		document.getElementsByClassName(keyWord)[0].className += " selected";
		document.getElementsByClassName(keyWord)[1].className += " selected";

		previousKeyword = keyWord;

		$(window).load(function(){loaded=true});
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

	hlryd.loadPage = function (keyWord) {
		var url;
		if (keyWord === 'Home') {
			url = homeHtmlUrl;
		} else if (keyWord === 'History') {
			url = histroyHTMLUrl;
		} else if (keyWord === 'Doctors') {
			url = doctorsHTMLUrl;
		} else if (keyWord === 'Staff') {
			url = staffHTMLUrl;
		} else if (keyWord === 'Links') {
			url = linkHTMLUrl;
		}
		showLoading("#changable-content");
		$ajaxUtils.sendGetRequest(
    		url,
    		function (html) {
    			insertHtml("#changable-content", html);
    		}, false);

	}	


	global.$hlryd = hlryd;

})(window);









