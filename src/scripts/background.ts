import getIsEnabled from "../utils/GetIsEnabled";
import Storage from "../utils/Storage";

chrome.runtime.onInstalled.addListener(() => {
    Storage.set({ enabled: true });
    chrome.action.setBadgeText({ text: "ON" });
});

chrome.action.onClicked.addListener(async (tab) => {
    const isEnable = await getIsEnabled();
    Storage.set({ enabled: !isEnable });
    chrome.action.setBadgeText({ text: isEnable ? "OFF" : "ON" });
    console.log("enabled:", !isEnable);

    if (tab.id === undefined) return;
    chrome.tabs.sendMessage(tab.id, "reload").catch((e) => console.error(e));
});
