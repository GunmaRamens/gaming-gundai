import "./styles/gaming.scss";
import "./styles/sso.scss";

import SSO from "./SSO";
import getIsEnabled from "./utils/getIsEnabled";

window.addEventListener("load", async () => {
    const isEnable = await getIsEnabled();
    if (isEnable) {
        SSO.EnableRainbow();
    }
});
