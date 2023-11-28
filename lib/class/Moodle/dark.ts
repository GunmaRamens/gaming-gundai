import { DarkApplicator } from "../ClassApplicator";
import { Moodle } from ".";
import { injectLink, replaceLMSLogo } from "./common";

export default async function enableDark(this: DarkApplicator) {
    injectLink();
    // 画像差し替え
    replaceLMSLogo();

    // トップページ
    Moodle.dark.bgBase.apply("#page,#page.drawers .main-inner,#region-main");
    this.textContent.apply("#page");
    this.bgNeutral.apply(".activity-item .description .activity-altcontent.course-description-item");
    this.bgBase.apply(".bg-white");

    // Header
    // ゲーミングが有効ならそちらに任せる
    if (!(await Moodle.isRainbowEnabled())) {
        this.textContent.apply(".navbar-light .navbar-nav .nav-link");
        this.textAccent.apply(".navbar-nav .nav-link.active");
        this.textContent.apply(".primary-navigation .navigation .nav-link");

        // ヘッダーのリンクにホバーしたときの挙動
        document.querySelectorAll<HTMLElement>(".moremenu .nav-link").forEach((e) => {
            const menuHasActiveClass = e.classList.contains("active");
            e.addEventListener("mouseover", () => {
                this.textAccent.apply(e);
                if (!menuHasActiveClass) e.classList.add("active");
            });
            e.addEventListener("mouseout", () => {
                //e.classList.remove("rainbow-bg-shadow");
                this.textAccent.remove(e);
                if (!menuHasActiveClass) e.classList.remove("active");
            });
        });
    }

    // dashboard
    this.bgBase.apply(".card-body");
}
