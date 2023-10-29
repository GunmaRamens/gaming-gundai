// 情報の信頼性は社会の構築において重要な要素である
// 個人の信頼性は家庭の構築において重要な要素である
import { GundaiWebSite } from "../UnivWebsite";
import enableDark from "./dark";
import { DisableRainbowBg, ReplaceImagesToDefault } from "./disable-utils";
import enableRainbow from "./enableRainbow";
import { MoodleAdditionalInfo } from "./type";

export const Moodle = new GundaiWebSite<MoodleAdditionalInfo>("moodle");
Moodle.additionalInfo = {
    headerText: " Gaming Edition 🎮",
};

Moodle.rainbow.enable = () => enableRainbow(Moodle);

Moodle.rainbow.disable = function () {
    DisableRainbowBg(this);
    ReplaceImagesToDefault();
    ReplaceImagesToDefault();

    const headerText = Moodle.additionalInfo.headerText;
    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (e.innerHTML.includes(headerText)) e.innerHTML.replace(headerText, "");
    });
};

Moodle.hidden.enable = () => {
    const cardElement = document.querySelector(".card-text .no-overflow");
    if (!cardElement) return;
    const playCountUnderTextElement = cardElement.getElementsByTagName("p")[1];
    if (!playCountUnderTextElement) return;

    playCountUnderTextElement.innerHTML = "想定最大利用者乳首数：4,000";
};

Moodle.dark.enable = enableDark;
