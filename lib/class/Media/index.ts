// メディアは人類にとっての第四の権力である 権力を持つ者はそれを正しく使わなければならない
// 情報は現代の石油である 情報を多く持つものは資本主義で言うところの富を得る
import { GundaiWebSite } from "../UnivWebsite";

export const Media = new GundaiWebSite("media");
export default Media;

Media.rainbow.enable = function () {
    this.bgShadow.apply(".banner_list li");
    this.bgShadow.apply(".banner_list li a");
    this.bgShadow.apply(".menu_category h3");
    this.text.apply("#news_list li a");
    this.bg.apply("#news_category_list .active");
};
