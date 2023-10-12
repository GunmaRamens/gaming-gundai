//import addClass from "./utils/addClass";
import "./styles/moodle.scss";
import "./styles/gaming.scss";

import { addRainbowBg, addRainbowText } from "./utils/addClass";
import changeQueryInnerHTML from "./utils/changeQueryInnerHTML";

window.addEventListener("load", () => {
    changeQueryInnerHTML([".page-header-headings h1"], "群馬大学Gaming Leaning System");
    changeQueryInnerHTML(["#instance-320-header"], "現在のプレイ人数");
    addRainbowBg(".navbar", ".addinghtml");
    addRainbowText(".page-header-headings h1");
    addRainbowText("a");
});
