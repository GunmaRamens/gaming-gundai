import { removeRainbowBg } from "../../utils/addClass";
import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { HeaderAppendText } from ".";

export const DisableRainbow = () => {
    changeQueryInnerHTML(["#instance-320-header"], "現在のログイン人数");
    removeRainbowBg(".navbar", ".addinghtml");
    removeRainbowBg(".page-header-headings h1");
    removeRainbowBg("a");

    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (e.innerHTML.includes(HeaderAppendText)) e.innerHTML.replace(HeaderAppendText, "");
    });
};

export default DisableRainbow;
