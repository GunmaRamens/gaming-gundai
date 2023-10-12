import { addRainbowBg, addRainbowText } from "../utils/addClass";
import changeQueryInnerHTML from "../utils/changeQueryInnerHTML";
import { HeaderAppendText } from ".";

export const EnableRainbow = () => {
    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (!e.innerHTML.includes(HeaderAppendText)) e.innerHTML = e.innerHTML + HeaderAppendText;
    });

    changeQueryInnerHTML(["#instance-320-header"], "現在のプレイ人数");
    addRainbowBg(".navbar", ".addinghtml");
    addRainbowText(".page-header-headings h1");
    addRainbowText("a");
};

export default EnableRainbow;
