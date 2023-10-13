//import addClass from "./utils/addClass";
import "./styles/moodle.scss";
import "./styles/gaming.scss";

import Moodle from "./Moodle";
import runIfEnabled from "./utils/runIfEnabled";

window.addEventListener("load", async () => await runIfEnabled(Moodle.EnableRainbow));

chrome.runtime.onMessage.addListener((message) => {
    if (message === "reload") location.reload();
});

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
