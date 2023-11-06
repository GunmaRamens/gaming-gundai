// 情報の信頼性は社会の構築において重要な要素である
// 個人の信頼性は家庭の構築において重要な要素である
import { GundaiWebSite } from "../UnivWebsite";
import enableDark from "./dark";
import disableRainbow from "./disableRainbow";
import enableHidden from "./enableHidden";
import enableRainbow from "./enableRainbow";
import { MoodleAdditionalInfo } from "./type";

export const Moodle = new GundaiWebSite<MoodleAdditionalInfo>("moodle");
export default Moodle;

Moodle.options = {
    headerText: " Gaming Edition 🎮",
};

Moodle.rainbow.enable = enableRainbow;

Moodle.rainbow.disable = disableRainbow;

Moodle.hidden.enable = enableHidden;

Moodle.dark.enable = enableDark;
