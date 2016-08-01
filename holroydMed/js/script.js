(function (global) {

	var hlryd = {};

	hlryd.selected = function (clicked) {
		document.getElementsByClassName('selected')[0].className = "";
		document.getElementById(clicked).className += " selected";
	};

	global.$hlryd = hlryd;

})(window);