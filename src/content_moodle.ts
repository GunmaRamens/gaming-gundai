//import addClass from "./utils/addClass";
import "./styles/moodle.scss";
import "./styles/gaming.scss";

import Moodle from "./Moodle";
import getIsEnabled from "./utils/getIsEnabled";

window.addEventListener("load", async () => {
    const isEnable = await getIsEnabled();
    if (isEnable) {
        Moodle.EnableRainbow();
    } else {
        Moodle.DisableRainbow();
    }
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
