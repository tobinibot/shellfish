//window.addEventListener('DOMContentLoaded', function() {
	// alert('before')
    var parent = document.getElementsByTagName("head")[0];
	if (!parent) {
		parent = document.documentElement;
	}
	var style = document.createElement("link");
	style.rel = "stylesheet"
	//style.type = "text/css";
	
	style.href = "http://open-bits.com/shellfish/shellfish.css";
	
	// var css = 'p { color: #c00 !important; } *[class^="addthis_button"], .addthis_toolbox, a[href*="addthis.com/bookmark.php"], iframe[src*="addthis.com/static"], a[href*="api.addthis.com/oexchange"], iframe[src*="twitter.com/widgets"], a[href*="twitter.com/home?status="], a[href*="twitter.com/home/?status="], a[href*="twitter.com/home?"], a[href*="twitter.com?status="], a[href*="twitter.com/share?"], { display: none !important; }';
	// var textNode = document.createTextNode(css);
	// style.appendChild(textNode);
	parent.appendChild(style);
	// alert('after')
//}, false);

window.addEventListener('DOMContentLoaded', function() {
	// var elems = document.getElementsByTagNameNS('http://www.facebook.com/2008/fbml', 'share-button');
	var elems = document.getElementsByTagName('fb:share-button');
	if (elems) {
		for (var i = 0; i < elems.length; i++) {
			// elems[i].parentElement.removeChild(elems[i]);
			elems[i].style.display = 'none';
		}
	}

	/* http://www.thefashionspot.com/celebrity-fashion/news/109502-kat-von-d-celebrity-fantasy-makeover */
	var elems = document.getElementsByTagName('fb:comments');
	if (elems) {
		for (var i = 0; i < elems.length; i++) {
			// elems[i].parentElement.removeChild(elems[i]);
			elems[i].style.display = 'none';
		}
	}

	/* http://www.thefashionspot.com/celebrity-fashion/news/109502-kat-von-d-celebrity-fantasy-makeover */
	var elems = document.getElementsByTagName('fb:fan');
	if (elems) {
		for (var i = 0; i < elems.length; i++) {
			// elems[i].parentElement.removeChild(elems[i]);
			elems[i].style.display = 'none';
		}
	}

	/* http://abcnews.go.com/Business/walking-airport-security-lead-11000-fine/story?id=12215171 */
	var elems = document.getElementsByTagName('fb:activity');
	if (elems) {
		for (var i = 0; i < elems.length; i++) {
			// elems[i].parentElement.removeChild(elems[i]);
			elems[i].style.display = 'none';
		}
	}
}, false);