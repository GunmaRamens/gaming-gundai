// 無駄とは人生である。無駄を極めよ。無駄を愛せ。無駄を生きろ。
// 無駄を以て物を成す者は、無駄を以て物を滅ぼす者に勝る。x

import { AddClass, Elements, RemoveClass } from "../../utils/AddClass";
import Storage from "../../utils/Storage";

const rainbowBg = "rainbow-bg";
const rainbowText = "rainbow-text";
const rainbowBgShadow = "rainbow-bg-shadow";
const rainbowTextShadow = "rainbow-text-shadow";

// UnivWebSiteはゲーミング化するウェブサイトを定義したクラス
// 型変数とAdditionalInfoプロパティによって任意の情報を追加できる
export class UnivWebsite<T> {
    name: string;

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

        this.name = "unknown";

        this.EnableRainbow.bind(this);
        this.DisableRainbow.bind(this);
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

        this.UpdateStorage("enabled", true);

        this.EnableRainbow();
        //this.EnableHidden();
    }
    Disable() {
        // CSSのためにHTML要素にデータ属性を追加
        document.documentElement.dataset.gaming_gundai = "false";

        this.UpdateStorage("enabled", false);

        this.DisableRainbow();
        //this.DisableHidden();
    }

    // Storage
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UpdateStorage(key: string, value: any) {
        const newData = { [key]: value };
        const currentData = Storage.get(this.name);
        if (currentData == undefined) {
            Storage.set(newData);
            return;
        } else {
            Storage.set({ ...currentData, ...newData });
        }
    }
    GetStorage(key: string) {
        const data = Storage.get(this.name).then((data) => data[key]);
        console.log(data);
        return data;
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
