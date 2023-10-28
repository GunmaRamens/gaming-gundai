import { UnivWebsite } from "../class/UnivWebsite";

// ウィンドウが読み込まれたらGundaiWebsiteのEnableRainbowを実行する
export default function loadGamingWebsite(website: UnivWebsite<unknown>) {
    window.addEventListener("load", async () => {
        UnivWebsite.load(website);
    });
}
