import Moodle from "../class/Moodle";
import loadGamingWebsite from "../utils/loadGamingWebsite";

//window.addEventListener("load", async () => await runFuncIfEnabled(Moodle.EnableRainbow));
loadGamingWebsite(new Moodle());

// あとでリロード無しでゲーミングモード解除を実装する
/*
chrome.action.onClicked.addListener(async () => {
    const isEnable = await isEnabled();
    if (isEnable) {
        EnableRainbow();
    } else {
        DisableRainbow();
    }
});
*/
