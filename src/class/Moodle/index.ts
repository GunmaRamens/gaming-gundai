// 情報の信頼性は社会の構築において重要な要素である
// 個人の信頼性は家庭の構築において重要な要素である
import GundaiWebSite from "../GundaiWebsite";
import DisableRainbowFunc from "./DisableRainbowFunc";
import EnableRainbowFunc from "./EnableRainbowFunc";
import { MoodleAdditionalInfo } from "./type";

export const Moodle = new GundaiWebSite<MoodleAdditionalInfo>();
Moodle.AdditionalInfo.headerText = " Gaming Edition🎮";
Moodle.EnableRainbow = EnableRainbowFunc(Moodle);
Moodle.DisableRainbow = DisableRainbowFunc(Moodle);
