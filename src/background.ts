console.log("Starting")
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.greeting === "hello") {
        sendResponse({farewell: "goodbye"});
    }
})