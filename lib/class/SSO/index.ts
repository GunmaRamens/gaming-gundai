// 情報は自身の資産である ログインとはその証明である
// 古代において古墳は富の象徴とされた ログインは現代の古墳であると言える

import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { GundaiWebSite } from "../UnivWebsite";

export const SSO = new GundaiWebSite<{
    enableAuto2FA: () => void;
    isAuto2FAEnabled: () => Promise<boolean>;
}>("sso");
export default SSO;

SSO.rainbow.enable = function () {
    //this.text.apply("#login_button"); // ログインボタン
    this.text.apply("a"); // リンク
    this.text.apply(".product"); // タイトル
    //this.text.apply(".login_comment");

    this.bg.apply(".login__main"); // ログイン画面

    this.bg.apply("#login_button");

    changeQueryInnerHTML(".product", "群馬大学ゲーミングサインオンシステム");
    changeQueryInnerHTML("#login_button", "→ ログイン ←");
};

SSO.options.isAuto2FAEnabled = () => SSO.storage.get("auto-2fa");

SSO.options.enableAuto2FA = () => {
    SSO.storage.getBool("auto-2fa").then((isAuto2FAEnabled) => {
        if (isAuto2FAEnabled) {
            //console.log("enableAuto2FA");
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
        }
    });
};

SSO.addLoader(SSO.options.enableAuto2FA);
