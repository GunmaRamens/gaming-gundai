// メディアは人類にとっての第四の権力である 権力を持つ者はそれを正しく使わなければならない
// 情報は現代の石油である 情報を多く持つものは資本主義で言うところの富を得る
import { AddClass } from "../../utils/AddClass";
import { GundaiWebSite } from "../UnivWebsite";

export const Media = new GundaiWebSite("media");
Media.EnableRainbow = function () {
    this.AddRainbowBgWithShadow(".banner_list li");
    AddClass([".banner_list li a"], ["rainbow-bg-shadow"]);
    this.AddRainbowBgWithShadow(".menu_category h3");
    this.AddRainbowText("#news_list li a");
    this.AddRainbowBg("#news_category_list .active");
};
