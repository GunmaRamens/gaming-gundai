import { DetailedHTMLProps, useEffect, useState } from "react";

import { Switches } from "../../components/Switches";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    const [showSwitchClass, setShowSwitchClass] = useState(true);

    useEffect(
        () =>
            chrome.tabs.query({ active: true, currentWindow: true }, (e) => {
                const url = e[0].url;
                if (url?.startsWith(`chrome-extension://${chrome.runtime.id}/options.html`)) {
                    setShowSwitchClass(false);
                }
            }),
        [],
    );

    const switches = <Switches className="w-full justify-center child:w-1/2 child:text-center" />;
    const hiddenMsg = <p className="text-center text-lg">設定画面を表示中はポップアップを利用できません</p>;

    return (
        <>
            <main {...props}>{showSwitchClass ? switches : hiddenMsg}</main>
        </>
    );
}
