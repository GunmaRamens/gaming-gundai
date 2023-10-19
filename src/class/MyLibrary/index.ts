import ChangeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";
import { GundaiWebSite } from "../UnivWebsite";

export const MyLibrary = new GundaiWebSite();

MyLibrary.EnableRainbow = function () {
    if (location.pathname == "/portal/portal/selectLogin/") {
        //document.getElementById("explanation")
        ChangeQueryInnerHTML(
            "#explanation",
            "My Libraryへよおこそ。全学ゲーミングアカウントをお持ちの方は、全学ゲーミングアカウントでログイン。お持ちでない方は図書館ゲストIDでログインを選択してください。",
        );
        ChangeQueryInnerHTML("#ssoLoginTitle", "全学ゲーミングアカウントでログイン");

        // フッターをレインボー
        this.AddRainbowBg("#footer");
        document.getElementById("footer")!.id = "";
    }

    // ヘッダーとタイトルをレインボー
    this.AddRainbowBg("#header", "h2");
    this.AddRainbowText("#lblTitle", "#mainTitle");
};
