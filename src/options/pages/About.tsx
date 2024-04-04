import Heading from "../../../lib/components/Heading";

export default function About() {
    return (
        <>
            <Heading.h1>About</Heading.h1>
            <Heading.h2>この拡張機能について</Heading.h2>
            <p>筆者が人生で初めて開発した拡張機能です。TypeScriptとReactを用いて構築されています。</p>
            <p>ソースコードはMITライセンスのもとで公開されています。</p>
            <Heading.h2>筆者について</Heading.h2>
            <p>ゲーミングうんたらと言って虹色に光るのが大嫌いな、群馬大学情報学部所属の伊藤 駿です。</p>
            <p>普段はTwitterでパソコンをかたかた弄って遊んでいます。もし大学内でお会いした際には是非仲良くしてください。</p>
            <Heading.h2>筆者の連絡先</Heading.h2>
            <ul>
                <li>
                    <a href="https://twitter.com/Hayao0819" className="link link-info">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/Hayao0819" className="link link-info">
                        Instagram
                    </a>
                </li>
            </ul>
        </>
    );
}
