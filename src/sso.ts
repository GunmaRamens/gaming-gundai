import "./styles/gaming.scss";
import "./styles/sso.scss";

import addClass from "./utils/addClass";
import changeQueryInnerHTML from "./utils/changeQueryInnerHTML";

window.addEventListener("load", () => {
    
    addClass([".header_column", ".input_form", ".input_column"], ["rainbow"]);

    changeQueryInnerHTML([".product"], "群馬大学ゲーミングサインオンシステム");
});
