import classNames from "classnames";

import Heading from "../../components/Heading";
import { Switches } from "../../components/Switches";
import Layout from "../components/Layout";

export default function Page() {
    return (
        <Layout>
            <ConfigSection name="Websites" desc="有効化するウェブサイトを設定します">
                <Switches className="child:m-2" />
            </ConfigSection>

            <ConfigSection name="Quick Switch" desc="有効化するとアイコンのクリックでオンオフを一括で設定します">
                <QuickSwitch className="child:m-2" />
            </ConfigSection>
        </Layout>
    );
}

function ConfigSection({ children, name, desc }: { children: React.ReactNode; name: string; desc: string }) {
    return (
        <>
            <Heading.h2>{name}</Heading.h2>
            <p>{desc}</p>
            {children}
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
