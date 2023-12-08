import { Kyomu, Media, Moodle, MyLibrary, SSO, UnivWebsite } from "@/class";

// ウェブサイトの設定可能な項目等を定義している内部的にハードコーディングされたデータ
export interface WebsiteConfig {
    name: string;
    class: UnivWebsite<unknown>;
    configable: {
        rainbow: boolean;
        dark: boolean;
    };
}

export type WebsiteIds = "kyomu" | "media" | "moodle" | "mylibrary" | "sso";

export const Websites: Map<WebsiteIds, WebsiteConfig> = new Map([
    [
        "moodle",
        {
            name: "Moodle",
            class: Moodle,
            configable: {
                rainbow: true,
                dark: true,
            },
        },
    ],
    [
        "media",
        {
            name: "メディアセンター",
            class: Media,
            configable: {
                rainbow: true,
                dark: false,
            },
        },
    ],
    [
        "kyomu",
        {
            name: "教務システム",
            class: Kyomu,
            configable: {
                rainbow: true,
                dark: true,
            },
        },
    ],
    [
        "mylibrary",
        {
            name: "MyLibrary",
            class: MyLibrary,
            configable: {
                rainbow: true,
                dark: false,
            },
        },
    ],
    [
        "sso",
        {
            name: "SSO",
            class: SSO,
            configable: {
                rainbow: true,
                dark: false,
            },
        },
    ],
]);

export const WebsitesList = Array.from(Websites.values());
