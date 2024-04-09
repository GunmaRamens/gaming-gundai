import { Link } from "react-router-dom";

import Heading from "@/components/Heading";

export default function Wanted() {
    return (
        <>
            <Heading.h1 className=" text-accent">開発者募集</Heading.h1>
            <p>この拡張機能はOSSとしてGitHub上に公開されており、現在Contributerを募集しています。</p>
            <p>
                以下に技術的な概要を掲載しますので、興味のある方はぜひ
                <Link to="/about" className="link link-info">
                    開発者までご連絡
                </Link>
                ください。
            </p>

            <Heading.h2 className="text-accent">概要</Heading.h2>
            <p>群馬大学に所属しており、ウェブ技術に興味のある人やラーメンが好きな人大歓迎です。</p>
            <p>現開発者のお財布と気分次第で、報酬としてラーメンを奢るかもしれません。</p>

            <Heading.h2 className="text-accent">技術</Heading.h2>
            <div className="flex child:mx-4">
                <div>
                    <p>現在使用しているもの</p>
                    <ul>
                        <li>core-js</li>
                        <li>daisy UI with React</li>
                        <li>eslint</li>
                        <li>Node.js</li>
                        <li>pnpm</li>
                        <li>PostCSS</li>
                        <li>Prettier</li>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Stylelint</li>
                        <li>Tailwind CSS</li>
                        <li>TypeScript</li>
                        <li>Volta</li>
                        <li>Webpack</li>
                    </ul>
                </div>
                <div>
                    <p>今後使用していきたいもの</p>
                    <ul>
                        <li>Deno</li>
                        <li>TurboPack</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
