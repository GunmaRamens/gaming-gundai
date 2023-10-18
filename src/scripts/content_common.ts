import "/styles/gaming.css";

chrome.runtime.onMessage.addListener((message) => {
    if (message === "reload") {
        location.reload();
    }
});
