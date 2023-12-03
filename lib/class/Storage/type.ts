import { WebsiteIds } from "@/data/websites";

export type StorageKeys =
    | "dark"
    | "rainbow"
    | "enabled-hidden"
    | "show-hidden-option"
    | "installed"
    | "auto-2fa"
    | "quick-switch";

export type StorageIds = "common" | "other" | WebsiteIds;
