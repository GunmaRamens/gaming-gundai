import "/styles/gaming.scss";

chrome.runtime.onMessage.addListener((message) => {
    if (message === "reload") {
        location.reload();
    }
});
