// 大学。それは研究する場であり、人類の最先端である。
// しかし今の日本では大学は高校の延長線上であり、学士を得るための場所と化している。
// こういった人々の認識が変わって欲しいと日々願っている。

import { WebsiteIds } from "@/data/websites";

import isTrue from "../../utils/isTrue";
import { DarkApplicator, HiddenApplicator, RainbowApplicator } from "../ClassApplicator";
import BrowserStorage from "../Storage/browser";
import { OtherStorage } from "../Storage/other";
import StorageTool from "../Storage/storage";

export interface UnivConfig {
    rainbow?: boolean;
    dark?: boolean;
}

// UnivWebSiteはゲーミング化するウェブサイトを定義したクラス
// 型変数とoptionsプロパティによって任意の情報を追加できる
export class UnivWebsite<T = unknown, U extends UnivConfig = UnivConfig> {
    // 基本情報
    id: WebsiteIds;

    storage: StorageTool<U>;

    // Applicator
    rainbow: RainbowApplicator;
    dark: DarkApplicator;
    hidden: HiddenApplicator;

    // 追加情報
    options: T; // 型変数使うとかっこいいよね

    // load時に実行する関数
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

    async initilizeWebsiteDb() {
        await this.storage.set({
            rainbow: false,
            dark: false,
        });
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
        const isHiddenEnabled = await OtherStorage.get("enabled-hidden");
        return isTrue(isHiddenEnabled);
    }

    load() {
        window.addEventListener("load", async () => {
            const isRainbowEnabled = await this.isRainbowEnabled();
            if (isRainbowEnabled) {
                // CSSのためにHTML要素にデータ属性を追加
                document.documentElement.dataset.gaming_gundai = "true";
                this.storage.set({ rainbow: true });
                this.rainbow.enable();
            } else {
                // CSSのためにHTML要素にデータ属性を追加
                document.documentElement.dataset.gaming_gundai = "false";
                this.storage.set({ rainbow: false });
                this.rainbow.disable();
            }

            const isDarkEnabled = await this.isDarkEnabled();
            if (isDarkEnabled) {
                document.documentElement.dataset.gaming_gundai_dark = "true";
                this.storage.set({ dark: true });
                this.dark.enable();
            } else {
                document.documentElement.dataset.gaming_gundai_dark = "false";
                this.storage.set({ dark: false });
                this.dark.disable();
            }

            const isHiddenEnabled = await this.isHiddenEnabled();
            const otherStorage = new BrowserStorage("other");
            if (isHiddenEnabled) {
                document.documentElement.dataset.gaming_gundai_hidden = "true";
                otherStorage.set({ "enabled-hidden": true });
                this.hidden.enable();
            } else {
                document.documentElement.dataset.gaming_gundai_hidden = "false";
                otherStorage.set({ "enabled-hidden": false });
                this.hidden.disable();
            }

            this.#funcs.forEach((func) => {
                //console.log("func");
                func();
            });
        });
    }
}

export class GundaiWebSite<T> extends UnivWebsite<T> {}
