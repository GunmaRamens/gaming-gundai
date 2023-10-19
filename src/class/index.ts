// 中間管理職は上司と部下の間に立つ存在であり、糊である

import { Kyomu } from "./Kyomu";
import { Media } from "./Media";
import { Moodle } from "./Moodle";
import { MyLibrary } from "./MyLibrary";
import { SSO } from "./SSO";

export { Kyomu } from "./Kyomu";
export { Media } from "./Media";
export { Moodle } from "./Moodle";
export { MyLibrary } from "./MyLibrary";
export { SSO } from "./SSO";
export { GundaiWebSite, UnivWebsite } from "./UnivWebsite";

export const WebSites = [Kyomu, Media, Moodle, MyLibrary, SSO];
