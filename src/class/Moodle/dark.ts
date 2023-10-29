import { DarkApplicator } from "../ClassApplicator";
import { Moodle } from ".";
import { replaceLMSLogo } from "./common";

export default function enableDark(this: DarkApplicator) {
    // 画像差し替え
    replaceLMSLogo();

    // トップページ
    Moodle.dark.bgBase.apply("#page,#page.drawers .main-inner,#region-main");
    this.textContent.apply("#page");
    this.bgNeutral.apply(".activity-item .description .activity-altcontent.course-description-item");
    this.bgBase.apply(".bg-white");

    // Header
    this.textContent.apply(".navbar-light .navbar-nav .nav-link");
    this.textAccent.apply(".navbar-nav .nav-link.active");
    this.textContent.apply(".primary-navigation .navigation .nav-link");

    // dashboard
    this.bgBase.apply(".card-body");
}
