import BrowserStorage from "./browser";

export interface OtherConfig {
    "enabled-hidden"?: boolean;
    installed?: boolean;
    "quick-switch"?: boolean;
    "show-hidden-option"?: boolean;
    "auto-2fa"?: boolean;
}

export const OtherStorage = new BrowserStorage<OtherConfig>("other");
