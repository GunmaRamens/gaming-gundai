// 無駄とは人生である。無駄を極めよ。無駄を愛せ。無駄を生きろ。
// 無駄を以て物を成す者は、無駄を以て物を滅ぼす者に勝る。x

import { DarkApplicator, HiddenApplicator, RainbowApplicator } from "../ClassApplicator";
import { StorageTool } from "../StorageTool";
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

    // 上記の関数を実行するためのラッパー
    static enable(site: UnivWebsite<unknown>) {
        // CSSのためにHTML要素にデータ属性を追加
        document.documentElement.dataset.gaming_gundai = "true";
        site.storage.set("enabled", "true");
        site.rainbow.enable();

        new StorageTool("other").getBool("enabled-hidden").then((enabled) => {
            if (enabled) site.hidden.enable();
        });
    }
    static disable(site: UnivWebsite<unknown>) {
        // CSSのためにHTML要素にデータ属性を追加
        document.documentElement.dataset.gaming_gundai = "false";
        site.storage.set("enabled", "false");
        site.rainbow.disable();
        site.hidden.disable();
    }
}

export class GundaiWebSite<T> extends UnivWebsite<T> {}
