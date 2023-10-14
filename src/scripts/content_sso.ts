import SSO from "../class/SSO";
import loadGamingWebsite from "../utils/loadGamingWebsite";

//window.addEventListener("load", async () => await runFuncIfEnabled(SSO.EnableRainbow));

loadGamingWebsite(new SSO());
