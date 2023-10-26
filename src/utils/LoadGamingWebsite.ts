import { UnivWebsite } from "../class/UnivWebsite";
import IsTrue from "./IsTrue";
//import RunFuncIfEnabled from "./RunFuncIfEnabled";

// ウィンドウが読み込まれたらGundaiWebsiteのEnableRainbowを実行する
export default function LoadGamingWebsite(website: UnivWebsite<unknown>) {
    window.addEventListener("load", async () => {
        const isEnabled = await website.storage.get("enabled");
        if (IsTrue(isEnabled)) {
            website.enable();
        } else {
            website.disable();
        }
    });
}
