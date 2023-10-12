//import addClass from "./utils/addClass";
import "./styles/moodle.scss";
import "./styles/gaming.scss";

import { addRainbowBg, addRainbowText, removeRainbowBg } from "./utils/addClass";
import changeQueryInnerHTML from "./utils/changeQueryInnerHTML";
import isEnabled from "./utils/isEnabled";

const EnableRainbow = () => {
    changeQueryInnerHTML([".page-header-headings h1"], "群馬大学Gaming Leaning System");
    changeQueryInnerHTML(["#instance-320-header"], "現在のプレイ人数");
    addRainbowBg(".navbar", ".addinghtml");
    addRainbowText(".page-header-headings h1");
    addRainbowText("a");
};

const DisableRainbow = () => {
    changeQueryInnerHTML([".page-header-headings h1"], "群馬大学Learning Management System");
    changeQueryInnerHTML(["#instance-320-header"], "現在のログイン人数");
    removeRainbowBg(".navbar", ".addinghtml");
    removeRainbowBg(".page-header-headings h1");
    removeRainbowBg("a");
};

window.addEventListener("load", async () => {
    const isEnable = await isEnabled();
    if (isEnable) {
        EnableRainbow();
    } else {
        DisableRainbow();
    }
});

// あとでリロード無しでゲーミングモード解除を実装する
/*
chrome.action.onClicked.addListener(async () => {
    const isEnable = await isEnabled();
    if (isEnable) {
        EnableRainbow();
    } else {
        DisableRainbow();
    }
});
*/
