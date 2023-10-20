//import { useEffect } from "react";

import { useCallback, useState } from "react";

import { WebSites } from "../../class";
import IsTrue from "../../utils/IsTrue";
import { FrontConfig, FrontConfigs } from "../config";

export default function SwitchItem() {
    const [enabled, setEnabled] = useState({} as { [key: string]: string });

    console.log("Render SwitchItem");
    Object.keys(WebSites).forEach(async (key) => {
        const value = (await WebSites[key].ReadStorage("enabled")) as string;
        setEnabled((enabled) => ({ ...enabled, [key]: value }));
    });

    const genericChangeHandle = useCallback((config: FrontConfig) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled((enabled) => ({ ...enabled, [config.id]: e.target.checked.toString() }));
            WebSites[config.id].WriteStorage("enabled", e.target.checked.toString());
            chrome.runtime.sendMessage("reload");
        };
    }, []);

    return FrontConfigs.map((config) => {
        return (
            <div className="flex w-full justify-center child:text-center my-5" key={config.id}>
                <div className="w-1/2">
                    <input
                        type="checkbox"
                        className=" daisy-toggle daisy-toggle-info"
                        onChange={genericChangeHandle(config)}
                        checked={IsTrue(enabled[config.id])}
                    />
                </div>
                <div className="w-1/2">
                    <p>{config.name}</p>
                </div>
            </div>
        );
    });
}
