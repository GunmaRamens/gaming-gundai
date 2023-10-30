import "/styles/gaming.scss";
import "/styles/darkmode.scss";

chrome.runtime.onMessage.addListener((message) => {
    if (message === "reload") {
        location.reload();
    }
    //return true;
});
