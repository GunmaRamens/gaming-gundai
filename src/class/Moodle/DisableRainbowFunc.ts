import { RemoveRainbowBg } from "../../utils/AddClass";
import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import GundaiWebSite from "../GundaiWebsite";
import { MoodleAdditionalInfo } from "./type";

export const DisableRainbowFunc = (moodle: GundaiWebSite<MoodleAdditionalInfo>) => {
    const HeaderAppendText = moodle.AdditionalInfo.headerText;
    return () => {
        changeQueryInnerHTML(["#instance-320-header"], "現在のログイン人数");
        RemoveRainbowBg(".navbar", ".addinghtml");
        RemoveRainbowBg(".page-header-headings h1");
        RemoveRainbowBg("a");

        document.querySelectorAll(".page-header-headings h1").forEach((e) => {
            if (e.innerHTML.includes(HeaderAppendText)) e.innerHTML.replace(HeaderAppendText, "");
        });
    };
};

export default DisableRainbowFunc;
