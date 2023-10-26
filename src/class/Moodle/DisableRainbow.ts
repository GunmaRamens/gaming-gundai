import ChangeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import { Moodle } from "./type";

export const DisableRainbowBg = (moodle: Moodle) => {
    moodle.rainbowBg.remove(".navbar", ".addinghtml");
    moodle.rainbowBg.remove(".page-header-headings h1");
    moodle.rainbowBg.remove("a");
};

export const ReplaceImagesToDefault = () => {
    ChangeQueryInnerHTML("#instance-320-header", "現在のログイン人数");
};
