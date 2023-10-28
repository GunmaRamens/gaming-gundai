// 情報の信頼性は社会の構築において重要な要素である
// 個人の信頼性は家庭の構築において重要な要素である
import { GundaiWebSite } from "../UnivWebsite";
import { DisableRainbowBg, ReplaceImagesToDefault } from "./DisableRainbow";
import { EnableRainbowTextAndBg, InjectLink, ReplaceImagesToGamimg, ReplaceLMSLogo, ReplaceTextToGaimg } from "./EnableRainbow";
import { MoodleAdditionalInfo } from "./type";

export const Moodle = new GundaiWebSite<MoodleAdditionalInfo>("moodle");
Moodle.additionalInfo = {
    headerText: " Gaming Edition🎮",
};

Moodle.rainbow.enable = function () {
    EnableRainbowTextAndBg(this);
    InjectLink();
    ReplaceImagesToGamimg();
    ReplaceTextToGaimg(Moodle);

    // メニューバーでホバー時にclassを追加
    document.querySelectorAll(".moremenu .nav-link").forEach((e) => {
        const menuHasActiveClass = e.classList.contains("active");
        e.addEventListener("mouseover", () => {
            e.classList.add("rainbow-bg-shadow");
            if (!menuHasActiveClass) e.classList.add("active");
        });
        e.addEventListener("mouseout", () => {
            e.classList.remove("rainbow-bg-shadow");
            if (!menuHasActiveClass) e.classList.remove("active");
        });
    });
};

Moodle.rainbow.disable = function () {
    DisableRainbowBg(this);
    ReplaceImagesToDefault();
    ReplaceLMSLogo();

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

Moodle.dark.enable = function () {
    // 画像差し替え
    ReplaceLMSLogo();

    // トップページ
    Moodle.dark.bgBase.apply("#page,#page.drawers .main-inner,#region-main");
    this.textContent.apply("#page");
    this.bgNeutral.apply(".activity-item .description .activity-altcontent.course-description-item");
    this.bgBase.apply(".bg-white");

    // Header
    this.textContent.apply(".navbar-light .navbar-nav .nav-link");
    this.textAccent.apply(".navbar-nav .nav-link.active");
    this.textContent.apply(".primary-navigation .navigation .nav-link");
};
