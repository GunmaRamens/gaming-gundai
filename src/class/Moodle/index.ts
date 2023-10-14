import GundaiWebSite from "../GundaiWebsite";
import DisableRainbow from "./DisableRainbow";
import EnableRainbow from "./EnableRainbow";

/*
export default class Moodle extends GundaiWebSite {
    constructor() {
        super();
        this.EnableRainbow = EnableRainbow;
        this.DisableRainbow = DisableRainbow;
    }
}
*/

export const Moodle = new GundaiWebSite(EnableRainbow, DisableRainbow);
