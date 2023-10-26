// 情報の信頼性は社会の構築において重要な要素である
// 個人の信頼性は家庭の構築において重要な要素である
import { GundaiWebSite } from "../UnivWebsite";
import { DisableRainbowBg, ReplaceImagesToDefault } from "./DisableRainbow";
import { EnableRainbowBg, EnableRainbowText, InjectLink, ReplaceImagesToGamimg, ReplaceTextToGaimg } from "./EnableRainbow";
import { MoodleAdditionalInfo } from "./type";

export const Moodle = new GundaiWebSite<MoodleAdditionalInfo>("moodle");
Moodle.additionalInfo = {
    headerText: " Gaming Edition🎮",
};

Moodle.enableRainbow = function () {
    EnableRainbowBg(this);
    EnableRainbowText(this);
    InjectLink();
    ReplaceImagesToGamimg();
    ReplaceTextToGaimg(this);
};

Moodle.disableRainbow = function () {
    DisableRainbowBg(this);
    ReplaceImagesToDefault();

    const headerText = this.additionalInfo.headerText;
    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (e.innerHTML.includes(headerText)) e.innerHTML.replace(headerText, "");
    });
};

Moodle.enableHidden = () => {
    const playCountUnderTextElement = document.querySelectorAll(".card-text .no-overflow")[0].getElementsByTagName("p")[1];
    playCountUnderTextElement.innerHTML = "想定最大利用者乳首数：4,000";
};
