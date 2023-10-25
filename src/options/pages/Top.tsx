import classNames from "classnames";
import { useEffect, useState } from "react";

import { StorageTool } from "../../class/StorageTool";
import Heading from "../../components/Heading";
import { Switches } from "../../components/Switches";
import IsTrue from "../../utils/IsTrue";

export default function Top() {
    return (
        <>
            <ConfigSection name="Websites" desc="有効化するウェブサイトを設定します">
                <div className="flex flex-wrap">
                    <Switches className=" flex-row-reverse items-center child:m-2" />
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

            <ConfigSection name="群馬大学学務課・メディアセンターの方へ">
                <p>このソフトウェアについて問題がある場合は以下のメールアドレスまでご連絡ください。</p>
                <a href="mailto:shun819.mail@gmail.com" className="btn btn-neutral my-5">
                    shun819.mail@gmail.com
                </a>
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
    const [hiddenClass, setHiddenClass] = useState({
        hidden: false,
    });

    const [enabledHidden, setEnabledHidden] = useState(false);

    useEffect(() => {
        const storage = new StorageTool("other");
        storage.GetStorage("show-hidden-option").then((res): void => {
            let v = IsTrue(res);
            if (!res) v = false;
            console.log(v, res);

            if (v) {
                setHiddenClass({ hidden: false });
                storage.UpdateStorage("show-hidden-option", "true");
            } else {
                setHiddenClass({ hidden: true });
                storage.UpdateStorage("show-hidden-option", "false");
            }
        });
    }, []);

    useEffect(() => {
        const storage = new StorageTool("other");
        storage.GetStorage("enabled-hidden").then((res): void => {
            let v = IsTrue(res);
            if (!res) v = false;

            setEnabledHidden(v);
            storage.UpdateStorage("enabled-hidden", v.toString());
        });
    }, []);

    const switchShowOrHidden = (visibility: boolean) => {
        const storage = new StorageTool("other");
        if (visibility) {
            setHiddenClass({ hidden: false });
            storage.UpdateStorage("show-hidden-option", "true");
        } else {
            setHiddenClass({ hidden: true });
            storage.UpdateStorage("show-hidden-option", "false");
        }
    };

    /*
    useKonami(() => {
        switchShowOrHidden(true);
    });
    */

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const storage = new StorageTool("other");
        setEnabledHidden(e.target.checked);
        storage.UpdateStorage("enabled-hidden", e.target.checked.toString());
    };

    return (
        <ConfigSection name="隠し機能を有効化する" className={classNames(hiddenClass)}>
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
    );
}
