import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { RainbowApplicator } from "../ClassApplicator";

export const DisableRainbowBg = (rainbow: RainbowApplicator) => {
    rainbow.bg.remove(".navbar", ".addinghtml");
    rainbow.bg.remove(".page-header-headings h1");
    rainbow.bg.remove("a");
};

export const ReplaceImagesToDefault = () => {
    changeQueryInnerHTML("#instance-320-header", "現在のログイン人数");
};
