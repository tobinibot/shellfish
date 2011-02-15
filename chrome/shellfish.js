var __allowedHosts__ = [/facebook.com$/, /twitter.com$/, /addthis.com$/, /digg.com$/, /reddit.com$/,
    /delicious.com$/, /stumbleupon.com$/];

var __shellfish__ = new Object();
__shellfish__['SCRIPT'] = [
    /platform\.twitter\.com\/widgets\.js/, /* http://www.sparrowmailapp.com/ */
    /connect\.facebook\.net/, /* http://www.sparrowmailapp.com/ */
    /addthis\.com\/js\/\d+\/addthis_widget\.js/, /* http://www.developerit.com/2010/05/21/undefined-method-get-with-sinatra */
    /tweetmeme\.com\/i\/scripts\/button.js/, /* http://www.goodwebpractices.com/roi/track-downloads-in-google-analytics-automatically.html */
    /fbcdn\.net\/connect\.php\/js\/FB\.Share/, /* http://nighthacks.com/roller/jag/entry/quite_the_firestorm */
    /api\.flattr\.com\/button\/load\.js/, /* http://giorgiosironi.blogspot.com/2010/08/google-never-removed-oracle-from-its.html */
    /sharethis\.com\/widget\/stblogger\.js/, /* http://giorgiosironi.blogspot.com/2010/08/google-never-removed-oracle-from-its.html */
    /widgets\.digg\.com\/buttons\.js/, /* http://download.cnet.com/8301-2007_4-20026355-12.html */
    /stumbleupon\.com\/hostedbadge\.php/, /* http://www.dragonblogger.com/firebug-google-chrome/ */
    /google\.com\/buzz\/api\/button\.js/, /* http://www.dragonblogger.com/firebug-google-chrome/ */
    /blogengage\.com\/evb\//, /* http://www.dragonblogger.com/firebug-google-chrome/ */
    /facebook\.com\/connect\.(?:js|php)/, /* http://www.buzzfeed.com/mjs538/the-100-best-signs-at-the-rally-to-restore-sanity */
    /reddit.com\/static\/button\/button\d\.js/, /* http://wewontfly.com/homeland-security-trolling-we-wont-fly-blog */
    /api\.tweetmeme\.com\/url_info/, /* http://www.chicagonow.com/blogs/daily-chicago-sports-tab/2010/12/jim-tressel-leaving-ohio-state.html */
    /services\.digg\.com\/[\d\.]+\/endpoint/, /* http://www.chicagonow.com/blogs/daily-chicago-sports-tab/2010/12/jim-tressel-leaving-ohio-state.html */
    /api\.facebook\.com\/restserver\.php/, /* http://www.chicagonow.com/blogs/daily-chicago-sports-tab/2010/12/jim-tressel-leaving-ohio-state.html */
    /wp\-content\/plugins\/sexybookmarks/, /* http://www.zerocredibility.me/?p=145 */
    /cdn\.topsy\.com\/topsy\.js/, /* http://leaverou.me/2010/12/checkered-stripes-other-background-patterns-with-css3-gradients/ */
    /sharethis\.com\/widget/, /* http://www.experiencecolumbus.com/blog/?p=6196 */
    /static\.addtoany\.com\/menu\/page\.js/, /* http://arstechnica.com/apple/news/2011/01/verizon-sends-event-invitation-net-flies-into-verizon-iphone-flurry.ars */
    /widgets\.dzone\.com\/(?:links\/)?widgets/, /* http://www.canoo.com/blog/2011/01/10/intellij-idea-series-vii/ */
    /reddit\.com\/button\.js/, /* http://www.canoo.com/blog/2011/01/10/intellij-idea-series-vii/ */
    /digg\.com\/tools\/diggthis\.js/, /* http://www.canoo.com/blog/2011/01/10/intellij-idea-series-vii/ */
    /widgets\.surphace\.com\/widgets/, /* http://tmz.com */
    /surphace\.com\/rcwidget\/loader.js/, /* http://tmz.com */
    /buzzfeed\.com\/wd\/BuzzBox/, /* http://tmz.com, http://www.businessinsider.com/aol-michael-arrington-2011-1 */
    /cim.meebo.com\/cim/, /* http://tmz.com */
    /platform\.linkedin\.com\/in\.js/, /* http://www.businessinsider.com/aol-michael-arrington-2011-1 */
    /tweetup\.com\/twidget/, /* http://www.businessinsider.com/aol-michael-arrington-2011-1 */
    /postup\.com\/twidget/, /* just guessing, tweetup == postup */
    /apture\.com\/js\/apture\.js/, /* http://www.economist.com/blogs/babbage/2011/01/anti-piracy_laser */
    /prettydigg\/diggbutton\.js/, /* http://www.talkingpointsmemo.com/archives/2011/01/they_just_dont_stop.php */
    /sharethis\.com\/button\/(?:buttons|sharethis)\.js/ /* http://imgur.com/Qmc11, http://mashable.com/2011/01/17/banksy-identity-ebay */
];

__shellfish__['IFRAME'] = [
    /(?:api|pro)\.tweetmeme\.com\/button\.js/, /* http://abcnews.go.com/Business/walking-airport-security-lead-11000-fine/story?id=12215171, http://rivals.yahoo.com/ncaa/football/news?slug=ycn-7427480 */
    /facebook\.com\/(?:plugins|widgets)\/(?:activity|like|likebox)\.php/, /* http://www.smashingmagazine.com/2010/12/17/25-new-free-high-quality-fonts-typography/, http://www.wired.com/epicenter/2010/12/carriers-net-neutrality-tiers/, http://www.slate.com/id/2281146, http://www.engadget.com/2010/12/19/yikebike-foldable-electric-bike-now-available-for-the-low-low-p/ */
    /platform[\d+]?\.twitter\.com\/widgets\/tweet_button\.html/, /* http://www.smashingmagazine.com/2010/12/17/25-new-free-high-quality-fonts-typography/, http://www.onionsportsnetwork.com/articles/tim-duncan-announces-shoe-deal-with-florsheim,18718/ */
    /yimg\.com\/b\/social_buttons/, /* http://news.yahoo.com/s/ap/20101207/ap_on_sp_co_ne/fbc_bcs_standings_mistake */
    /blogengage\.com\/evb/, /* http://www.dragonblogger.com/firebug-google-chrome/ */
    /facebook\.com\/connect\.js/, /* http://www.buzzfeed.com/mjs538/the-100-best-signs-at-the-rally-to-restore-sanity */
    /reddit.com\/static\/button\/button\d\.html/, /* http://www.buzzfeed.com/mjs538/the-100-best-signs-at-the-rally-to-restore-sanity */
    /stumbleupon\.com\/badge\/embed/, /* http://www.buzzfeed.com/mjs538/the-100-best-signs-at-the-rally-to-restore-sanity */
    /facebook\.com\/connect\/connect\.php/, /* http://www.chicagonow.com/blogs/daily-chicago-sports-tab/2010/12/jim-tressel-leaving-ohio-state.html */
    /yimg\.com\/[a-z]\/static\/facebook_share\.html/, /* http://rivals.yahoo.com/ncaa/football/news?slug=ap-jimlitke-010511 */
    /addthis.com\/static/, /* http://tmz.com */
    /tools\.awe\.sm\/tweet-button\/files\/tweet_button\.html/, /* http://www.buzzfeed.com/darthvader/star-wars-super-bowl-poster-1d1i */
    /okcupid\.com\/twitter\?blogurl/, /* http://blog.okcupid.com/index.php/the-mathematics-of-beauty/ */
    /sfgate\.com\/js\/utils\/facebook_load\.html/, /* http://www.sfgate.com/cgi-bin/article.cgi?f=/n/a/2011/01/24/financial/f161842S08.DTL&tsp=1 */
    /media\/system\/twittertweeter\.php/ /* http://www.technewsdaily.com/jeopardy-vs-computer-how-ibms-watson-works-2161/ */
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

    return true;
}

document.addEventListener("beforeload", function(event) {
    var nodeName = event.srcElement.nodeName;
    var url = event.url;

    if (nodeName === "IFRAME" || nodeName === "SCRIPT") {
        console.log('Checking ' + nodeName + ' ' + url);

        if (allowContentToLoad(window.location.hostname, url, nodeName))
            return;

        // Since the load should be blocked, call preventDefault on the event to block it.
        console.log('Blocking ' + nodeName + ' ' + url);
        event.preventDefault();
    }
}, true);