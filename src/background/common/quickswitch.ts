import browser from "webextension-polyfill";

import { StorageTool } from "@/class";
import { WebsitesList } from "@/data/websites";
import * as PopupUtils from "@/utils/popupControl";
import { sendMsgToAllTab } from "@/utils/sendMsgToAllTab";

export function applyQuickSwitch() {
    //const quickSwitchEnabled = isTrue(change.other.newValue["quick-switch"]);

    (async () => {
        const quickSwitchEnabled = await new StorageTool("other").getBool("quick-switch");
        if (quickSwitchEnabled) {
            enableQuickSwitch();
        } else {
            disableQuickSwitch();
        }
    })();
}

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
