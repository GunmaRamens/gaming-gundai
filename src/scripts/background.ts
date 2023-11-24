import browser from "webextension-polyfill";

import StorageTool from "@/class/Storage/browser";
import isTrue from "@/utils/isTrue";
import OpenOptions from "@/utils/openOptions";

browser.runtime.onInstalled.addListener(async () => {
    const storage = new StorageTool("other");
    const isInstalled = await storage.get("installed");
    //console.log(isInstalled);
    if (isInstalled != undefined && isTrue(isInstalled)) return;
    OpenOptions("thanks")?.then(() => {
        storage.set("installed", "true");
    });
});

browser.storage.onChanged.addListener((change) => {
    console.log(change);
});
