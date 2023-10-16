// 無駄とは人生である。無駄を極めよ。無駄を愛せ。無駄を生きろ。
// 無駄を以て物を成す者は、無駄を以て物を滅ぼす者に勝る。
export default class GundaiWebSite<T> {
    EnableRainbow?: () => void;
    DisableRainbow?: () => void;
    constructor(enable?: () => void, disable?: () => void) {
        this.EnableRainbow = enable;
        this.DisableRainbow = disable;
        this.AdditionalInfo = {} as T;
    }
    AdditionalInfo: T;
}
