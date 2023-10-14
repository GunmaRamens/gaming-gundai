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

chrome.runtime.onStartup.addListener(async () => {
    const isEnable = await getIsEnabled();
    chrome.action.setBadgeText({ text: isEnable ? "ON" : "OFF" });
    console.log("enabled:", isEnable);
});
