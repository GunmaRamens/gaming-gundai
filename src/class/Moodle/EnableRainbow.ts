import { AddRainbowBg, AddRainbowText } from "../../utils/AddClass";
import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import GundaiWebSite from "../GundaiWebsite";
import { MoodleAdditionalInfo } from "./type";

export const EnableRainbowText = () => {
    AddRainbowText(".page-header-headings h1");
    AddRainbowText("a");
};

export const EnableRainbowBg = () => {
    AddRainbowBg(".navbar", ".addinghtml");
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

export const ReplaceTextToGaimgFunc = (moodle: GundaiWebSite<MoodleAdditionalInfo>) => {
    return () => {
        const headerText = moodle.AdditionalInfo.headerText;

        document.querySelectorAll(".page-header-headings h1").forEach((e) => {
            if (!e.innerHTML.includes(headerText)) e.innerHTML = e.innerHTML + headerText;
        });
        document.querySelectorAll(".page-header-headings h1").forEach((e) => {
            if (!e.innerHTML.includes(headerText)) e.innerHTML = e.innerHTML + headerText;
        });

        changeQueryInnerHTML("#instance-320-header", "現在のプレイ人数");
    };
};
