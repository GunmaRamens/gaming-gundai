// 情報は自身の資産である ログインとはその証明である
// 古代において古墳は富の象徴とされた ログインは現代の古墳であると言える

import changeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { GundaiWebSite } from "../UnivWebsite";

export const SSO = new GundaiWebSite("sso");
SSO.enableRainbow = () => {
    SSO.rainbow.bg.apply(".header_column", ".input_form", ".input_column");
    changeQueryInnerHTML(".product", "群馬大学ゲーミングサインオンシステム");
};
