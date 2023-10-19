//import Storage from "../utils/Storage";

import { WebSites } from "../class";
import IsTrue from "../utils/IsTrue";

chrome.runtime.onInstalled.addListener(() => {
    WebSites.forEach(async (site) => {
        const isEnabled = await site.GetStorage("enabled");
        if (IsTrue(isEnabled)) chrome.action.setBadgeText({ text: "ON" });
    });
});

type WebsiteMsg = {
    website: string;
    action: "enable" | "disable";
};
type Message = WebsiteMsg | string;
chrome.runtime.onMessage.addListener((message: Message): void => {
    if (typeof message === "string" && message === "reload") {
        location.reload();
        return;
    }
    if (message === undefined) return;

    const { website, action } = message as WebsiteMsg;
});

/*
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
*/
