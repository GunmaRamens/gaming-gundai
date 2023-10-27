import { removeClass } from "../../utils/addClass";
import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { RainbowApplicator } from "../ClassApplicator";
import { GundaiWebSite } from "../UnivWebsite";
import { MoodleAdditionalInfo } from "./type";

export const EnableRainbowTextAndBg = (rainbow: RainbowApplicator) => {
    rainbow.bg.apply(".navbar", "#action-menu-0-menu");

    rainbow.text.apply(".page-header-headings h1");
    rainbow.text.apply("#page-content a:not(#inst301 a)");
    rainbow.text.apply("#instance-301-header");

    // rainbowBgの中のrainbowTextを無効化
    const rainbowBgSelector = rainbow.bg.selector();
    const targetElementsSelector = `${rainbowBgSelector} ${rainbow.text.selector()}`;
    removeClass([targetElementsSelector], rainbow.text.base);
};

export const InjectLink = () => {
    const supportSection = document.querySelector(".footer-support-link");
    if (supportSection)
        supportSection.innerHTML =
            supportSection.innerHTML +
            `<a href="https://twitter.com/Hayao0819" target="blank" class="rainbow-text">Gaming Edition開発者に連絡する<i class="icon fa fa-external-link fa-fw ml-1" aria-hidden="true"></i></a>`;
};

export const ReplaceImagesToGamimg = () => {
    document.querySelectorAll(".logo").forEach((e) => {
        if (e.getAttribute("src")) e.setAttribute("src", chrome.runtime.getURL("assets/GULMS.png"));
    });

    document.querySelectorAll("img.userpicture").forEach((e) => {
        if (e.getAttribute("src")) e.setAttribute("src", chrome.runtime.getURL("assets/partyparrot.gif"));
    });
};

export const ReplaceTextToGaimg = (moodle: GundaiWebSite<MoodleAdditionalInfo>) => {
    const headerText = moodle.additionalInfo.headerText;

    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (!e.innerHTML.includes(headerText)) e.innerHTML = e.innerHTML + headerText;
    });
    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (!e.innerHTML.includes(headerText)) e.innerHTML = e.innerHTML + headerText;
    });

    changeQueryInnerHTML("#instance-320-header", "現在のプレイ人数");
};
