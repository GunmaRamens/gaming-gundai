import getIsEnabled from "../utils/getIsEnabled";
import { storage } from "../utils/storage";

chrome.runtime.onInstalled.addListener(() => {
    storage.set({ enabled: true });
    chrome.action.setBadgeText({ text: "ON" });
});

chrome.action.onClicked.addListener(async (tab) => {
    const isEnable = await getIsEnabled();
    storage.set({ enabled: !isEnable });
    chrome.action.setBadgeText({ text: isEnable ? "OFF" : "ON" });
    console.log("enabled:", !isEnable);

    if (tab.id === undefined) return;
    chrome.tabs.sendMessage(tab.id, "reload").catch((e) => console.error(e));
});
