// 情報は自身の資産である ログインとはその証明である
// 古代において古墳は富の象徴とされた ログインは現代の古墳であると言える

import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { GundaiWebSite } from "../UnivWebsite";

export const SSO = new GundaiWebSite("sso");
export default SSO;

SSO.rainbow.enable = function () {
    this.bg.apply(".header_column", ".input_form", ".input_column");
    changeQueryInnerHTML(".product", "群馬大学ゲーミングサインオンシステム");

    // 二段階認証の自動送信
    if (location.pathname == "/pub/allotplogin_force.cgi") {
        // 2段階認証のページ
        document.getElementById("password_input")?.addEventListener("input", (e) => {
            const target = e.target;
            if (!(target instanceof HTMLInputElement)) return;
            if (target.value.length == 6) {
                const form = document.getElementById("login");
                if (form instanceof HTMLFormElement) form.submit();
            }
        });
    }
};
