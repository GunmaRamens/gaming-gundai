import Browser from "webextension-polyfill";

export const disablePopup = () => {
    Browser.browserAction.setPopup({ popup: "" });
};

export const enablePopup = () => {
    Browser.browserAction.setPopup({ popup: "popup.html" });
};
