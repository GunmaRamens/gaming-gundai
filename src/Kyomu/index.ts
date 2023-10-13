import { addRainbowBg, addRainbowText } from "../utils/addClass";
import changeQueryInnerHTML from "../utils/changeQueryInnerHTML";

export default class Kyomu {
    static EnableRainbow() {
        // ログインボタン
        const loginBtn: HTMLInputElement = <HTMLInputElement>document.getElementById("ctl21_btnLoginShibbolethGunma");
        if (loginBtn) {
            loginBtn.value = "群馬大学ゲーミング\nアカウントでログイン";
        }

        // ページ遷移リンク
        addRainbowText(".commonTopPageLink", ".commonTopPageLinkWithPadding");

        addRainbowText(
            "#CtlInfLstBfrLginEmrgncy_LblTitle",
            "#CtlInfLstBfrLginNrml_LblTitle",
            "#AllAnnualList_LblTitle",
            "#JeLblSyllabiHeader_lbl",
        );
        addRainbowBg(".infoListEntryOrgName");
        addRainbowBg(".infoListBeforeLoginGrid");

        // ログイン後のトップページ
        addRainbowBg(".top_title_header", ".top_now_title");

        // トップページのウェルカムメッセージ
        changeQueryInnerHTML(["#loginHeader_lblWelcome_1_lbl"], "よおこそ、群馬大学ゲーミング教務システムへ");
        changeQueryInnerHTML(
            ["#loginHeader_lblWelcome_2_lbl"],
            "このサイトでは、プレーヤーの群馬大学での𝑮𝒂𝒎𝒊𝒏𝒈 𝑳𝒊𝒇𝒆 𝑺𝒕𝒚𝒍𝒆をいい感じにします",
        );

        // トップページのお知らせ
        changeQueryInnerHTML(["#AllAnnualList_LblTitle"], "ゲーミング ライフ スタイル");

        // 受信メッセージ一覧
        addRainbowBg("#ctl00_phContents_ctlMesReceive_gridMes tr");
    }
    static DisableRainbow() {}
}