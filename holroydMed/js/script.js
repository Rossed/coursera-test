(function (global) {


	var hlryd = {};

	var homeHtmlUrl = "snippets/home-snippet.html",
		histroyHTMLUrl = "snippets/history-snippet.html",
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
		document.getElementsByClassName('selected')[0].className = "";
		document.getElementById(keyWord).className += " selected";

		$(window).load(function(){loaded=true});
		console.log(loaded);
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

	// // Declared variables for scrolling side-bar
	// var $sidebar = $("#side-bar"),
 //    	$window    = $(window),
 //    	offset     = $sidebar.offset(),
 //    	topPadding = 60,
 //    	sidebarPadding = parseInt($("#side-bar").css('padding-top')) +
 //    		parseInt($("#side-bar").css('padding-bottom')) + 2,
 //    	loaded = false;
	// var documentHeight,
	// 	$footer,
	// 	footerOffset,
	// 	footerMargin;

	// 	$(window).load(function(){loaded=true});
    	
 //    //Function that ensure side-bar follow when scrolling
 //    $window.scroll(function() {

 //    	if (loaded) {
	//     	documentHeight = ($(document).height());
 //    		$footer = $("#footer");
 //    		footerOffset = $footer.offset();
 //    		footerMargin = parseInt($footer.css('margin-top'));
 //    		loaded = false;
 //    	}

 //    	console.log(footerOffset.top);


 //        if ($window.scrollTop() > (offset.top - topPadding)) {
 //    		if ($window.scrollTop() < (footerOffset.top - topPadding - $sidebar.height() - sidebarPadding - footerMargin)) {
 //            	$sidebar.stop().animate({
 //                	marginTop: $window.scrollTop() - offset.top + topPadding
 //                })
 //            } else {
 //            	$sidebar.stop().animate({
 //            		marginTop: ((footerOffset.top) - $sidebar.height() - sidebarPadding - footerMargin - offset.top)
 //            	})
 //            }
 //    	} else {
 //            $sidebar.stop().animate({
 //                marginTop: 0
 //            });
 //        }
 //    	});
   		


	global.$hlryd = hlryd;

})(window);








