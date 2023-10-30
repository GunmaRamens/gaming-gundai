// 私はなぜこんなものを作っているのだろうかと、いつも思う。
// きっと、自分以外にも、仕事の意味を見失って、それでもどうしようもなくて働いている人がたくさんいる。
// でも、ウェブサイトを虹色にするだけの、なんの利益もないソフトウェアでも
// ごく数人が笑ってくれれば、それでいいのかもしれない。

import { UnivWebsite } from "../class/UnivWebsite";

// ウィンドウが読み込まれたらGundaiWebsiteのEnableRainbowを実行する
export default function loadGamingWebsite(website: UnivWebsite<unknown>) {
    window.addEventListener("load", async () => {
        UnivWebsite.load(website);
    });
}
