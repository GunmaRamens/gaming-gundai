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

    additionalInfo: T;
    classes: {
        RainbowText: string[];
        RainbowTextShadow: string[];
        RainbowBg: string[];
        RainbowBgShadow: string[];
    };

    constructor(id: string, enable?: () => void, disable?: () => void) {
        this.id = id;
        if (enable) this.EnableRainbow = enable;
        if (disable) this.DisableRainbow = disable;

        this.additionalInfo = {} as T;
        this.classes = {
            RainbowText: [],
            RainbowTextShadow: [],
            RainbowBg: [],
            RainbowBgShadow: [],
        };

        this.EnableRainbow.bind(this);
        this.DisableRainbow.bind(this);
        this.EnableHidden.bind(this);
        this.DisableHidden.bind(this);
    }

    // これらのメソッドは継承先でオーバーライドする
    EnableRainbow() {}
    EnableHidden() {}
    DisableRainbow() {}
    DisableHidden() {}

    // 上記の関数を実行するためのラッパー
    Enable() {
        // CSSのためにHTML要素にデータ属性を追加
        document.documentElement.dataset.gaming_gundai = "true";
        this.WriteStorage("enabled", "true");
        this.EnableRainbow();
        //this.EnableHidden();
    }
    Disable() {
        // CSSのためにHTML要素にデータ属性を追加
        document.documentElement.dataset.gaming_gundai = "false";
        this.WriteStorage("enabled", "false");
        this.DisableRainbow();
        //this.DisableHidden();
    }

    // StorageTool
    async WriteStorage(key: string, value: string) {
        const storage = new StorageTool(this.id);
        await storage.UpdateStorage(key, value);
    }
    async ReadStorage(key: string) {
        const storage = new StorageTool(this.id);
        return await storage.GetStorage(key);
    }

    // スタイル適用のためのメソッド
    AddRainbowBg(...elements: Elements[]) {
        AddClass(elements, [rainbowBg, ...this.classes.RainbowBg]);
    }
    AddRainbowBgWithShadow(...elements: Elements[]) {
        AddClass(elements, [rainbowBg, rainbowBgShadow, ...this.classes.RainbowBgShadow]);
    }
    AddRainbowText(...elements: Elements[]) {
        AddClass(elements, [rainbowText, ...this.classes.RainbowText]);
    }
    AddRainbowTextWithShadow(...elements: Elements[]) {
        AddClass(elements, [rainbowText, rainbowTextShadow, ...this.classes.RainbowTextShadow]);
    }

    RemoveRainbowBg(...elements: Elements[]) {
        RemoveClass(elements, [rainbowBg, ...this.classes.RainbowBg]);
    }
    RemoveRainbowBgWithShadow(...elements: Elements[]) {
        RemoveClass(elements, [rainbowBg, rainbowBgShadow, ...this.classes.RainbowBgShadow]);
    }
    RemoveRainbowText(...elements: Elements[]) {
        RemoveClass(elements, [rainbowText, ...this.classes.RainbowText]);
    }
    RemoveRainbowTextWithShadow(...elements: Elements[]) {
        RemoveClass(elements, [rainbowText, rainbowTextShadow, ...this.classes.RainbowTextShadow]);
    }
}

export class GundaiWebSite<T> extends UnivWebsite<T> {}

// 型変数使うとかっこいいよね
