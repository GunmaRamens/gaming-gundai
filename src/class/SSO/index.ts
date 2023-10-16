// 情報は自身の資産である ログインとはその証明である
// 古代において古墳は富の象徴とされた ログインは現代の古墳であると言える

import { AddClass } from "../../utils/AddClass";
import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import GundaiWebSite from "../GundaiWebsite";

const EnableRainbow = () => {
    AddClass([".header_column", ".input_form", ".input_column"], ["rainbow-bg"]);
    changeQueryInnerHTML([".product"], "群馬大学ゲーミングサインオンシステム");
};

export const SSO = new GundaiWebSite(EnableRainbow);
