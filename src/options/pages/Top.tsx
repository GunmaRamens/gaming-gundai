import classNames from "classnames";

import Heading from "../../components/Heading";
import { Switches } from "../../components/Switches";

export default function Top() {
    return (
        <>
            <ConfigSection name="Websites" desc="有効化するウェブサイトを設定します">
                <div className="flex">
                    <Switches className=" flex-row-reverse child:m-2" />
                </div>
            </ConfigSection>

            <ConfigSection name="Quick Switch" desc="有効化するとアイコンのクリックでオンオフを一括で設定します">
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

function ConfigSection({ children, name, desc }: { children?: React.ReactNode; name: string; desc?: string }) {
    return (
        <>
            <Heading.h2>{name}</Heading.h2>
            {desc ? <p>{desc}</p> : null}
            {children ? children : null}
        </>
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
