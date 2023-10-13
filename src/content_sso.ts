import "./styles/gaming.scss";
import "./styles/sso.scss";

import SSO from "./SSO";
import runIfEnabled from "./utils/runIfEnabled";

window.addEventListener("load", async () => await runIfEnabled(SSO.EnableRainbow));
