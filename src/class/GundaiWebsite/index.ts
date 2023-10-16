// 無駄とは人生である。無駄を極めよ。無駄を愛せ。無駄を生きろ。
// 無駄を以て物を成す者は、無駄を以て物を滅ぼす者に勝る。x

// GundaiWebSiteはゲーミング化するウェブサイトを定義したクラス
// 型変数とAdditionalInfoプロパティによって任意の情報を追加できる
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

// 型変数使うとかっこいいよね
