import Browser from "webextension-polyfill";

import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";

export const injectLink = () => {
    const supportSection = document.querySelector(".footer-support-link");
    if (supportSection)
        supportSection.innerHTML =
            supportSection.innerHTML +
            `<a href="https://twitter.com/Hayao0819" target="blank" class="rainbow-text">Gaming Edition開発者に連絡する<i class="icon fa fa-external-link fa-fw ml-1" aria-hidden="true"></i></a>`;
};

export const replaceLMSLogo = () => {
    document.querySelectorAll(".logo").forEach((e) => {
        if (e.getAttribute("src")) e.setAttribute("src", Browser.runtime.getURL("assets/GULMS.png"));
    });
};

export const replaceImagesToDefault = () => {
    changeQueryInnerHTML("#instance-320-header", "現在のログイン人数");
};
