// 情報は自身の資産である ログインとはその証明である
// 古代において古墳は富の象徴とされた ログインは現代の古墳であると言える

import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { OtherStorage } from "../Storage/other";
import { GundaiWebSite } from "../UnivWebsite";

export interface SSOOptions {
    enableAuto2FA: () => void;
    isAuto2FAEnabled: () => Promise<boolean | undefined>;
}
/*
export interface SSOStorage extends UnivConfig {
    "auto-2fa": boolean;
}
*/

export const SSO = new GundaiWebSite<SSOOptions>("sso");
export default SSO;

SSO.rainbow.enable = function () {
    this.bg.apply(".input_form");
    changeQueryInnerHTML(".product", "群馬大学ゲーミングサインオンシステム");
};
SSO.options.isAuto2FAEnabled = async (): Promise<boolean | undefined> => {
    const isAuto2FAEnabled = await OtherStorage.get("auto-2fa");
    return isAuto2FAEnabled;
};
SSO.options.enableAuto2FA = () => {
    OtherStorage.get("auto-2fa").then((isAuto2FAEnabled) => {
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
