// 情報の信頼性は社会の構築において重要な要素である
// 個人の信頼性は家庭の構築において重要な要素である
import { AddClass } from "../../utils/AddClass";
import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";

export const EnableRainbow = () => {
    AddClass([".header_column", ".input_form", ".input_column"], ["rainbow-bg"]);
    changeQueryInnerHTML([".product"], "群馬大学ゲーミングサインオンシステム");
};

export default EnableRainbow;
