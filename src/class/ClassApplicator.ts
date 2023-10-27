import { addClass, Elements, removeClass } from "../utils/addClass";

const rainbowBg = "rainbow-bg";
const rainbowText = "rainbow-text";
const rainbowBgShadow = "rainbow-bg-shadow";
const rainbowTextShadow = "rainbow-text-shadow";

// 要素にclassNameを追加します
// baseとclassesで追加するclassNameを指定し、applyで適用、removeで削除します
// selectorで適用されるセレクタを取得できます
// baseは初期化に必ず指定する必要があり書き換えるべきではありませんが、classesは追加で個別の設定を行うために指定できます
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
    base: classApplicator;
    baseDarker: classApplicator;
    content: classApplicator;
    neutral: classApplicator;
    accent: classApplicator;

    constructor() {
        super();
        this.base = new classApplicator(["dark-base"]);
        this.baseDarker = new classApplicator(["dark-base-darker"]);
        this.content = new classApplicator(["dark-content"]);
        this.neutral = new classApplicator(["dark-neutral"]);
        this.accent = new classApplicator(["dark-accent"]);
    }
}
