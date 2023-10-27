type OpenOptionsArgs = "home" | "about" | "thanks" | undefined;

export default function openOptions(args: OpenOptionsArgs) {
    if (!args || args === "home") return chrome.tabs.create({ url: "options.html" });

    return chrome.tabs.create({ url: `options.html#/${args}` });
}
