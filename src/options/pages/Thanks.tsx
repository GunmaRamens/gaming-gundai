import { Link } from "react-router-dom";

import Heading from "../../../lib/components/Heading";

export default function Thanks() {
    return (
        <>
            <Heading.h1>Thanks for installation </Heading.h1>
            <p>
                インストールしていただきありがとうございます。<span className="text-sm">(落単ギリギリの英語能力)</span>
            </p>
            <p>この拡張機能はとある学部生が勝手に作ったものです。大学からの承認等は一切受けていません。</p>
            <p>もし大学側に注意等された場合はすぐに公開を停止します。</p>
            <p>また、この拡張機能を利用したことで生じたいかなる損害についても責任を負いません。</p>

            <Heading.h2>設定</Heading.h2>
            <p>デフォルトではすべての設定が無効化されています。</p>
            <p>
                <Link to="/" className="link link-info">
                    設定画面
                </Link>
                から設定を行えます。
            </p>

            <Heading.h2>開発者募集</Heading.h2>
            <p>この拡張機能の開発を手伝ってくれるボランティアを募集しています。</p>
            <p>使用技術はTypeScriptとReact、TailwindCSSです。</p>
            <p>
                興味のある方は
                <Link to="/wanted" className="link link-info">
                    こちら
                </Link>
                をご覧ください。
            </p>
        </>
    );
}
