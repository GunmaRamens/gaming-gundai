import { RainbowApplicator } from "../ClassApplicator";
import Moodle from ".";
import { replaceImagesToDefault } from "./common";

export default function disableRainbow(this: RainbowApplicator) {
    this.bg.remove(".navbar", ".addinghtml");
    this.bg.remove(".page-header-headings h1");
    this.bg.remove("a");

    replaceImagesToDefault();

    const headerText = Moodle.options.headerText;
    document.querySelectorAll(".page-header-headings h1").forEach((e) => {
        if (e.innerHTML.includes(headerText)) e.innerHTML.replace(headerText, "");
    });
}
