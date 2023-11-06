// 無駄とは人生である。無駄を極めよ。無駄を愛せ。無駄を生きろ。
// 無駄を以て物を成す者は、無駄を以て物を滅ぼす者に勝る。

import { addClass, Elements, removeClass } from "../utils/addClass";

const rainbowBg = "rainbow-bg";
const rainbowText = "rainbow-text";
const rainbowBgShadow = "rainbow-bg-shadow";
const rainbowTextShadow = "rainbow-text-shadow";

// 要素にclassNameを追加します
// baseとclassesで追加するclassNameを指定し、applyで適用、removeで削除します
// selectorで適用されるセレクタを取得できます
// classesは追加で任意のクラスを同時に指定できます
export class classApplicator {
    #base: string[];
    classes: string[];
    constructor(base: string[]) {
        this.#base = base;
        this.classes = [];
    }

    apply(...elements: Elements[]) {
        addClass(elements, [...this.#base, ...this.classes]);
    }
    remove(...elements: Elements[]) {
        removeClass(elements, [...this.#base, ...this.classes]);
    }
    selector() {
        if (this.classes.length === 0) return `.${this.#base}`;
        else return `.${this.#base}.${this.classes.join(".")}`;
    }
}

export class ApplicatorBase {
    enable() {}
    disable() {}
}

// classApplicatorを用いて虹色にするクラス
export class RainbowApplicator extends ApplicatorBase {
    text: classApplicator;
    bg: classApplicator;
    textShadow: classApplicator;
    bgShadow: classApplicator;

    constructor() {
        super();
        this.text = new classApplicator([rainbowText]);
        this.bg = new classApplicator([rainbowBg]);
        this.textShadow = new classApplicator([rainbowText, rainbowTextShadow]);
        this.bgShadow = new classApplicator([rainbowBg, rainbowBgShadow]);
    }
}

// 隠し機能を有効化するクラス
export class HiddenApplicator extends ApplicatorBase {}

// classApplicatorを用いてダークテーマにするクラス
export class DarkApplicator extends ApplicatorBase {
    bgBase: classApplicator;
    bgBaseDarker: classApplicator;
    bgContent: classApplicator;
    bgNeutral: classApplicator;
    bgAccent: classApplicator;
    textBase: classApplicator;
    textBaseDarker: classApplicator;
    textContent: classApplicator;
    textNeutral: classApplicator;
    textAccent: classApplicator;

    constructor() {
        super();

        this.bgBase = new classApplicator(["bg-base"]);
        this.bgBaseDarker = new classApplicator(["bg-base-darker"]);
        this.bgContent = new classApplicator(["bg-content"]);
        this.bgNeutral = new classApplicator(["bg-neutral"]);
        this.bgAccent = new classApplicator(["bg-accent"]);
        this.textBase = new classApplicator(["text-base"]);
        this.textBaseDarker = new classApplicator(["text-base-darker"]);
        this.textContent = new classApplicator(["text-content"]);
        this.textNeutral = new classApplicator(["text-neutral"]);
        this.textAccent = new classApplicator(["text-accent"]);
    }
}
