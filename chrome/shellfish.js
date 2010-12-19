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

