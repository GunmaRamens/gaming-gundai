import { addClass } from "../utils/addClass";
import changeQueryInnerHTML from "../utils/changeQueryInnerHTML";

export const EnableRainbow = () => {
    addClass([".header_column", ".input_form", ".input_column"], ["rainbow-bg"]);
    changeQueryInnerHTML([".product"], "群馬大学ゲーミングサインオンシステム");
};

export default EnableRainbow;
