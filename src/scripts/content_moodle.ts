import "/styles/moodle.scss";

import { Moodle } from "../class";
import loadGamingWebsite from "../utils/LoadGamingWebsite";

//window.addEventListener("load", async () => await runFuncIfEnabled(Moodle.EnableRainbow));
loadGamingWebsite(Moodle);

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
