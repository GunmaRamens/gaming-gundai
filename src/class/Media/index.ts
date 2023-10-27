// メディアは人類にとっての第四の権力である 権力を持つ者はそれを正しく使わなければならない
// 情報は現代の石油である 情報を多く持つものは資本主義で言うところの富を得る
import { GundaiWebSite } from "../UnivWebsite";

export const Media = new GundaiWebSite("media");
Media.enableRainbow = function () {
    this.rainbow.bgShadow.apply(".banner_list li");
    this.rainbow.bgShadow.apply(".banner_list li a");
    this.rainbow.bgShadow.apply(".menu_category h3");
    this.rainbow.text.apply("#news_list li a");
    this.rainbow.bg.apply("#news_category_list .active");
};
