// 無駄とは人生である。無駄を極めよ。無駄を愛せ。無駄を生きろ。
// 無駄を以て物を成す者は、無駄を以て物を滅ぼす者に勝る。x

import { AddClass, Elements, RemoveClass } from "../../utils/AddClass";

const rainbowBg = "rainbow-bg";
const rainbowText = "rainbow-text";
const rainbowBgShadow = "rainbow-bg-shadow";
const rainbowTextShadow = "rainbow-text-shadow";

// GundaiWebSiteはゲーミング化するウェブサイトを定義したクラス
// 型変数とAdditionalInfoプロパティによって任意の情報を追加できる
export default class GundaiWebSite<T> {
    additionalInfo: T;
    classes: {
        RainbowText: string[];
        RainbowTextShadow: string[];
        RainbowBg: string[];
        RainbowBgShadow: string[];
    };

    constructor(enable?: () => void, disable?: () => void) {
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
    }
    EnableRainbow() {}
    DisableRainbow() {}
    EnableHiddenFunction() {}
    DisableHiddenFunction() {}

    Enable() {
        document.documentElement.dataset.gaming_gundai = "true";

        this.EnableRainbow();
        //this.EnableHiddenFunction();
    }
    Disable() {
        document.documentElement.dataset.gaming_gundai = "false";

        this.DisableRainbow();
        //this.DisableHiddenFunction();
    }

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

// 型変数使うとかっこいいよね
