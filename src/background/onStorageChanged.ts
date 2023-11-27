import { Storage } from "webextension-polyfill";

import * as QuickSwitch from "./common/quickswitch";
export default function onStorageChanged(change: Record<string, Storage.StorageChange>) {
    console.log(change);
    if (Object.keys(change).includes("other")) {
        QuickSwitch.applyQuickSwitch();
    }
}
