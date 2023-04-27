chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ blockedUrls: [] });
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'blockUrl') {
        chrome.storage.local.get('blockedUrls', function(data) {
            var blockedUrls = data.blockedUrls || [];
            if (blockedUrls.indexOf(request.url) === -1) {
                blockedUrls.push(request.url);
                chrome.storage.local.set({ blockedUrls: blockedUrls }, function() {
                    sendResponse({ message: 'success' });
                });
            } else {
                sendResponse({ message: 'alreadyBlocked' });
            }
        });
    } else if (request.message === 'unblockUrl') {
        chrome.storage.local.get('blockedUrls', function(data) {
            var blockedUrls = data.blockedUrls || [];
            var index = blockedUrls.indexOf(request.url);
            if (index !== -1) {
                blockedUrls.splice(index, 1);
                chrome.storage.local.set({ blockedUrls: blockedUrls }, function() {
                    sendResponse({ message: 'success' });
                });
            } else {
                sendResponse({ message: 'notFound' });
            }
        });
    } else if (request.message === 'getBlockedUrls') {
        chrome.storage.local.get('blockedUrls', function(data) {
            var blockedUrls = data.blockedUrls || [];
            sendResponse({ message: 'success', blockedUrls: blockedUrls });
        });
    }
    return true;
});
