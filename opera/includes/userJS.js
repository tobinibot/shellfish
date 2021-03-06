var __allowedHosts__ = [/facebook.com$/, /twitter.com$/, /addthis.com$/, /digg.com$/, /reddit.com$/,
    /delicious.com$/, /stumbleupon.com$/];

var __shellfish__ = new Object();
__shellfish__['SCRIPT'] = [
    /platform\.twitter\.com\/widgets\.js/, /* http://www.sparrowmailapp.com/ */
    /connect\.facebook\.net/, /* http://www.sparrowmailapp.com/ */
    /addthis\.com\/js\/\d+\/addthis_widget\.js/, /* http://www.developerit.com/2010/05/21/undefined-method-get-with-sinatra */
    /tweetmeme\.com\/i\/scripts\/button.js/, /* http://www.goodwebpractices.com/roi/track-downloads-in-google-analytics-automatically.html */
    /static\.ak\.fbcdn\.net\/connect\.php\/js\/FB\.Share/, /* http://nighthacks.com/roller/jag/entry/quite_the_firestorm */
    /api\.flattr\.com\/button\/load\.js/, /* http://giorgiosironi.blogspot.com/2010/08/google-never-removed-oracle-from-its.html */
    /sharethis\.com\/widget\/stblogger\.js/, /* http://giorgiosironi.blogspot.com/2010/08/google-never-removed-oracle-from-its.html */
    /widgets\.digg\.com\/buttons\.js/, /* http://download.cnet.com/8301-2007_4-20026355-12.html */
    /stumbleupon\.com\/hostedbadge\.php/, /* http://www.dragonblogger.com/firebug-google-chrome/ */
    /google\.com\/buzz\/api\/button\.js/, /* http://www.dragonblogger.com/firebug-google-chrome/ */
    /blogengage\.com\/evb\//, /* http://www.dragonblogger.com/firebug-google-chrome/ */
    /facebook\.com\/connect\.js/, /* http://www.buzzfeed.com/mjs538/the-100-best-signs-at-the-rally-to-restore-sanity */
    /reddit.com\/static\/button\/button\d\.js/, /* http://wewontfly.com/homeland-security-trolling-we-wont-fly-blog */
    /api\.tweetmeme\.com\/url_info/, /* http://www.chicagonow.com/blogs/daily-chicago-sports-tab/2010/12/jim-tressel-leaving-ohio-state.html */
    /services\.digg\.com\/[\d\.]+\/endpoint/, /* http://www.chicagonow.com/blogs/daily-chicago-sports-tab/2010/12/jim-tressel-leaving-ohio-state.html */
    /api\.facebook\.com\/restserver\.php/, /* http://www.chicagonow.com/blogs/daily-chicago-sports-tab/2010/12/jim-tressel-leaving-ohio-state.html */
    /wp\-content\/plugins\/sexybookmarks/ /* http://www.zerocredibility.me/?p=145 */
];

__shellfish__['IFRAME'] = [
    /api|pro\.tweetmeme\.com\/button\.js/, /* http://abcnews.go.com/Business/walking-airport-security-lead-11000-fine/story?id=12215171, http://rivals.yahoo.com/ncaa/football/news?slug=ycn-7427480 */
    /facebook\.com\/widgets\/activity\.php/, /* http://www.engadget.com/2010/12/19/yikebike-foldable-electric-bike-now-available-for-the-low-low-p/ */
    /facebook\.com\/plugins|widgets\/like\.php/, /* http://www.smashingmagazine.com/2010/12/17/25-new-free-high-quality-fonts-typography/, http://www.wired.com/epicenter/2010/12/carriers-net-neutrality-tiers/ */
    /platform[\d+]\.twitter\.com\/widgets\/tweet_button\.html/, /* http://www.smashingmagazine.com/2010/12/17/25-new-free-high-quality-fonts-typography/ */
    /yimg\.com\/b\/social_buttons/, /* http://news.yahoo.com/s/ap/20101207/ap_on_sp_co_ne/fbc_bcs_standings_mistake */
    /blogengage\.com\/evb\//, /* http://www.dragonblogger.com/firebug-google-chrome/ */
    /facebook\.com\/connect\.js/, /* http://www.buzzfeed.com/mjs538/the-100-best-signs-at-the-rally-to-restore-sanity */
    /reddit.com\/static\/button\/button\d\.html/, /* http://www.buzzfeed.com/mjs538/the-100-best-signs-at-the-rally-to-restore-sanity */
    /stumbleupon\.com\/badge\/embed/, /* http://www.buzzfeed.com/mjs538/the-100-best-signs-at-the-rally-to-restore-sanity */
    /facebook\.com\/connect\/connect\.php/ /* http://www.chicagonow.com/blogs/daily-chicago-sports-tab/2010/12/jim-tressel-leaving-ohio-state.html */
];

function allowContentToLoad(host, url, nodeName) {
    // allow all resources for certain hosts
    for (var i = 0; i < __allowedHosts__.length; i++) {
        if (host.match(__allowedHosts__[i])) {
            return true;
        }
    }

    var x = __shellfish__[nodeName];
    if (x) {
        for (var j = 0; j < x.length; j++) {
            if (url.match(x[j]))
                return false;
        }
    }

    // Allow everything else, like stylesheets and scripts.
    return true;
}

window.opera.addEventListener('BeforeExternalScript', function(event) {
    var host = window.location.hostname;
    var nodeName = event.element.nodeName;
    var url = event.element.src;

    opera.postError('Checking ' + nodeName + ' ' + url);
    if (allowContentToLoad(host, url, nodeName))
        return;

    // Since the load should be blocked, call preventDefault on the event to block it.
    opera.postError('Blocking ' + nodeName + ' ' + url);
    event.preventDefault();
}, true);