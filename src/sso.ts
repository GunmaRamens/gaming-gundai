import "./styles/gaming.scss";
import "./styles/sso.scss";

import addClass from "./utils/addClass";

window.addEventListener("load", () => {
    [".header_column", ".input_form", ".input_column"].forEach((query) => {
        addClass(query, "rainbow");
    });

    const title = document.querySelector(".product")
    if (title) title.innerHTML = "群馬大学ゲーミングサインオンシステム";
});
