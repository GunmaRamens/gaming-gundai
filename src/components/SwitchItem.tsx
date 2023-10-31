//import { useEffect } from "react";

import { ComponentColor } from "react-daisyui/dist/types";

import { FrontConfig } from "./config";
import { ToggleWithStorage } from "./ToggleWithStorage";
import { Category } from "./type";

/*
export function OldSwitchItem({ config, category, color }: { config: FrontConfig; category: Category; color?: ComponentColor }) {
    const [enabled, setEnabled] = useState(false);

    console.log(`Render SwitchItem with ${config.name}`);
    useEffect(() => {
        WebSites[config.id].storage.get(category).then((value) => {
            const istrue = IsTrue(value);
            if (istrue !== undefined) setEnabled(istrue);
        });
    }, []);

    const genericChangeHandle = useCallback(() => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(e.target.checked);
            WebSites[config.id].storage.set(category, e.target.checked.toString());
            sendMsgToAllTab<string>("reload");
        };
    }, []);

    return (
        <p className="flex items-center justify-center">

            <Toggle checked={enabled} onChange={genericChangeHandle()} color={color} />
        </p>
    );
}
*/

export function SwitchItem({ config, category, color }: { config: FrontConfig; category: Category; color?: ComponentColor }) {
    return <ToggleWithStorage siteId={config.id} key={category} color={color} />;
}
