console.log("Content script running!");

// Gửi tin nhắn đến background script
chrome.runtime.sendMessage({ greeting: "hello" }, (response) => {
  console.log(response.farewell);
});
