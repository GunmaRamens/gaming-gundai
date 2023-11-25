import browser from "webextension-polyfill";

import * as Background from "@/class/background";

// インストール時の動作
browser.runtime.onInstalled.addListener(async () => {
    Background.onInstalled();
});

browser.storage.onChanged.addListener(Background.onStorageChanged);
