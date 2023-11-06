// 中間管理職は上司と部下の間に立つ存在であり、糊である

import { Kyomu } from "./Kyomu";
import { Media } from "./Media";
import { Moodle } from "./Moodle";
import { MyLibrary } from "./MyLibrary";
import { SSO } from "./SSO";
import { UnivWebsite } from "./UnivWebsite";

export { Kyomu } from "./Kyomu";
export { Media } from "./Media";
export { Moodle } from "./Moodle";
export { MyLibrary } from "./MyLibrary";
export { SSO } from "./SSO";
export { GundaiWebSite, UnivWebsite } from "./UnivWebsite";

export const WebSiteClasses = (function () {
    const sites: { [id: string]: UnivWebsite<unknown> } = {};

    [Kyomu, Media, Moodle, MyLibrary, SSO].forEach((site) => {
        sites[site.id] = site;
    });
    return sites;
})();
