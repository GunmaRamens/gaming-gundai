import { FrontConfigs } from "./config";
import { SwitchItem } from "./SwitchItem";

export function Switches({ className }: { className?: string }) {
    return (
        <>
            {FrontConfigs.map((config) => {
                return <SwitchItem config={config} key={config.id} className={className} />;
            })}
        </>
    );
}
