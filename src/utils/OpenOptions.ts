type OpenOptionsArgs = "home" | "about" | "thanks";

function OpenWithRoute(route: string) {
    chrome.tabs.create({ url: `options.html#${route}` });
}

export default function OpenOptions(args: OpenOptionsArgs) {
    switch (args) {
        case "home":
            chrome.runtime.openOptionsPage();
            break;
        case "about":
            OpenWithRoute("/about");
            break;
        case "thanks":
            OpenWithRoute("/thanks");
            break;
    }
}
