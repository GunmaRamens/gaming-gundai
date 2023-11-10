import browser from "webextension-polyfill";
type OpenOptionsArgs = "home" | "about" | "thanks" | undefined;

export default function openOptions(args: OpenOptionsArgs) {
    if (!browser || !browser.tabs) {
        console.error("chrome.tabs is not defined");
        return;
    }

    if (!args || args === "home") return browser.tabs.create({ url: "options.html" });

    return browser.tabs.create({ url: `options.html#/${args}` });
}
