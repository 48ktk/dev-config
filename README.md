# config command(2021/4/10)
参考：https://maku.blog/p/m4dmt3a/
- npm init -y
- npm install --save-dev typescript
- npm install --save react react-dom
- npm install --save-dev @types/react @types/react-dom
- npm install --save-dev webpack webpack-cli ts-loader html-webpack-plugin
  - 開発時に必要なものはdevDependenciesに、本番環境でも必要なものはdependenciesに
  - 
参考：https://ics.media/entry/16329/
- npm i -D webpack-dev-server

## install css など (2021/5/16)
- npm install --save-dev styled-components @types/styled-components babel-plugin-styled-components
- package, webpack, babelの設定も変更
参考：https://dev-yakuza.posstree.com/react/styled-components/
- npm i -D typescript-styled-plugin
参考：https://akabeko.me/blog/2020/11/styled-components/
- npm install --save-dev cross-env
参考：https://qiita.com/riversun/items/d45b26f4a7aad6e51b69

## install jest
https://tech.willgate.co.jp/entry/2019/12/12/130000
https://qiita.com/Mr_ozin/items/ff9034e35f67580a7226

今回はreact-testing-libraryを採用
基本的な使い方：https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f
https://qiita.com/nnishimura/items/521af77125d2b7ad49c5

TODO:eslint
https://blog.ojisan.io/prettier-eslint-cli
https://www.tam-tam.co.jp/tipsnote/javascript/post17695.html
https://zenn.dev/hellorusk/articles/ceb6fee3da4991
https://zenn.dev/tatsurom/articles/ac7ca21069488198627c

## トランスパイラはts-loaderのほうがいい気がしてきた
https://qiita.com/jagaapple/items/ce0da04be28c35dc7d4f

## 詰まったところ
webpackのmoduleのincludeに間違った指定をしていたからか、tsxのloaderが働かなかった