import { WebsiteIds } from "@/data/websites";

import BrowserStorageTool from "./browser";

export type UnivCommonConfig = {
    rainbow?: boolean;
    dark?: boolean;
};

export type CommonConfig = Record<WebsiteIds, UnivCommonConfig>;
export const CommonStorage = BrowserStorageTool.fromId<CommonConfig>("common", {
    area: "sync",
});
