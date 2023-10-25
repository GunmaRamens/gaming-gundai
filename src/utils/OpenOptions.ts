type OpenOptionsArgs = "home" | "about" | "thanks" | undefined;

function Open(route?: string) {
    //return () => {
    if (!route) return chrome.tabs.create({ url: "options.html" });

    return chrome.tabs.create({ url: `options.html#${route}` });
    //};
}

export default function OpenOptions(args: OpenOptionsArgs) {
    if (!args) return Open();
    switch (args) {
        case "home":
            return Open();

        case "about":
            return Open("/about");

        case "thanks":
            return Open("/thanks");
    }
}
