import { Storage } from "webextension-polyfill";
import browser from "webextension-polyfill";

// クイックスイッチの有効化
import { WebsitesList } from "@/data/websites";
import isTrue from "@/utils/isTrue";
import * as PopupUtils from "@/utils/popupControl";
import { sendMsgToAllTab } from "@/utils/sendMsgToAllTab";

const toggleAll = () => {
    for (const website of WebsitesList) {
        (async () => {
            if (website.configable.dark) {
                // Toggle dark mode
                await website.class.storage.toggle("dark");
            }
            if (website.configable.rainbow) {
                // Toggle rainbow mode
                await website.class.storage.toggle("rainbow");
            }
        })();
    }

    sendMsgToAllTab("reload");
};

const enableQuickSwitch = () => {
    PopupUtils.disablePopup();
    browser.action.onClicked.addListener(toggleAll);
};

const disableQuickSwitch = () => {
    PopupUtils.enablePopup();
    browser.action.onClicked.removeListener(toggleAll);
};

export default function onStorageChanged(change: Record<string, Storage.StorageChange>) {
    if (Object.keys(change).includes("other")) {
        const quickSwitchEnabled = isTrue(change.other.newValue["quick-switch"]);
        if (quickSwitchEnabled) {
            enableQuickSwitch();
        } else {
            disableQuickSwitch();
        }
    }
}
