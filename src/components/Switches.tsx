import { FrontConfigs } from "../popup/config";
import { SwitchItem } from "./SwitchItem";

export function Switches() {
    return (
        <>
            {FrontConfigs.map((config) => {
                return <SwitchItem config={config} key={config.id} />;
            })}
        </>
    );
}
