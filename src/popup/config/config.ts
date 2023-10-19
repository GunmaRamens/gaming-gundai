export interface FrontConfig {
    name: string;
    key: string;
    value: boolean;
}

export const FrontConfigs: FrontConfig[] = [
    {
        name: "Moodle",

        key: "moodle",
        value: true,
    },
    {
        name: "教務システム",

        key: "kyoumu",
        value: true,
    },
];
