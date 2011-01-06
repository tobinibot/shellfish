// /* -------------------------
//    APPLY STYLESHEET
//    ------------------------- */
// console.log('applying shellfish stylesheet');
// // var parent = document.getElementsByTagName("head")[0];
// // if (!parent) {
// // 	parent = document.documentElement;
// // }
// // var style = document.createElement("link");
// // style.rel = "stylesheet"
// //
// // style.href = "http://open-bits.com/shellfish/shellfish.css";
// // parent.appendChild(style);
//
//
// /* -------------------------
//    REMOVE FACEBOOK ELEMENTS
//    ------------------------- */
//
// // var elems = document.getElementsByTagNameNS('http://www.facebook.com/2008/fbml', 'share-button');
// var elems = document.getElementsByTagName('fb:share-button');
// if (elems) {
// 	for (var i = 0; i < elems.length; i++) {
// 		// elems[i].parentElement.removeChild(elems[i]);
// 		elems[i].style.display = 'none';
// 	}
// }
//
// /* http://www.thefashionspot.com/celebrity-fashion/news/109502-kat-von-d-celebrity-fantasy-makeover */
// var elems = document.getElementsByTagName('fb:comments');
// if (elems) {
// 	for (var i = 0; i < elems.length; i++) {
// 		// elems[i].parentElement.removeChild(elems[i]);
// 		elems[i].style.display = 'none';
// 	}
// }
//
// /* http://www.thefashionspot.com/celebrity-fashion/news/109502-kat-von-d-celebrity-fantasy-makeover */
// var elems = document.getElementsByTagName('fb:fan');
// if (elems) {
// 	for (var i = 0; i < elems.length; i++) {
// 		// elems[i].parentElement.removeChild(elems[i]);
// 		elems[i].style.display = 'none';
// 	}
// }
//
// /* http://abcnews.go.com/Business/walking-airport-security-lead-11000-fine/story?id=12215171 */
// var elems = document.getElementsByTagName('fb:activity');
// if (elems) {
// 	for (var i = 0; i < elems.length; i++) {
// 		// elems[i].parentElement.removeChild(elems[i]);
// 		elems[i].style.display = 'none';
// 	}
// }
//

// Register for the beforeload events. The beforeload event fires for all sub-resources
// (scripts, stylesheets, iframes, images, plug-ins, etc.)
document.addEventListener("beforeload", handleBeforeLoadEvent, true);

// Facebook
//console.log('creating stubs');
//window.FB = new Object();
//FB['XFBML'] = new Object();
//FB.init = function() {};
//FB['XFBML'].parse = function() {};

// ShareThis
//window.stBlogger = new Object();
//stBlogger.init = function() {};

function handleBeforeLoadEvent(event) {
    const element = event.target;

//    var __shellfish__ = new Object();
//    __shellfish__['SCRIPT'] = [
//        /platform\.twitter\.com\/widgets\.js/, /* http://www.sparrowmailapp.com/ */
//        /connect\.facebook\.net/, /* http://www.sparrowmailapp.com/ */
//        /addthis\.com\/js\/\d+\/addthis_widget\.js/, /* http://www.developerit.com/2010/05/21/undefined-method-get-with-sinatra */
//        /tweetmeme\.com\/i\/scripts\/button.js/, /* http://www.goodwebpractices.com/roi/track-downloads-in-google-analytics-automatically.html */
//        /static\.ak\.fbcdn\.net\/connect\.php\/js\/FB\.Share/ /* http://nighthacks.com/roller/jag/entry/quite_the_firestorm */
//    ];
//
//    __shellfish__['IFRAME'] = [
//        /api\.tweetmeme\.com\/button\.js/ /*  */
//    ];
//
//    var shouldBlock = false;
//
//    var x = __shellfish__[element.nodeName];
//
//    if (x)
//        for (var i = 0; i < x.length; i++)
//            if (event.url.match(x[i]))
//                shouldBlock = true;
//
//    if (shouldBlock)
//        console.log('Should block ' + element.nodeName + ' ' + event.url);

    // Call up to the global page using the special canLoad function. This sends a
    // synchronous message event, so it blocks while waiting for an answer.
    // If canLoad returns true return early, allowing the load to occur.
    if (element.nodeName === "IFRAME" || element.nodeName === "SCRIPT")
        console.log('Checking ' + element.nodeName + ' ' + event.url);
    if (safari.self.tab.canLoad(event, { url: event.url, nodeName: element.nodeName, host: window.location.hostname }))
        return;

    // Since the load should be blocked, call preventDefault on the event to block it.
    console.log('Blocking ' + element.nodeName + ' ' + event.url);
    event.preventDefault();
}