//import Storage from "../utils/Storage";

//import { WebSites } from "../class";

//import { WebSites } from "../class";
//import IsTrue from "../utils/IsTrue";
/*
chrome.runtime.onInstalled.addListener(() => {
    WebSites.forEach(async (site) => {
        //const isEnabled = await site.GetStorage("enabled");
        //if (IsTrue(isEnabled)) chrome.action.setBadgeText({ text: "ON" });
    });
});
*/

type Message = "reload";
chrome.runtime.onMessage.addListener((message: Message): void => {
    // リロードメッセージ
    if (typeof message === "string" && message === "reload") {
        location.reload();
        return;
    }
});

/*
Object.keys(WebSites).forEach(async (key) => {
    const data = await WebSites[key].ReadStorage("enabled");
    console.log(data);
});
*/

// 以下ストレージ
/*
type WebsiteMsg = {
    id: string;
    action: "enable" | "disable";
};
type Message = WebsiteMsg | "reload";
chrome.runtime.onMessage.addListener((message: Message): void => {
    // リロードメッセージ
    if (typeof message === "string" && message === "reload") {
        location.reload();
        return;
    }

    // ウェブサイトメッセージ
    if (message === undefined) return;
    const { id, action } = message as WebsiteMsg;
    if (id === undefined || action === undefined) return;
    const site = WebSites.find((site) => site.id === id);
    if (site === undefined) return;
    switch (action) {
        case "enable":
            site.Enable();
            break;
        case "disable":
            site.Disable();
            break;
    }
});
*/
