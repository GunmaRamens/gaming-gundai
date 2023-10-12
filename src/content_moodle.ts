//import addClass from "./utils/addClass";
import "./styles/moodle.scss";
import "./styles/gaming.scss";

import { addRainbowBg, addRainbowText, removeRainbowBg } from "./utils/addClass";
import changeQueryInnerHTML from "./utils/changeQueryInnerHTML";
import getIsEnabled from "./utils/getIsEnabled";

const headerAppendText = " Gaming Edition🎮";

const EnableRainbow = () => {
    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (!e.innerHTML.includes(headerAppendText)) e.innerHTML = e.innerHTML + headerAppendText;
    });

    changeQueryInnerHTML(["#instance-320-header"], "現在のプレイ人数");
    addRainbowBg(".navbar", ".addinghtml");
    addRainbowText(".page-header-headings h1");
    addRainbowText("a");
};

const DisableRainbow = () => {
    changeQueryInnerHTML(["#instance-320-header"], "現在のログイン人数");
    removeRainbowBg(".navbar", ".addinghtml");
    removeRainbowBg(".page-header-headings h1");
    removeRainbowBg("a");

    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (e.innerHTML.includes(headerAppendText)) e.innerHTML.replace(headerAppendText, "");
    });
};

window.addEventListener("load", async () => {
    const isEnable = await getIsEnabled();
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
