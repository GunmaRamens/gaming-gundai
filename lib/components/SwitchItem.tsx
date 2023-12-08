//import { useEffect } from "react";

import { ComponentColor } from "react-daisyui/dist/types";

import { CommonStorage, UnivCommonConfig } from "@/class/Storage/common";

import { ToggleWithStorage } from "./ToggleWithStorage";
import { Category } from "./type";

export function SwitchItem({ category, color, readonly }: { category: Category; color?: ComponentColor; readonly?: boolean }) {
    return <ToggleWithStorage<UnivCommonConfig> storage={CommonStorage} dataKey={category} color={color} readonly={readonly} />;
}
