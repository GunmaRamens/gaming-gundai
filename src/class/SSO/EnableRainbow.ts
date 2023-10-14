import { AddClass } from "../../utils/AddClass";
import changeQueryInnerHTML from "../../utils/ChangeQueryInnerHTML";

export const EnableRainbow = () => {
    AddClass([".header_column", ".input_form", ".input_column"], ["rainbow-bg"]);
    changeQueryInnerHTML([".product"], "群馬大学ゲーミングサインオンシステム");
};

export default EnableRainbow;
