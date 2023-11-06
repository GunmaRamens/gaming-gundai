import classNames from "classnames";
import { useEffect, useState } from "react";
import { Tooltip } from "react-daisyui";
import { FaGamepad, FaMoon } from "react-icons/fa";

import StorageTool from "@/class/StorageTool";
import CopyTootrip from "@/components/CopyBtn";
import Heading from "@/components/Heading";
import { SwitchItem } from "@/components/SwitchItem";
import { ToggleWithStorage } from "@/components/ToggleWithStorage";
import { Websites } from "@/data/websites";
import IsTrue from "@/utils/isTrue";

export default function Top() {
    return (
        <>
            <ConfigSection name="Websites" desc="それぞれのウェブサイトで有効化する機能を設定できます">
                <div className="flex flex-wrap items-center">
                    {Websites.map((site) => {
                        return (
                            <div className="chiid:p-1 mx-4 my-2 flex w-60 justify-center child:grow" key={site.id}>
                                <p className="my-0 flex w-1/2 items-center justify-center rounded-l-lg bg-base-300 text-center">
                                    {site.name}
                                </p>
                                {/* Todo: ここらへんをオブジェクトでいい感じにループする */}
                                <div className="flex flex-col justify-center rounded-r-lg bg-neutral-focus child:m-2">
                                    <Tooltip message={"Dark Mode" + (site.configable.dark ? " (EXPERIMENTAL)" : " (disabled)")}>
                                        <div className="flex items-center justify-center child:px-1">
                                            <FaMoon className="grow" size="20px" />
                                            <SwitchItem
                                                config={site}
                                                category="dark"
                                                color="primary"
                                                readonly={!site.configable.dark}
                                            />
                                        </div>
                                    </Tooltip>
                                    <Tooltip message={"Gaming Mode" + (!site.configable.rainbow ? " (disabled)" : "")}>
                                        <div className="flex items-center justify-center child:px-1">
                                            <FaGamepad className="grow" size="20px" />
                                            <SwitchItem
                                                config={site}
                                                category="rainbow"
                                                color="secondary"
                                                readonly={!site.configable.rainbow}
                                            />
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </ConfigSection>

            <HiddenConfigSection />

            <ConfigSection
                name="Quick Switch"
                desc="有効化するとアイコンのクリックでオンオフを一括で設定します"
                className="hidden"
            >
                <QuickSwitch className="child:m-2" />
            </ConfigSection>

            <ConfigSection name="SSO">
                <div className="flex">
                    <p>二段階認証コードの自動送信</p>
                    <ToggleWithStorage section="sso" dataKey="auto-2fa" />
                </div>
            </ConfigSection>

            <ConfigSection name="群馬大学学務課・メディアセンターの方へ">
                <p>このソフトウェアについて問題がある場合は以下のメールアドレスまでご連絡ください。</p>
                <CopyTootrip copyText="shun819.mail@gmail.com" className="my-5">
                    <button className="btn bg-base-300">shun819.mail@gmail.com</button>
                </CopyTootrip>
            </ConfigSection>
        </>
    );
}

function ConfigSection({
    children,
    name,
    desc,
    className,
}: {
    children?: React.ReactNode;
    name: string;
    desc?: string;
    className?: string;
}) {
    return (
        <div className={className}>
            <Heading.h2>{name}</Heading.h2>
            {desc ? <p>{desc}</p> : null}
            {children ? children : null}
        </div>
    );
}

function QuickSwitch({ className }: { className?: string }) {
    return (
        <div className={classNames(className, "my-5 flex")}>
            <p>
                <input type="checkbox" className="toggle toggle-info" />
            </p>
            <p>Quick Switch</p>
        </div>
    );
}

// ここらへんの処理をあとでまとめて書き直す
function HiddenConfigSection() {
    const [showHiddenOption, setShowHiddenOption] = useState(false);

    const [enabledHidden, setEnabledHidden] = useState(false);

    const switchShowOrHidden = (visibility: boolean) => {
        const storage = new StorageTool("other");
        if (visibility) {
            setShowHiddenOption(true);
            storage.set("show-hidden-option", "true");
        } else {
            setShowHiddenOption(false);
            storage.set("show-hidden-option", "false");
        }
    };

    useEffect(() => {
        const storage = new StorageTool("other");
        storage.get("show-hidden-option").then((res): void => {
            let v = IsTrue(res);
            if (v == undefined) v = false;
            switchShowOrHidden(v);
        });
    }, []);

    useEffect(() => {
        const storage = new StorageTool("other");
        storage.get("enabled-hidden").then((res): void => {
            let v = IsTrue(res);
            if (v == undefined) v = false;

            setEnabledHidden(v);
            storage.set("enabled-hidden", v.toString());
        });
    }, []);

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const storage = new StorageTool("other");
        setEnabledHidden(e.target.checked);
        storage.set("enabled-hidden", e.target.checked.toString());
    };

    return showHiddenOption ? (
        <ConfigSection name="隠し機能を有効化する">
            <div className="my-5 flex items-center child:m-2">
                <p>隠し機能</p>
                <p className="flex items-center">
                    <input type="checkbox" className="toggle toggle-info" checked={enabledHidden} onChange={handleClick} />
                </p>
                <button className="btn" onClick={() => switchShowOrHidden(false)}>
                    この設定を隠す
                </button>
            </div>
        </ConfigSection>
    ) : null;
}
