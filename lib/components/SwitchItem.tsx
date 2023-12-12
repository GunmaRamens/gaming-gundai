//import { useEffect } from "react";

import { ComponentColor } from "react-daisyui/dist/types";

import { StorageTool } from "@/class";
import { UnivCommonConfig } from "@/class/Storage/common";
import { WebsiteConfig } from "@/data/websites";

import { ToggleWithStorage } from "./ToggleWithStorage";

interface SwitchItemProps {
    config: WebsiteConfig;
    category: keyof UnivCommonConfig;
    color?: ComponentColor;
    readonly?: boolean;
}
export function SwitchItem({ category, config, color, readonly }: SwitchItemProps) {
    const site = config.class;
    if (!site) return null;
    const commonStorage: StorageTool<UnivCommonConfig> = site.getCommonStorage();

    return <ToggleWithStorage<UnivCommonConfig> storage={commonStorage} dataKey={category} color={color} readonly={readonly} />;
}
