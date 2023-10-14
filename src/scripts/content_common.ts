import "../styles/gaming.scss";
import "../styles/kyomu.scss";

chrome.runtime.onMessage.addListener((message) => {
    if (message === "reload") {
        location.reload();
    }
});
