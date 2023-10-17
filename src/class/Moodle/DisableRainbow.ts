import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import { Moodle } from "./type";

export const DisableRainbowBg = (moodle: Moodle) => {
    moodle.RemoveRainbowBg(".navbar", ".addinghtml");
    moodle.RemoveRainbowBg(".page-header-headings h1");
    moodle.RemoveRainbowBg("a");
};

export const ReplaceImagesToDefault = () => {
    changeQueryInnerHTML("#instance-320-header", "現在のログイン人数");
};
