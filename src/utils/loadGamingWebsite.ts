import GundaiWebSite from "../class/GundaiWebsite";
import runFuncIfEnabled from "./runFuncIfEnabled";

export default function loadGamingWebsite(website: GundaiWebSite) {
    window.addEventListener("load", async () => await runFuncIfEnabled(website.EnableRainbow));
}
