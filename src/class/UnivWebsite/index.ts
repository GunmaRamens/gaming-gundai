// 大学。それは研究する場であり、人類の最先端である。
// しかし今の日本では大学は高校の延長線上であり、学士を得るための場所と化している。
// こういった人々の認識が変わって欲しいと日々願っている。

import { WebsiteIds } from "@/data/websites";

import isTrue from "../../utils/isTrue";
import { DarkApplicator, HiddenApplicator, RainbowApplicator } from "../ClassApplicator";
import BrowserStorage from "../Storage/browser";
//import Storage from "../../utils/Storage";

// UnivWebSiteはゲーミング化するウェブサイトを定義したクラス
// 型変数とoptionsプロパティによって任意の情報を追加できる
export class UnivWebsite<T> {
    // 基本情報
    id: WebsiteIds;

    storage: BrowserStorage;

    // Applicator
    rainbow: RainbowApplicator;
    dark: DarkApplicator;
    hidden: HiddenApplicator;

    // 追加情報
    options: T; // 型変数使うとかっこいいよね
    #funcs: (() => void)[];
    addLoader(func: () => void) {
        this.#funcs.push(func);
    }

    // コンストラクタ
    constructor(id: WebsiteIds) {
        this.id = id;
        this.options = {} as T;
        this.#funcs = [];
        this.storage = new BrowserStorage(id);

        this.rainbow = new RainbowApplicator();
        this.dark = new DarkApplicator();
        this.hidden = new HiddenApplicator();
    }

    async isRainbowEnabled() {
        const isRainbowEnabled = await this.storage.get("rainbow");
        return isTrue(isRainbowEnabled);
    }

    async isDarkEnabled() {
        const isDarkEnabled = await this.storage.get("dark");
        return isTrue(isDarkEnabled);
    }

    async isHiddenEnabled() {
        const otherStorage = new BrowserStorage("other");
        const isHiddenEnabled = await otherStorage.getBool("enabled-hidden");
        return isTrue(isHiddenEnabled);
    }

    static load(site: UnivWebsite<unknown>) {
        window.addEventListener("load", async () => {
            const isRainbowEnabled = await site.isRainbowEnabled();
            if (isRainbowEnabled) {
                // CSSのためにHTML要素にデータ属性を追加
                document.documentElement.dataset.gaming_gundai = "true";
                site.storage.set("rainbow", "true");
                site.rainbow.enable();
            } else {
                // CSSのためにHTML要素にデータ属性を追加
                document.documentElement.dataset.gaming_gundai = "false";
                site.storage.set("rainbow", "false");
                site.rainbow.disable();
            }

            const isDarkEnabled = await site.isDarkEnabled();
            if (isDarkEnabled) {
                document.documentElement.dataset.gaming_gundai_dark = "true";
                site.storage.set("dark", "true");
                site.dark.enable();
            } else {
                document.documentElement.dataset.gaming_gundai_dark = "false";
                site.storage.set("dark", "false");
                site.dark.disable();
            }

            const isHiddenEnabled = await site.isHiddenEnabled();
            const otherStorage = new BrowserStorage("other");
            if (isHiddenEnabled) {
                document.documentElement.dataset.gaming_gundai_hidden = "true";
                otherStorage.set("enabled-hidden", "true");
                site.hidden.enable();
            } else {
                document.documentElement.dataset.gaming_gundai_hidden = "false";
                site.storage.set("enabled-hidden", "false");
                site.hidden.disable();
            }

            site.#funcs.forEach((func) => {
                //console.log("func");
                func();
            });
        });
    }
}

export class GundaiWebSite<T> extends UnivWebsite<T> {}
