//import { useEffect } from "react";

import { useCallback, useEffect, useState } from "react";
import { Toggle } from "react-daisyui";
import { ComponentColor } from "react-daisyui/dist/types";

import { WebSites } from "@/class";
import { StorageKeys } from "@/class/StorageTool";
import IsTrue from "@/utils/isTrue";
import { sendMsgToAllTab } from "@/utils/sendMsgToAllTab";

interface ToggleProps {
    section: string;
    key: StorageKeys;
    color?: ComponentColor;
}

export function ToggleWithStorage({ section, color, key }: ToggleProps) {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        WebSites[section].storage.get(key).then((value) => {
            const istrue = IsTrue(value);
            if (istrue !== undefined) setEnabled(istrue);
        });
    }, []);

    const genericChangeHandle = useCallback(() => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(e.target.checked);
            WebSites[section].storage.set(key, e.target.checked.toString());
            sendMsgToAllTab<string>("reload");
        };
    }, []);

    return (
        <p className="flex items-center justify-center">
            <Toggle checked={enabled} onChange={genericChangeHandle()} color={color} />
        </p>
    );
}
