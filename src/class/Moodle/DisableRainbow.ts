import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { Moodle } from "./type";

export const DisableRainbowBg = (moodle: Moodle) => {
    moodle.rainbow.bg.remove(".navbar", ".addinghtml");
    moodle.rainbow.bg.remove(".page-header-headings h1");
    moodle.rainbow.bg.remove("a");
};

export const ReplaceImagesToDefault = () => {
    changeQueryInnerHTML("#instance-320-header", "現在のログイン人数");
};
