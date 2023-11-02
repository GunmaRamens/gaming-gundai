//import { useEffect } from "react";

import { ComponentColor } from "react-daisyui/dist/types";

import { WebsiteConfig } from "../data/websites";
import { ToggleWithStorage } from "./ToggleWithStorage";
import { Category } from "./type";

export function SwitchItem({
    config,
    category,
    color,
    readonly,
}: {
    config: WebsiteConfig;
    category: Category;
    color?: ComponentColor;
    readonly?: boolean;
}) {
    return <ToggleWithStorage section={config.id} dataKey={category} color={color} readonly={readonly} />;
}
