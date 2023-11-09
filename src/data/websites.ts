import { UnivWebsite } from "@/class";

export interface WebsiteConfig {
    name: string;
    id: WebsiteIds;
    configable: {
        rainbow: boolean;
        dark: boolean;
    };
}

export type WebsiteIds = "kyomu" | "media" | "moodle" | "mylibrary" | "sso";

export const WebSiteClasses: Map<WebsiteIds, UnivWebsite<unknown>> = new Map([
    ["kyomu", new UnivWebsite<unknown>("kyomu")],
    ["media", new UnivWebsite<unknown>("media")],
    ["moodle", new UnivWebsite<unknown>("moodle")],
    ["mylibrary", new UnivWebsite<unknown>("mylibrary")],
    ["sso", new UnivWebsite<unknown>("sso")],
]);

export const Websites: WebsiteConfig[] = [
    {
        name: "Moodle",
        id: "moodle",
        configable: {
            rainbow: true,
            dark: true,
        },
    },
    {
        name: "教務システム",
        id: "kyomu",
        configable: {
            rainbow: true,
            dark: true,
        },
    },
    {
        name: "メディアセンター",
        id: "media",
        configable: {
            rainbow: true,
            dark: false,
        },
    },
    {
        name: "MyLibrary",
        id: "mylibrary",
        configable: {
            rainbow: true,
            dark: false,
        },
    },
    {
        name: "SSO",
        id: "sso",
        configable: {
            rainbow: true,
            dark: false,
        },
    },
];
