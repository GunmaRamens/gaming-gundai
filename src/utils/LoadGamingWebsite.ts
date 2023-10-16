import GundaiWebSite from "../class/GundaiWebsite";
import RunFuncIfEnabled from "./RunFuncIfEnabled";

// ウィンドウが読み込まれたらGundaiWebsiteのEnableRainbowを実行する
export default function LoadGamingWebsite(website: GundaiWebSite) {
    window.addEventListener("load", async () => await RunFuncIfEnabled(website.EnableRainbow));
}
