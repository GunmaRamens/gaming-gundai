import Browser from "webextension-polyfill";

export const disablePopup = () => {
    //Browser.browserAction.setPopup({ popup: "" });
    console.log("disablePopup");
    Browser.action.setPopup({ popup: "" });
};

export const enablePopup = () => {
    //Browser.browserAction.setPopup({ popup: "popup.html" });
    Browser.action.setPopup({ popup: "popup.html" });
};
