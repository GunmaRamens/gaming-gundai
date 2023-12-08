//import { useEffect } from "react";

import { useCallback, useEffect, useState } from "react";
import { Toggle } from "react-daisyui";
import { ComponentColor } from "react-daisyui/dist/types";

import { StorageTool } from "@/class";
import { OtherConfig, OtherStorage } from "@/class/Storage/other";
import IsTrue from "@/utils/isTrue";
import { sendMsgToAllTab } from "@/utils/sendMsgToAllTab";

export type BooleanKeyOf<T> = {
    [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];

interface ToggleProps<T> {
    storage: StorageTool<T>;
    dataKey: BooleanKeyOf<T>;
    color?: ComponentColor;
    readonly?: boolean;
}

export function ToggleWithStorage<T>({ storage, color, dataKey, readonly }: ToggleProps<T>) {
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
            storage.getAll().then((data) => {
                storage.set({ ...data, [dataKey]: e.target.checked }).then(() => {
                    sendMsgToAllTab<string>("reload");
                });
            });
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
