import "./styles/gaming.scss";
import "./styles/kyomu.scss";

import Kyomu from "./Kyomu";
import runIfEnabled from "./utils/runIfEnabled";

window.addEventListener("load", async () => await runIfEnabled(Kyomu.EnableRainbow));
