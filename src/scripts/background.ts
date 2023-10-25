import OpenOptions from "../utils/OpenOptions";

chrome.runtime.onInstalled.addListener(() => {
    OpenOptions("thanks");
});
