// 大学。それは研究する場であり、人類の最先端である。
// しかし今の日本では大学は高校の延長線上であり、学士を得るための場所と化している。
// こういった人々の認識が変わって欲しいと日々願っている。

import isTrue from "../../utils/isTrue";
import { DarkApplicator, HiddenApplicator, RainbowApplicator } from "../ClassApplicator";
import StorageTool from "../StorageTool";
//import Storage from "../../utils/Storage";

// UnivWebSiteはゲーミング化するウェブサイトを定義したクラス
// 型変数とAdditionalInfoプロパティによって任意の情報を追加できる
export class UnivWebsite<T> {
    id: string;
    additionalInfo: T; // 型変数使うとかっこいいよね
    storage: StorageTool;

    rainbow: RainbowApplicator;
    dark: DarkApplicator;
    hidden: HiddenApplicator;

    constructor(id: string) {
        this.id = id;
        this.additionalInfo = {} as T;
        this.storage = new StorageTool(id);

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
        const otherStorage = new StorageTool("other");
        const isHiddenEnabled = await otherStorage.getBool("enabled-hidden");
        return isTrue(isHiddenEnabled);
    }

    static async load(site: UnivWebsite<unknown>) {
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
        const otherStorage = new StorageTool("other");
        if (isHiddenEnabled) {
            document.documentElement.dataset.gaming_gundai_hidden = "true";
            otherStorage.set("enabled-hidden", "true");
            site.hidden.enable();
        } else {
            document.documentElement.dataset.gaming_gundai_hidden = "false";
            site.storage.set("enabled-hidden", "false");
            site.hidden.disable();
        }
    }
}

export class GundaiWebSite<T> extends UnivWebsite<T> {}
