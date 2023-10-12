chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ enabled: true });
    chrome.action.setBadgeText({ text: "ON" });
});

chrome.action.onClicked.addListener(() => {
    chrome.storage.local.get("enabled", (v) => {
        chrome.storage.local.set({ enabled: !v.enabled });
        chrome.action.setBadgeText({ text: v.enabled ? "OFF" : "ON" });
    });
});
