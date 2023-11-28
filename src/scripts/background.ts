import browser from "webextension-polyfill";

import * as Background from "../background";

// インストール時の動作
browser.runtime.onInstalled.addListener(async () => {
    await Background.onInstalled();
});

browser.storage.onChanged.addListener(Background.onStorageChanged);
browser.runtime.onStartup.addListener(Background.onStartup);
browser.action.onClicked.addListener(Background.onIconClicked);
