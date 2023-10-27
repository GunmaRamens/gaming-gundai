import { FrontConfigs } from "./config";
import { SwitchItem } from "./SwitchItem";
import { Category } from "./type";

export function Switches({ className, category }: { className?: string; category: Category }) {
    return (
        <>
            {FrontConfigs.map((config) => {
                return <SwitchItem category={category} config={config} key={config.id} className={className} />;
            })}
        </>
    );
}
