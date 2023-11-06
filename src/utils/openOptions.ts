type OpenOptionsArgs = "home" | "about" | "thanks" | undefined;

export default function openOptions(args: OpenOptionsArgs) {
    if (!chrome || !chrome.tabs) {
        console.error("chrome.tabs is not defined");
        return;
    }

    if (!args || args === "home") return chrome.tabs.create({ url: "options.html" });

    return chrome.tabs.create({ url: `options.html#/${args}` });
}
