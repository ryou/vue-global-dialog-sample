# [Vue.js]関数によるダイアログ起動

## 概要

+ エラーダイアログやトースト等を実装する際に、ロートコンポーネントに各パターン並べるのは嫌
+ `window.alert`みたいな感じで関数叩いたら起動するようにしたい

## 実装方法

`Vue.prototype.$dialog`という形で叩いたら`Dialog`コンポーネントをbody直下に生成する関数をプラグインとして作成。

また、「ダイアログが閉じられたら特定の処理を実行したい」という要求は頻繁にあるので、ダイアログが閉じられたらresolveするPromiseを返却する。

## 動作サンプル

[GitHub Pages](https://ryou.github.io/vue-global-dialog-sample/dist/)

## 実ソース

`src`ディレクトリ内の各ソースを見ればわかる。
