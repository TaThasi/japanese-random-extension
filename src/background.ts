// background.ts
console.log("Background script running");

const setPopupBasedOnPath = (tabId: number, url: string | undefined) => {
    let popup: string;
    if (url) {
        if (url.includes('/home')) {
            popup = 'home.html';
        } else if (url.includes('/signin')) {
            popup = 'signin.html';
        } else if (url.includes('/signup')) {
            popup = 'signup.html';
        } else {
            popup = 'index.html';
        }
        
        chrome.action.setPopup({ tabId, popup });
    }

};

chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab) => {
    console.log(changeInfo.url);
    if (changeInfo.url) {
        setPopupBasedOnPath(tabId, changeInfo.url);
    }
});

chrome.tabs.onActivated.addListener((activeInfo: chrome.tabs.TabActiveInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab: chrome.tabs.Tab) => {
        if (tab.url) {
            setPopupBasedOnPath(tab.id!, tab.url);
        }
    });
});
