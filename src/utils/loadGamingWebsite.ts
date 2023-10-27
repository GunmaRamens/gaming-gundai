import { UnivWebsite } from "../class/UnivWebsite";
import isTrue from "./isTrue";
//import RunFuncIfEnabled from "./RunFuncIfEnabled";

// ウィンドウが読み込まれたらGundaiWebsiteのEnableRainbowを実行する
export default function loadGamingWebsite(website: UnivWebsite<unknown>) {
    window.addEventListener("load", async () => {
        const isEnabled = await website.storage.get("enabled");
        if (isTrue(isEnabled)) {
            website.enable();
        } else {
            website.disable();
        }
    });
}
