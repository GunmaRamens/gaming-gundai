import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { RainbowApplicator } from "../ClassApplicator";
import { GundaiWebSite } from "../UnivWebsite";
import Moodle from ".";
import { injectLink, replaceLMSLogo } from "./common";
import { MoodleAdditionalInfo } from "./type";

const textAndBg = (rainbow: RainbowApplicator) => {
    rainbow.bg.apply(".navbar", "#action-menu-0-menu");

    rainbow.text.apply(".page-header-headings h1");
    rainbow.text.apply("#page-content a:not(#inst301 a)");
    rainbow.text.apply("#instance-301-header");

    // rainbowBgの中のrainbowTextを無効化
    const rainbowBgSelector = rainbow.bg.selector();
    const targetElementsSelector = `${rainbowBgSelector} ${rainbow.text.selector()}`;
    //removeClass([targetElementsSelector], rainbow.text.base);
    rainbow.text.remove(targetElementsSelector);

    // Moodleのログインページ
    if (location.pathname == "/GU/index.php") {
        rainbow.text.apply("#mtg a");
        rainbow.text.apply("#loginbutton a");
    }
};
const replaceIconToGamimg = () => {
    document.querySelectorAll("img.userpicture").forEach((e) => {
        if (e.getAttribute("src")) e.setAttribute("src", chrome.runtime.getURL("assets/partyparrot.gif"));
    });
};
const replaceTextToGaimg = (moodle: GundaiWebSite<MoodleAdditionalInfo>) => {
    const headerText = moodle.options.headerText;

    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (!e.innerHTML.includes(headerText)) e.innerHTML = e.innerHTML + headerText;
    });
    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (!e.innerHTML.includes(headerText)) e.innerHTML = e.innerHTML + headerText;
    });

    changeQueryInnerHTML("#instance-320-header", "現在のプレイ人数");
};

const headerHover = () => {
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

export default function enableRainbow() {
    const moodle = Moodle;

    textAndBg(moodle.rainbow);
    headerHover();
    injectLink();
    replaceLMSLogo();
    replaceIconToGamimg();
    replaceTextToGaimg(moodle);
}
