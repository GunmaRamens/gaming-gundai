//import { useEffect } from "react";

import { useCallback, useEffect, useState } from "react";
import { Toggle } from "react-daisyui";
import { ComponentColor } from "react-daisyui/dist/types";

import { StorageTool } from "@/class";
import { UnivCommonConfig as UnivConfig } from "@/class/Storage/common";
import { OtherConfig, OtherStorage } from "@/class/Storage/other";
import IsTrue from "@/utils/isTrue";
import { sendMsgToAllTab } from "@/utils/sendMsgToAllTab";

interface ToggleProps {
    storage: StorageTool<UnivConfig>;
    dataKey: keyof UnivConfig;
    color?: ComponentColor;
    readonly?: boolean;
}

export function ToggleWithStorage({ storage, color, dataKey, readonly }: ToggleProps) {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        //console.log("render ToggleWithStorage");
        storage.get(dataKey).then((value) => {
            const istrue = IsTrue(value);
            if (istrue !== undefined) setEnabled(istrue);
        });
    }, []);

    const genericChangeHandle = useCallback(() => {
        if (readonly) return;
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(e.target.checked);
            storage.set({ [dataKey]: e.target.checked });
            sendMsgToAllTab<string>("reload");
        };
    }, []);

    return (
        <p className="flex items-center justify-center">
            <Toggle checked={enabled} onChange={genericChangeHandle()} color={color} readOnly={readonly} />
        </p>
    );
}

interface OtherToggleProps {
    dataKey: keyof OtherConfig;
    color?: ComponentColor;
    readonly?: boolean;
}

export function ToggleWithOtherStorage({ color, dataKey, readonly }: OtherToggleProps) {
    const [enabled, setEnabled] = useState(false);
    const storage = OtherStorage;

    useEffect(() => {
        //console.log("render ToggleWithStorage");
        storage.get(dataKey).then((value) => {
            const istrue = IsTrue(value);
            if (istrue !== undefined) setEnabled(istrue);
        });
    }, []);

    const genericChangeHandle = useCallback(() => {
        if (readonly) return;
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(e.target.checked);
            storage.set({ [dataKey]: e.target.checked });
            sendMsgToAllTab<string>("reload");
        };
    }, []);

    return (
        <p className="flex items-center justify-center">
            <Toggle checked={enabled} onChange={genericChangeHandle()} color={color} readOnly={readonly} />
        </p>
    );
}
