import ChangeQueryInnerHTML from "../../utils/changeQueryInnerHTML";
import { GundaiWebSite } from "../UnivWebsite";

export const MyLibrary = new GundaiWebSite("mylibrary");
export default MyLibrary;

MyLibrary.rainbow.enable = function () {
    if (location.pathname == "/portal/portal/selectLogin/") {
        //document.getElementById("explanation")
        ChangeQueryInnerHTML(
            "#explanation",
            "My Libraryへよおこそ。全学ゲーミングアカウントをお持ちの方は、全学ゲーミングアカウントでログイン。お持ちでない方は図書館ゲストIDでログインを選択してください。",
        );
        ChangeQueryInnerHTML("#ssoLoginTitle", "全学ゲーミングアカウントでログイン");

        // フッターをレインボー
        this.bg.apply("#footer");
        document.getElementById("footer")!.id = "";
    }

    // ヘッダーとタイトルをレインボー
    this.bg.apply("#header", "h2");
    this.text.apply("#lblTitle", "#mainTitle");
};
