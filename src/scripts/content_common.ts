import "/styles/gaming.pcss";

chrome.runtime.onMessage.addListener((message) => {
    if (message === "reload") {
        location.reload();
    }
});
