export default class GundaiWebSite {
    EnableRainbow: () => void;
    DisableRainbow?: () => void;
    constructor(enable: () => void, disable?: () => void) {
        this.EnableRainbow = enable;
        this.DisableRainbow = disable;
    }
}
