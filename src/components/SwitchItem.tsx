//import { useEffect } from "react";

import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";

import { WebSites } from "../class";
import { FrontConfig } from "../popup/config";
import IsTrue from "../utils/isTrue";

export function SwitchItem({ config, className }: { config: FrontConfig; className?: string }) {
    const [enabled, setEnabled] = useState(false);

    console.log(`Render SwitchItem with ${config.name}`);
    useEffect(() => {
        WebSites[config.id].storage.get("enabled").then((value) => {
            setEnabled(IsTrue(value));
        });
    }, []);

    const genericChangeHandle = useCallback(() => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(e.target.checked);
            WebSites[config.id].storage.set("enabled", e.target.checked.toString());
            chrome.runtime.sendMessage("reload");
        };
    }, []);

    return (
        <div className={classNames(className, "my-5 flex")}>
            <div>
                <p className="flex items-center justify-center">
                    <input type="checkbox" className="toggle toggle-info" onChange={genericChangeHandle()} checked={enabled} />
                </p>
            </div>
            <div>
                <p>{config.name}</p>
            </div>
        </div>
    );
}
