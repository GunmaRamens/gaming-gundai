import { DetailedHTMLProps, useEffect, useState } from "react";
import { ComponentColor } from "react-daisyui/dist/types";
import { FaGamepad, FaMoon } from "react-icons/fa";

import { FrontConfig, FrontConfigs } from "../../components/config";
import { SwitchItem } from "../../components/SwitchItem";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    const [showSwitchClass, setShowSwitchClass] = useState(true);

    useEffect(() => {
        try {
            chrome.tabs.query({ active: true, currentWindow: true }, (e) => {
                const url = e[0].url;
                if (url?.startsWith(`chrome-extension://${chrome.runtime.id}/options.html`)) {
                    setShowSwitchClass(false);
                }
            });
        } catch (e) {
            console.error(e);
        }
    }, []);

    const switches = (
        <div className="flex flex-col items-center">
            {FrontConfigs.map((config) => {
                return (
                    <div className="my-2 flex w-full grow flex-col rounded-lg bg-base-300 p-2" key={config.id}>
                        <p className="flex items-center justify-center">{config.name}</p>
                        <Switches config={config} />
                    </div>
                );
            })}
        </div>
    );

    const hiddenMsg = <p className="text-center text-lg">設定画面を表示中はポップアップを利用できません</p>;

    return <main {...props}>{showSwitchClass ? switches : hiddenMsg}</main>;
}

function Switches({ config }: { config: FrontConfig }) {
    return (
        <div className="grow">
            {(
                [
                    {
                        category: "dark",
                        icon: <FaMoon size="1.5rem" />,
                        color: "primary",
                    },
                    {
                        category: "rainbow",
                        icon: <FaGamepad size="1.5rem" />,
                        color: "secondary",
                    },
                ] as {
                    category: "dark" | "rainbow";
                    icon: JSX.Element;
                    color: ComponentColor;
                }[]
            ).map((item) => {
                return (
                    <div className="flex items-center justify-around" key={item.category}>
                        {item.icon}
                        <SwitchItem category={item.category} config={config} color={item.color} />
                    </div>
                );
            })}
        </div>
    );
}
