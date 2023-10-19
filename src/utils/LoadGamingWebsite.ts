import { UnivWebsite } from "../class/UnivWebsite";
import RunFuncIfEnabled from "./RunFuncIfEnabled";

// ウィンドウが読み込まれたらGundaiWebsiteのEnableRainbowを実行する
export default function LoadGamingWebsite(website: UnivWebsite<unknown>) {
    window.addEventListener("load", () => RunFuncIfEnabled(() => website.Enable()));
}
