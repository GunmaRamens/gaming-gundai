import { UnivWebsite } from "../class/UnivWebsite";
import isTrue from "./isTrue";

// ウィンドウが読み込まれたらGundaiWebsiteのEnableRainbowを実行する
export default function loadGamingWebsite(website: UnivWebsite<unknown>) {
    window.addEventListener("load", async () => {
        const isEnabled = await website.storage.get("enabled");
        if (isTrue(isEnabled)) {
            UnivWebsite.enable(website);
        } else {
            UnivWebsite.disable(website);
        }
    });
}
