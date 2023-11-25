import { Storage } from "webextension-polyfill";
import browser from "webextension-polyfill";

import isTrue from "@/utils/isTrue";
import * as PopupUtils from "@/utils/popupControl";
import { toggleAll } from "@/utils/toggleAll";

// クイックスイッチの有効化
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
