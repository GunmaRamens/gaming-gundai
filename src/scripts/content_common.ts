import "@/styles/gaming.scss";
import "@/styles/darkmode.scss";

import browser from "webextension-polyfill";

browser.runtime.onMessage.addListener((message) => {
    if (message === "reload") {
        location.reload();
    }
    //return true;
});
