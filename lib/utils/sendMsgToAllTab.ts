import browser from "webextension-polyfill";
export const sendMsgToAllTab = <T>(msg: T) => {
    if (!isServiceWorkerScript()) return;
    const urls = getUrlsFromManifest();
    browser.tabs
        .query({
            url: [...urls, `chrome-extension://${browser.runtime.id}/*`],
        })
        .then((tabs) => {
            tabs.forEach((tab) => {
                try {
                    browser.tabs.sendMessage(tab.id!, msg);
                } catch (e) {
                    console.error(e);
                }
            });
        });
};

export const isServiceWorkerScript = () => {
    return location.protocol === "chrome-extension:";
};

export const getUrlsFromManifest = () => {
    const manifest = browser.runtime.getManifest();
    const content_scripts = manifest.content_scripts;
    if (!content_scripts) return [];

    // (string | undefined)[] => string[]
    // なんで動くのか素でわからん
    // asとの違いとか、そもそもなんでこれがないとダメなのか。普通に推論して欲しい。
    // //https://qiita.com/suin/items/cda9af4f4f1c53c05c6f
    return content_scripts
        .map((c) => {
            return c.matches;
        })

        .flat()
        .filter((c): c is string => typeof c === "string");
};
