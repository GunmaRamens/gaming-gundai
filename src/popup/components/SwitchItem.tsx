//import { useEffect } from "react";

import { useEffect, useState } from "react";

import { WebSites } from "../../class";
import IsTrue from "../../utils/IsTrue";
import { FrontConfigs } from "../config";

export default function SwitchItem() {
    const [enabled, setEnabled] = useState({} as { [key: string]: string });

    useEffect(() => {
        console.log("Render SwitchItem");
        Object.keys(WebSites).forEach(async (key) => {
            const value = (await WebSites[key].ReadStorage("enabled")) as string;
            setEnabled((enabled) => ({ ...enabled, [key]: value }));
        });
    });

    return FrontConfigs.map((config) => {
        return (
            <div className="flex w-full justify-center child:text-center my-5" key={config.id}>
                <div className="w-1/2">
                    <input
                        type="checkbox"
                        className=" daisy-toggle daisy-toggle-info"
                        onChange={(e) => {
                            setEnabled((enabled) => ({ ...enabled, [config.id]: e.target.checked.toString() }));
                            WebSites[config.id].WriteStorage("enabled", e.target.checked.toString());
                            chrome.runtime.sendMessage("reload");
                        }}
                        checked={(function () {
                            return IsTrue(enabled[config.id]);
                        })()}
                    />
                </div>
                <div className="w-1/2">
                    <p>{config.name}</p>
                </div>
            </div>
        );
    });
}
