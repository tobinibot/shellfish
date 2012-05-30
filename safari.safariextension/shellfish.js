// Register for the beforeload events. The beforeload event fires for all sub-resources
// (scripts, stylesheets, iframes, images, plug-ins, etc.)
document.addEventListener("beforeload", handleBeforeLoadEvent, true);

function handleBeforeLoadEvent(event) {
    const element = event.target;

    // Call up to the global page using the special canLoad function. This sends a
    // synchronous message event, so it blocks while waiting for an answer.
    // If canLoad returns true return early, allowing the load to occur.
    if (element.nodeName === "IFRAME" || element.nodeName === "SCRIPT") {
		console.log('Checking ' + element.nodeName + ' ' + event.url);
		
		if (safari.self.tab.canLoad(event, { url: event.url, nodeName: element.nodeName, host: window.location.hostname }))
	        return;

	    // Since the load should be blocked, call preventDefault on the event to block it.
	    console.log('Blocking ' + element.nodeName + ' ' + event.url);
	    event.preventDefault();
	}
}