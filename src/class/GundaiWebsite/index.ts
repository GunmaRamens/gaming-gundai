export default class GundaiWebSite {
    HeaderAppendText: string;
    EnableRainbow: () => void;
    DisableRainbow: () => void;
    constructor() {
        this.HeaderAppendText = "";
        this.EnableRainbow = () => {};
        this.DisableRainbow = () => {};
    }
}
