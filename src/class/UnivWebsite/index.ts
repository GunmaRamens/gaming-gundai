// 無駄とは人生である。無駄を極めよ。無駄を愛せ。無駄を生きろ。
// 無駄を以て物を成す者は、無駄を以て物を滅ぼす者に勝る。x

import { AddClass, Elements, RemoveClass } from "../../utils/AddClass";
import { StorageTool } from "../StorageTool";
//import Storage from "../../utils/Storage";

const rainbowBg = "rainbow-bg";
const rainbowText = "rainbow-text";
const rainbowBgShadow = "rainbow-bg-shadow";
const rainbowTextShadow = "rainbow-text-shadow";

// UnivWebSiteはゲーミング化するウェブサイトを定義したクラス
// 型変数とAdditionalInfoプロパティによって任意の情報を追加できる
export class UnivWebsite<T> {
    id: string;
    additionalInfo: T; // 型変数使うとかっこいいよね
    storage: StorageTool;

    rainbowText: Rainbow;
    rainbowBg: Rainbow;
    rainbowTextShadow: Rainbow;
    rainbowBgShadow: Rainbow;

    constructor(id: string) {
        this.id = id;
        this.additionalInfo = {} as T;
        this.storage = new StorageTool(id);

        this.rainbowText = new Rainbow(rainbowText);
        this.rainbowBg = new Rainbow(rainbowBg);
        this.rainbowTextShadow = new Rainbow(rainbowTextShadow);
        this.rainbowBgShadow = new Rainbow(rainbowBgShadow);

        this.enableRainbow.bind(this);
        this.enableHidden.bind(this);
        this.disableRainbow.bind(this);
        this.disableHidden.bind(this);
    }

    // これらのメソッドは継承先でオーバーライドする
    enableRainbow() {}
    enableHidden() {}
    disableRainbow() {}
    disableHidden() {}

    // 上記の関数を実行するためのラッパー
    enable() {
        // CSSのためにHTML要素にデータ属性を追加
        document.documentElement.dataset.gaming_gundai = "true";
        this.storage.set("enabled", "true");
        this.enableRainbow();
        //this.EnableHidden();
    }
    disable() {
        // CSSのためにHTML要素にデータ属性を追加
        document.documentElement.dataset.gaming_gundai = "false";
        this.storage.set("enabled", "false");
        this.disableRainbow();
        //this.DisableHidden();
    }
}

export class GundaiWebSite<T> extends UnivWebsite<T> {}

export class Rainbow {
    base: string;
    classes: string[];
    constructor(base: string) {
        this.base = base;
        this.classes = [];
    }

    apply(...elements: Elements[]) {
        AddClass(elements, [this.base, ...this.classes]);
    }
    remove(...elements: Elements[]) {
        RemoveClass(elements, [this.base, ...this.classes]);
    }
}
