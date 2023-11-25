import browser from "webextension-polyfill";

import StorageTool from "@/class/Storage/browser";
import isTrue from "@/utils/isTrue";
import OpenOptions from "@/utils/openOptions";
import { disablePopup, enablePopup } from "@/utils/popupControl";

// インストール時の動作
browser.runtime.onInstalled.addListener(async () => {
    const storage = new StorageTool("other");
    const isInstalled = await storage.get("installed");
    //console.log(isInstalled);
    if (isInstalled != undefined && isTrue(isInstalled)) return;
    OpenOptions("thanks")?.then(() => {
        storage.set("installed", "true");
    });
});

// クイックスイッチの有効化
const sayClicked = () => console.log("clicked");
const enableQuickSwitch = () => {
    disablePopup();
    browser.action.onClicked.addListener(sayClicked);
};

const disableQuickSwitch = () => {
    enablePopup();
    browser.action.onClicked.removeListener(sayClicked);
};
browser.storage.onChanged.addListener((change) => {
    if (Object.keys(change).includes("other")) {
        const quickSwitchEnabled = isTrue(change.other.newValue["quick-switch"]);
        if (quickSwitchEnabled) {
            enableQuickSwitch();
        } else {
            disableQuickSwitch();
        }
    }
});
