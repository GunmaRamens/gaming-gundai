// 教務は学生の未来を担い、ゲーミングは学生の人生に彩りを加える
// この二つのシステムを統合することで、学生の人生をより豊かにすることができる
import changeQueryTextContent from "@/utils/changeQueryTextContent";

import { GundaiWebSite } from "../UnivWebsite";

export const Kyomu = new GundaiWebSite("kyomu");
export default Kyomu;

Kyomu.rainbow.enable = function () {
    // ログインボタン
    // https://qiita.com/Sekky0905/items/a88721f2af41050c93f2
    const loginBtn: HTMLInputElement = <HTMLInputElement>document.getElementById("ctl21_btnLoginShibbolethGunma");
    if (loginBtn) {
        loginBtn.value = "群馬大学ゲーミング\nアカウントでログイン";
    }

    // ページ遷移リンク
    this.text.apply(".commonTopPageLink", ".commonTopPageLinkWithPadding");

    this.text.apply(
        "#CtlInfLstBfrLginEmrgncy_LblTitle",
        "#CtlInfLstBfrLginNrml_LblTitle",
        "#AllAnnualList_LblTitle",
        "#JeLblSyllabiHeader_lbl",
    );
    this.bg.apply(".infoListEntryOrgName");
    this.bg.apply(".infoListBeforeLoginGrid");

    // ログイン後のトップページ
    this.bg.apply(".top_title_header", ".top_now_title");

    // トップページのウェルカムメッセージ
    changeQueryTextContent("#loginHeader_lblWelcome_1_lbl", "よおこそ、群馬大学ゲーミング教務システムへ");
    changeQueryTextContent(
        "#loginHeader_lblWelcome_2_lbl",
        "このサイトでは、プレーヤーの群馬大学での𝑮𝒂𝒎𝒊𝒏𝒈 𝑳𝒊𝒇𝒆 𝑺𝒕𝒚𝒍𝒆をいい感じにします",
    );

    // トップページのお知らせ
    changeQueryTextContent("#AllAnnualList_LblTitle", "ゲーミング ライフ スタイル");

    // 受信メッセージ一覧
    this.bgShadow.apply("#ctl00_phContents_ctlMesReceive_gridMes tr");

    // リンクを挿入
    if (["/portal/login.aspx", "/portal/"].includes(location.pathname.toLowerCase())) {
        const linkHTML =
            '<tr><td align="center">ゲーミング群馬大学についての問い合わせは<a href="https://twitter.com/Hayao0819" style="font-size: small;">@Hayao0819</a>までお願いします。</td></tr>';
        document.querySelectorAll(".footerTable").forEach((e) => {
            const tbody = e.querySelector("tbody");
            if (tbody) tbody.innerText += linkHTML;
        });
    }

    //ヘッダー上部の名前
    this.text.apply("#ctl00_bhHeader_lblName");
};
