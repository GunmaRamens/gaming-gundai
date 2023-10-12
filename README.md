## Gunma University Gaming Edition

関東の最も辺境の地にある緑あふれる群馬大学。

せめてウェブサービスだけでも綺羅びやかにしようではないかという、とある学部生のささやかなプロジェクト。

## How to Build and Install

### Build

1. Install volta

2. Clone this repository.

```bash
git clone https://github.com/Hayao0819/gaming-gundai.git
cd gaming-gundai
```

3. Install dependencies.

```bash
volta install node
volta install pnpm
pnpm install
```

4. Build

```bash
pnpm run build
```

5. Load dist directory to Chrome.


## Technology Stack

- Node.js
- pnpm
- TypeScript
- Webpack
- Sass
- ESLint
- Prettier


## Special Thanks

- [appare45/gaming-manaba](https://github.com/appare45/gaming-manaba)

## References

- [入門者/初心者にもわかるwebpack 5の基礎\(Babel編\) \| アールエフェクト](https://reffect.co.jp/html/webpack-babel-loader-setting-for-beginner/)
- [最新版で学ぶwebpack 5入門 \- スタイルシート\(CSS/Sass\)を取り込む方法 \- ICS MEDIA](https://ics.media/entry/17376/)
- [Module Methods \| webpack](https://webpack.js.org/api/module-methods/)
- [Welcome to the Chrome Extension Manifest V3 \- Chrome for Developers](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome拡張機能 manifest\.json Ver\.3の書き方 \- Qiita](https://qiita.com/shiro1212/items/12f0a767494a7b2ab0b3)
- [TypeScript で Chrome 拡張機能を開発する \- RevComm Tech Blog](https://tech.revcomm.co.jp/build-chrome-extension-with-typescript)
- [TypeScript で作るシンプルな Chrome 拡張機能](https://twitter.com/intent/tweet?url=https://zenn.dev/ysmtegsr/articles/4721c15c8f1a63ac39e5&text=TypeScript%20%E3%81%A7%E4%BD%9C%E3%82%8B%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AA%20Chrome%20%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%EF%BD%9Cega4432&hashtags=zenn)
- [TypeScriptで作るイマドキChrome拡張機能開発入門 \- Qiita](https://qiita.com/markey/items/ea9ed18a1a243b39e06e)
- [chibat/chrome\-extension\-typescript\-starter: Chrome Extension TypeScript Starter](https://github.com/chibat/chrome-extension-typescript-starter)