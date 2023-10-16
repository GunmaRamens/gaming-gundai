import { RemoveRainbowBg } from "../../utils/AddClass";
import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";

export const DisableRainbowBg = () => {
    RemoveRainbowBg(".navbar", ".addinghtml");
    RemoveRainbowBg(".page-header-headings h1");
    RemoveRainbowBg("a");
};

export const ReplaceImagesToDefault = () => {
    changeQueryInnerHTML("#instance-320-header", "現在のログイン人数");
};
