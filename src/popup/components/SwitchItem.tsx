//import { useEffect } from "react";

import { WebSites } from "../../class";
//import { useStorage } from "../../utils/Storage";
import { FrontConfigs } from "../config";

export default function SwitchItem() {
    /*
    useEffect(() => {
        Object.keys(WebSites).forEach((key) => {
            WebSites[key].ReadStorage("enabled").then((value) => {
                console.log(JSON.parse(value));
            });
        });
    });
    */

    return FrontConfigs.map((config) => {
        return (
            <div className="flex w-full justify-center child:text-center my-5" key={config.id}>
                <div className="w-1/2">
                    <input
                        type="checkbox"
                        className=" daisy-toggle daisy-toggle-info"
                        onChange={async (e) => {
                            await WebSites[config.id].WriteStorage("enabled", e.target.checked.toString());
                        }}
                        //defaultChecked={enabled?.[config.id]}
                    />
                </div>
                <div className="w-1/2">
                    <p>{config.name}</p>
                </div>
            </div>
        );
    });
}
