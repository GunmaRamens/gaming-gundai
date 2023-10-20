import { DetailedHTMLProps } from "react";

//import { WebSites } from "../../class";
import { FrontConfigs } from "../config";
import { SwitchItem } from "./SwitchItem";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    return (
        <main {...props}>
            <div>
                {FrontConfigs.map((config) => {
                    return <SwitchItem config={config} key={config.id} />;
                })}
            </div>
        </main>
    );
}
