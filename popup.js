document.getElementById('block-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('url-input').value.trim();
    if (url) {
        chrome.runtime.sendMessage({ message: 'blockUrl', url: url }, function(response) {
            if (response.message === 'success') {
                var blockedList = document.getElementById('blocked-list');
                var listItem = document.createElement('div');
                listItem.style.display = 'flex';
                listItem.style.marginTop = '10px';
                listItem.style.justifyContent = 'space-between';
                listItem.style.gap = '1rem';
                var urlItem = document.createElement('li');
                urlItem.textContent = url;
                urlItem.style.overflow = 'hidden';
                urlItem.style.margin = 'auto';
                var removeButton = document.createElement('button');
                removeButton.textContent = 'X';
                removeButton.style.marginLeft = 'auto';
                removeButton.addEventListener('click', function() {
                    chrome.runtime.sendMessage({ message: 'unblockUrl', url: url }, function(response) {
                        if (response.message === 'success') {
                            listItem.remove();
                        }
                    });
                });
                listItem.appendChild(urlItem);
                listItem.appendChild(removeButton);
                blockedList.appendChild(listItem);
                document.getElementById('url-input').value = '';
            }
        });        
    }
});

chrome.runtime.sendMessage({ message: 'getBlockedUrls' }, function(response) {
    if (response.message === 'success') {
        var blockedUrls = response.blockedUrls;
        var blockedList = document.getElementById('blocked-list');
        for (var i = 0; i < blockedUrls.length; i++) {
            var itemContainer = document.createElement('div');
            itemContainer.style.marginTop = '10px';
            var listItem = document.createElement('li');
            listItem.style.overflow = 'hidden';
            itemContainer.style.display = 'flex';
            itemContainer.style.justifyContent = 'space-between';
            itemContainer.style.alignItems = 'center';
            listItem.style.margin = 'auto';
            itemContainer.style.gap = '1rem';
            var urlText = document.createTextNode(blockedUrls[i]);
            itemContainer.appendChild(listItem);
            listItem.appendChild(urlText);
            var removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.addEventListener('click', (function(url) {
                return function() {
                    chrome.runtime.sendMessage({ message: 'unblockUrl', url: url }, function(response) {
                        if (response.message === 'success') {
                            listItem.remove();
                        }
                    });
                };
            })(blockedUrls[i]));
            itemContainer.appendChild(removeButton);
            blockedList.appendChild(itemContainer);
        }
    }
});