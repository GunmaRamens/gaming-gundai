// メディアは人類にとっての第四の権力である 権力を持つ者はそれを正しく使わなければならない
// 情報は現代の石油である 情報を多く持つものは資本主義で言うところの富を得る
import { AddClass } from "../../utils/AddClass";
import { GundaiWebSite } from "../UnivWebsite";

export const Media = new GundaiWebSite("media");
Media.enableRainbow = function () {
    this.rainbowBgShadow.apply(".banner_list li");
    AddClass([".banner_list li a"], ["rainbow-bg-shadow"]);
    this.rainbowBgShadow.apply(".menu_category h3");
    this.rainbowText.apply("#news_list li a");
    this.rainbowBg.apply("#news_category_list .active");
};
