//import { useEffect } from "react";

import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";

import { WebSites } from "../class";
import IsTrue from "../utils/isTrue";
import { FrontConfig } from "./config";
import { Category } from "./type";

export function SwitchItem({ config, className, category }: { config: FrontConfig; className?: string; category: Category }) {
    const [enabled, setEnabled] = useState(false);

    console.log(`Render SwitchItem with ${config.name}`);
    useEffect(() => {
        WebSites[config.id].storage.get(category).then((value) => {
            setEnabled(IsTrue(value));
        });
    }, []);

    const genericChangeHandle = useCallback(() => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(e.target.checked);
            WebSites[config.id].storage.set(category, e.target.checked.toString());
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
