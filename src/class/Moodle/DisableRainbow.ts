import { RemoveRainbowBg } from "../../utils/AddClass";
import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import GundaiWebSite from "../GundaiWebsite";
import { MoodleAdditionalInfo } from "./type";

export default function DisableRainbowFunc(this: GundaiWebSite<MoodleAdditionalInfo>) {
    changeQueryInnerHTML(["#instance-320-header"], "現在のログイン人数");
    RemoveRainbowBg(".navbar", ".addinghtml");
    RemoveRainbowBg(".page-header-headings h1");
    RemoveRainbowBg("a");

    const headerText = this.AdditionalInfo.headerText;
    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (e.innerHTML.includes(headerText)) e.innerHTML.replace(headerText, "");
    });
}
