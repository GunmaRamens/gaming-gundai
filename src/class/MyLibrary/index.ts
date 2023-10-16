import { AddRainbowBg, AddRainbowText } from "../../utils/AddClass";
import ChangeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import GundaiWebSite from "../GundaiWebsite";

export const MyLibrary = new GundaiWebSite(() => {
    if (location.pathname == "/portal/portal/selectLogin/") {
        //document.getElementById("explanation")
        ChangeQueryInnerHTML(
            "#explanation",
            "My Libraryへよおこそ。全学ゲーミングアカウントをお持ちの方は、全学ゲーミングアカウントでログイン。お持ちでない方は図書館ゲストIDでログインを選択してください。",
        );
        ChangeQueryInnerHTML("#ssoLoginTitle", "全学ゲーミングアカウントでログイン");

        // フッターをレインボー
        AddRainbowBg("#footer");
        document.getElementById("footer")!.id = "";
    }

    // ヘッダーとタイトルをレインボー
    AddRainbowBg("#header", "h2");
    AddRainbowText("#lblTitle", "#mainTitle");
});
