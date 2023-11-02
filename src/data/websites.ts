export interface WebsiteConfig {
    name: string;
    id: string;
    configable: {
        rainbow: boolean;
        dark: boolean;
    };
}

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
            dark: false,
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
