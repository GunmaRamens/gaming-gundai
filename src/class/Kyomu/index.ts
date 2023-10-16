// 教務は学生の未来を担い、ゲーミングは学生の人生に彩りを加える
// この二つのシステムを統合することで、学生の人生をより豊かにすることができる
import { addRainbowBg, addRainbowText } from "../../utils/AddClass";
import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import GundaiWebSite from "../GundaiWebsite";

const EnableRainbow = () => {
    // ログインボタン
    // https://qiita.com/Sekky0905/items/a88721f2af41050c93f2
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
};

export const Kyomu = new GundaiWebSite(EnableRainbow);
