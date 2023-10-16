// メディアは人類にとっての第四の権力である 権力を持つ者はそれを正しく使わなければならない
// 情報は現代の石油である 情報を多く持つものは資本主義で言うところの富を得る
import { AddClass, AddRainbowBg, AddRainbowBgWithShadow, AddRainbowText } from "../../utils/AddClass";
import GundaiWebSite from "../GundaiWebsite";

export const Media = new GundaiWebSite(() => {
    AddRainbowBgWithShadow(".banner_list li");
    AddClass([".banner_list li a"], ["rainbow-bg-shadow"]);
    AddRainbowBgWithShadow(".menu_category h3");
    AddRainbowText("#news_list li a");
    AddRainbowBg("#news_category_list .active");
});
