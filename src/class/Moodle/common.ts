import Browser from "webextension-polyfill";

import { createElem } from "@/utils/createElem";

import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";

export const injectLink = () => {
    console.log("injectLink");
    const supportSection = document.querySelector(".footer-support-link");
    if (supportSection) {
        const link = createElem(
            "a",
            { href: "https://twitter.com/Hayao0819", class: "rainbow-text" },
            createElem("span", {}, "Gaming Edition開発者に連絡する"),
            createElem("i", { class: "icon fa fa-external-link fa-fw ml-1", "aria-hidden": "true" }),
        );
        supportSection.appendChild(link);
    }

    const userMenu = document.getElementById("usermenu-carousel");
    if (userMenu) {
        const link = createElem(
            "a",
            { href: "https://twitter.com/Hayao0819", class: "dropdown-item", role: "menuitem", tabindex: "-1" },
            "ゲーミング群馬大学",
        );
        userMenu.appendChild(link);
    }
};

export const replaceLMSLogo = () => {
    document.querySelectorAll(".logo").forEach((e) => {
        if (e.getAttribute("src")) e.setAttribute("src", Browser.runtime.getURL("assets/GULMS.png"));
    });
};

export const replaceImagesToDefault = () => {
    changeQueryInnerHTML("#instance-320-header", "現在のログイン人数");
};
