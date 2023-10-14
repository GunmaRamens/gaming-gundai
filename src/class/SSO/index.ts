import GundaiWebSite from "../GundaiWebsite";
import EnableRainbow from "./EnableRainbow";

export default class SSO extends GundaiWebSite {
    constructor() {
        super();
        this.EnableRainbow = EnableRainbow;
    }
}
