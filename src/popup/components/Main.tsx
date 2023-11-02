import { DetailedHTMLProps, useEffect, useState } from "react";
import { Tooltip } from "react-daisyui";
import { ComponentColor } from "react-daisyui/dist/types";
import { FaGamepad, FaMoon } from "react-icons/fa";

import { SwitchItem } from "../../components/SwitchItem";
import { WebsiteConfig, Websites } from "../../data/websites";

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
        <div className="flex flex-wrap">
            {Websites.map((config) => {
                return (
                    <div className="m-2 flex w-36 min-w-fit flex-col rounded-lg bg-base-300 p-2" key={config.id}>
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

function Switches({ config }: { config: WebsiteConfig }) {
    return (
        <div className="grow">
            {(
                [
                    {
                        category: "dark",
                        icon: <FaMoon size="1.5rem" />,
                        color: "primary",
                        configable: config.configable.dark,
                        tipText: "Dark Mode",
                    },
                    {
                        category: "rainbow",
                        icon: <FaGamepad size="1.5rem" />,
                        color: "secondary",
                        configable: config.configable.rainbow,
                        tipText: "Gaming Mode",
                    },
                ] as {
                    category: "dark" | "rainbow";
                    icon: JSX.Element;
                    color: ComponentColor;
                    configable: boolean;
                    tipText: string;
                }[]
            ).map((item) => {
                return (
                    <Tooltip message={item.tipText + (!item.configable ? " (disabled)" : "")} key={item.category}>
                        <div className="flex items-center justify-around">
                            {item.icon}
                            <SwitchItem category={item.category} config={config} color={item.color} readonly={!item.configable} />
                        </div>
                    </Tooltip>
                );
            })}
        </div>
    );
}
