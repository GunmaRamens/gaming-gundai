//import { useEffect } from "react";

import classNames from "classnames";
import { useCallback, useState } from "react";

import { WebSites } from "../class";
import { FrontConfig } from "../popup/config";
import IsTrue from "../utils/IsTrue";

export function SwitchItem({ config, className }: { config: FrontConfig; className?: string }) {
    const [enabled, setEnabled] = useState(false);

    console.log(`Render SwitchItem with ${config.name}`);
    WebSites[config.id].ReadStorage("enabled").then((value) => {
        setEnabled(IsTrue(value));
    });

    const genericChangeHandle = useCallback(() => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(e.target.checked);
            WebSites[config.id].WriteStorage("enabled", e.target.checked.toString());
            chrome.runtime.sendMessage("reload");
        };
    }, []);

    return (
        //<div className="my-5 flex w-full justify-center child:text-center">
        <div className={classNames(className, "my-5 flex")}>
            <div>
                <input type="checkbox" className="toggle toggle-info" onChange={genericChangeHandle()} checked={enabled} />
            </div>
            <div>
                <p>{config.name}</p>
            </div>
        </div>
    );
}
