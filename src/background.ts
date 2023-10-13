import getIsEnabled from "./utils/getIsEnabled";
import { storage } from "./utils/storage";

chrome.runtime.onInstalled.addListener(() => {
    storage.set({ enabled: true });
    chrome.action.setBadgeText({ text: "ON" });
});

chrome.action.onClicked.addListener(async () => {
    const isEnable = await getIsEnabled();
    storage.set({ enabled: !isEnable });
    chrome.action.setBadgeText({ text: isEnable ? "OFF" : "ON" });
    console.log("enabled:", !isEnable);
});
