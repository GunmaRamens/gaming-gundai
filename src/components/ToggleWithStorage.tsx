//import { useEffect } from "react";

import { useCallback, useEffect, useState } from "react";
import { Toggle } from "react-daisyui";
import { ComponentColor } from "react-daisyui/dist/types";

import StorageTool, { StorageIds, StorageKeys } from "@/class/StorageTool";
import IsTrue from "@/utils/isTrue";
import { sendMsgToAllTab } from "@/utils/sendMsgToAllTab";

interface ToggleProps {
    dataId: StorageIds;
    dataKey: StorageKeys;
    color?: ComponentColor;
    readonly?: boolean;
}

export function ToggleWithStorage({ dataId, color, dataKey, readonly }: ToggleProps) {
    const [enabled, setEnabled] = useState(false);
    const storage = new StorageTool(dataId);

    useEffect(() => {
        storage.get(dataKey).then((value) => {
            const istrue = IsTrue(value);
            if (istrue !== undefined) setEnabled(istrue);
        });
    }, []);

    const genericChangeHandle = useCallback(() => {
        if (readonly) return;
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(e.target.checked);
            storage.set(dataKey, e.target.checked.toString());
            sendMsgToAllTab<string>("reload");
        };
    }, []);

    return (
        <p className="flex items-center justify-center">
            <Toggle checked={enabled} onChange={genericChangeHandle()} color={color} readOnly={readonly} />
        </p>
    );
}
