import browser from "webextension-polyfill";

import { CommonStorage } from "@/class/Storage/common";
import { OtherStorage } from "@/class/Storage/other";
import { WebsitesList } from "@/data/websites";
import * as PopupUtils from "@/utils/popupControl";
import { sendMsgToAllTab } from "@/utils/sendMsgToAllTab";

export function applyQuickSwitch() {
    //const quickSwitchEnabled = isTrue(change.other.newValue["quick-switch"]);

    (async () => {
        const quickSwitchEnabled = await OtherStorage.get("quick-switch");
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
                await CommonStorage.toggle(website.class.id, "dark");
            }
            if (website.configable.rainbow) {
                // Toggle rainbow mode
                await CommonStorage.toggle(website.class.id, "rainbow");
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
