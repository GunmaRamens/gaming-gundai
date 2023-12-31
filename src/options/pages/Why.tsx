import classNames from "classnames";

import Heading from "../../../lib/components/Heading";

export default function Why() {
    const paragraphStyle = classNames("indent-4", "leading-10");

    return (
        <>
            <Heading.h2>なぜこんなものを作ったのか</Heading.h2>
            <p className={paragraphStyle}>
                この拡張機能は<a href="https://github.com/appare45/gaming-manaba">gaming-manaba</a>
                という筑波大学の学習支援システムのゲーミング化を行う拡張機能に由来しています。
                直接的なきっかけはたったこれだけですが、根本的な理由に私のスキルの向上と個人的な思想の表明があります。
            </p>
            <Heading.h2>技術的観点</Heading.h2>
            <p className={paragraphStyle}>
                この拡張機能の開発にはTypeScriptやReactを用いています。今までこれらをNext.js上でしか使っていなかったので、WebPackを一から自力で設定して構築してみようとしました。
                フロントエンドのこういった技術は歴史的背景も相まってすごい複雑ですね…
            </p>

            <Heading.h2>個人的思想</Heading.h2>
            <p className={paragraphStyle}>
                突然ですが、私は先日に新しいPCを自作しました。初めて簡易水冷に挑戦したのですが、色々気づいたことがあります。
                というのも、最近のPCパーツはハイエンドになればなるほどゲーミングを銘打ったもの以外がなくなっていきます。
                個人的には開発とかクリエイターとか、ゲーミング用途以外でハイスペックを要求するシチュエーションは非常に多いと思うんですがね。
                どういうわけは世間のデバイスメーカーはゲーミング市場に注力しているようです。そして世間のゲーミングの印象は光ることのようです。
                1677万色に光って何がうれしいんですかね。最近は冷蔵庫とかヘッドホンまで光り始めているのが腹立たしい。
                特に簡易水冷クーラーにおいてはその傾向が非常に顕著で、光らないクーラーを製造しているのはほんの数社しかありません。
                設定でLEDをオフにすればいいとかの話ではなく、そもそも光らずにかっこいいデザインというものがほぼありません。
            </p>
            <p className={paragraphStyle}>
                私はあまりAppleは好きではないのですが、iPhone5の頃のAppleのデザインは大好きなんです。
                （これは今でも言えますが）Appleはゲーミングを銘打ってバカみたいに虹色に光らせたことがありますか？？
                Appleの設計思想そのものは非常に好きではないので、あまりApple製品は持っていない上に、最近のAppleのデザインもあまり好きではないのですが、それでもまだゲーミングを名乗る程落ちぶれているとも思えません。
                (と言いつつもApple Siliconの魅力に敗北してMacBook Proを愛用しています。) 逆にAppleが仮にMacBook Pro Gaming
                なんて言って虹色に光るキーボードを搭載したようなものを作ったら、それこそ世の中はおしまいです。みんなアナログで仕事をするべきです。
                少し話をそらして私が嫌いなAppleの設計思想の話をしましょうかね。AppleはUnix系オペレーティングシステムを用いていながら（ある商業Unix的な意味では用いているからこそなのかもしれませんが）、
                Linuxにあるような自由な選択という思想と対局の位置にいます。
                これはおそらく自由度を制限することでメーカーの意図した、一貫したユーザーエクスペリエンスを提供するためなのでしょうが、その設計思想は宗教そのものとしか考えられません。
                あまりデジタルデバイスに慣れていない人向けに製品を作っているのなら設定項目を減らしてシンプルさを追及するのもデザインの手法だとは思いますが、現在のAppleがそれを目指しているとも思えません。
                iOSやiPadOSの設定アプリはあらゆる項目が「一般」というわけのわからないカテゴリに属している上に、価格設定は非常に強気です。
                また、Apple製品では外部サービスとの連携の融通が恐ろしいほど効きません。Androidデバイスを仮にUSB接続をしても中のファイルシステムを覗くことはデフォルトではできません。
                これはおそらく、Appleがユーザーに対して「あなたは自分のデバイスの中身を知る必要はない」という完璧人間な素晴らしい考えを持っているからなのではないかとさえ思ってしまいます。
            </p>
            <p className={paragraphStyle}>
                だらだらと嫌いなものについてのヘイトを吐き出していましたが、言いたいのは「無意味に単純化しすぎる」ことも「センスもなしに煌びやかにする」ことの双方が完全に邪悪であるということです。
                そして、この拡張機能は（ウェブ業界を独占している）GoogleChromeでのみ動作し、ゲーミングという素晴らしいデザインを群馬大学のウェブサイトに提供しています。
                ゲーミングという謎の虹色に光らせる文化は、ぶっちゃけセンスのない陰キャがただ光らせればかっこいいだろうというだけの理由で流行ったとしか思えません。
                が、こんなことをSNS上に書き込んでは速攻で炎上するので、ここで吐き出しておきます。
            </p>
            <p className={paragraphStyle}>
                ここまで世間のゲーミングデバイスとAppleの双方に対して自分の意見をぶつけてきましたが、最も文句を言いたいのは現代の市場であるとしか言いようがありません。
                資本主義においては資本が正義であり、企業が資本を生み出す原点は需要です。こんなゲーミングが世間に蔓延っているのも消費者の多くがそれを望んだからに他なりません。
                つまり自作パーツのデザインの単調化と、ゲーミングとかいうデザインとも呼べない何かの流行の原因の一端は消費者にあると言っても過言ではありません。
            </p>
            <p className={paragraphStyle}>
                現在のWindowsに代表されるように一度そのもので市場が定着してしまうと、そこから改革を起こすのは難しくなってしまいます。
                （Windowsに対するヘイトはおまけで語ります。）
                デザインというのは比較的流行り廃りが激しいものであり、Googleのマテリアルデザインのように同じ思想のデザインの中でもバリエーションが生まれるものです。
                が、世間のゲーミングデバイスを見ているとどれも1688万色でグラデーションしたり波打ったりしているようにしか見えません。
                （ユーザーがカスタマイズ可能とはいえ）デフォルトで寒色や暖色などのテーマが入っているデバイスもそう多くはないでしょう。
                自作PCのパーツや周辺機器を設計するデザイナーはみんなチー牛ゲーマーなんでしょうか？もし心の底から1677万色ゲーミングデバイスが大好きな人間がいたら、,
                <a href="https://akiba-pc.watch.impress.co.jp/docs/sp/1302977.html" target="_blank" rel="noreferrer">
                    このような
                </a>
                最高にかっこいいデザインを是非紹介してあげたい。
            </p>
            <p className={paragraphStyle}>
                そんなわけで、この拡張機能はゲーミングデバイスを嫌っている私が、ゲーミングを銘打って虹色に光らせることが如何に素晴らしく馬鹿らしいかを証明するために作りました。
            </p>
            <Heading.h2>おまけ -Windowsのシェアに対する市場の責任-</Heading.h2>
            <p className={paragraphStyle}>
                私が最初に触ったWindowsはXPで、その後に歴史的興味の元でWindows 2000やMe、95などを少し触りました。
                当時の歴史から見ると、Windowsの普及はDOSの普及の引き継ぎであったと認識しています。MS-DOSはCP/M-86との争いに勝ち、IBMがMS-DOSを採用したことで普及しました。
                まだLinuxの発達が十分ではなく、Unixも商業としてフレームワーク等で動作するOSだったと考えると致し方ないのかもしれません。
                その後日本国内ではPC-98が爆発的な人気を誇ったが、それもPC/AT互換機の普及によって終焉を迎えました。個人的にはその終焉は日本のバブル崩壊によって投資が行われなくなったことに起因していると考えていますが、海外でPC/AT互換機が流行し淘汰された経緯はあまり詳しく理解できていません。（この頃の事情を詳しく知っている人がいたら連絡をください。）
                この段階でPC/AT互換機のスタンダードOSとして確固たる地位を築き上げました。PC/AT互換ではないPCで結局現代まで生き残ったのはAppleのMackintoshだけだと考えています。(PC-98以降で独自路線を征こうとした企業はあったのだろうか)
                結局現代ではWindowsかOS
                X（macOS）という状況になってしまいました。私はもう少し選択肢があってもいいのではないかと思います。
            </p>
            <p className={paragraphStyle}>
                もちろん多くの人間にLinuxを使えと強要する気は一切ありません。Linuxもハードウェアのサポートが完全とは言えず、私の最新機でも一部のMBの機能は正常に動作しないのが現状です。
                Appleが今後Apple
                Silicone上でまともにmacOS以外のOSが動作することを保証するとは全く想定できないのですが、AsahiLinuxのようなものの登場は非常に喜ばしいですね。
                Windowsはすでに多くの技術的負債を抱えており、解消にはWin32を捨て去った全く別のOSが必要だと考えています。市場の消費者の一員として少しでもこの2社によるオペレーティングシステムの寡占状態の解消のために何か行動を起こすべきでしょう。
                まずはコーディング環境として、Windows Subsystem for
                Linuxを使うことをおすすめします。CRLFやShiftJISなどのWindowsの遺産を捨て去るべきです。
            </p>
            <p className={paragraphStyle}>
                私自身はデジタルゆとり世代なので、かつてのメモリが数MBしかなかった時代を知らず、富豪のようにメモリを食い尽くすような頭の悪いコードを書いていますが、かつてアセンブリのみでコードをかいてた人たちは本当に尊敬しています。
                けれども技術の進化が進んでいる今、その頃の痕跡を残す必要は全くありません。市場の流行や世間に流されることなく、合理的な選択を私は願っています。
            </p>
        </>
    );
}
