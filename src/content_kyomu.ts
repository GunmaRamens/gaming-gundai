import "./styles/gaming.scss";
import "./styles/kyomu.scss";

import Kyomu from "./Kyomu";
import getIsEnabled from "./utils/getIsEnabled";

window.addEventListener("load", async () => {
    const isEnable = await getIsEnabled();
    if (isEnable) {
        Kyomu.EnableRainbow();
    }
});
