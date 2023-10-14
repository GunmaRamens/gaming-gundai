import GundaiWebSite from "../GundaiWebsite";
import DisableRainbow from "./DisableRainbow";
import EnableRainbow from "./EnableRainbow";

export const HeaderAppendText = " Gaming Edition🎮";

export default class Moodle extends GundaiWebSite {
    constructor() {
        super();
        this.EnableRainbow = EnableRainbow;
        this.DisableRainbow = DisableRainbow;
    }
}
