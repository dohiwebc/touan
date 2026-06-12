# 古民家茶房 灯庵 - TOUAN

> 古い家に、甘い時間を。

山あいの静かな場所に佇む、架空の古民家和カフェ「**古民家茶房 灯庵 - TOUAN -**」の公式Webサイトです。  
ポートフォリオ掲載用の架空案件として、フレームワークを用いず HTML / CSS / JavaScript のみで制作しています。

---

## ページ構成

| ファイル | 役割 |
| :-- | :-- |
| `index.html` | トップページ。ヒーロー（縦書きコピー）、灯庵について、おすすめ甘味、庭の魅力、空間、四季の甘味、来店案内 |
| `menu.html` | お品書きページ。甘味 / 抹茶・お飲み物 / 今どきの和甘味 / 手土産の4カテゴリ |
| `space.html` | 空間紹介ページ。庭・縁側・囲炉裏の間・座敷・窓辺の席。クリックで拡大するギャラリー付き |
| `season.html` | 季節の甘味ページ。春・夏・秋・冬の4ブロック構成 |
| `access.html` | 店舗案内・アクセスページ。店舗情報、SVGによる和風の簡易地図、アクセス案内、初めての方への案内 |

## ファイルツリー

```
.
├── index.html
├── menu.html
├── space.html
├── season.html
├── access.html
├── css/
│   ├── style.css        … 全体共通スタイル（デザイントークン、各セクション）
│   └── responsive.css   … ブレイクポイント別の調整
├── js/
│   ├── main.js          … ヘッダー、ハンバーガー、ナビハイライト
│   ├── effects.js       … スクロールフェードイン
│   └── gallery.js       … 画像クリック時のライトボックス
└── assets/
    └── images/          … 写真を入れるフォルダ
```

---

## デザインの方向性

### カラーパレット
- 生成り `#f3ecdc` / 和紙の白 `#faf5e8`
- 深い抹茶 `#2f3d20` / 抹茶 `#4f6336` / 苔 `#6b7a4a`
- 木の茶 `#5c4632` / 墨 `#1f1b16`
- 差し色：朱色 `#a64228` / 金茶 `#a78344`

### タイポグラフィ
- 見出し / ロゴ：**Shippori Mincho B1**（縦書きあり）
- 本文：**Noto Serif JP**
- 英字補助：**Cormorant Garamond**

### モチーフ
- 和紙の質感（背景の微細なテクスチャ）
- 障子の格子（区切り線）
- 縦書きのヒーローコピー
- 暖簾・苔・囲炉裏・縁側 等のキーワード

---

## 差し替えるべき画像一覧

以下の画像を `assets/images/` フォルダに同名で配置すると、サイトに反映されます。  
（現在はプレースホルダーが表示されています）

| ファイル名 | 用途 |
| :-- | :-- |
| `hero-touan-exterior.jpg` | トップヒーロー / 古民家外観と庭 |
| `concept-garden.jpg` | コンセプト・庭 / 苔の景色 |
| `concept-irori.jpg` | コンセプト・囲炉裏のある室内 |
| `concept-moss.jpg` | コンセプト・苔と石の景色 |
| `menu-anmitsu.jpg` | 抹茶あんみつ |
| `menu-kakigori.jpg` | 抹茶かき氷 |
| `menu-warabi.jpg` | 黒蜜きなこわらび餅 |
| `menu-jouswagashi.jpg` | 季節の上生菓子と抹茶 |
| `space-engawa.jpg` | 縁側席 |
| `space-garden.jpg` | 広い庭 |
| `space-zashiki.jpg` | 座敷 |
| `space-irori.jpg` | 囲炉裏の間 |
| `space-window.jpg` | 窓辺の席 |
| `space-tatami.jpg` | 木と畳の落ち着いた空間 |
| `gallery-moss.jpg` 他 | ギャラリー用追加写真 |
| `season-spring.jpg` | 春の甘味 |
| `season-summer.jpg` | 夏の甘味 |
| `season-autumn.jpg` | 秋の甘味 |
| `season-winter.jpg` | 冬の甘味 |
| `access-entrance.jpg` | 暖簾と入口 |

> プレースホルダーは HTML 内の `<div class="placeholder">` 要素です。  
> `<div class="placeholder"><img src="assets/images/xxx.jpg" alt="..."></div>` のように `<img>` を追加すると上に重ねて表示されます。

---

## レスポンシブ対応

| ブレイクポイント | 主な変更 |
| :-- | :-- |
| `~1024px`（タブレット） | グローバルナビ → ハンバーガーへ切替。グリッドを1〜2列に縮約 |
| `~768px`（スマホ） | ヒーロー縦書きを最適化、各セクション1カラムに、ボタンも縦並び |
| `~480px`（小型スマホ） | 余白とフォントサイズをさらに調整 |
| `prefers-reduced-motion` | アニメーションを無効化 |

縦書きヒーローはモバイルでも見た目を維持しつつ、文字サイズ・行間を最適化しています。

---

## アニメーション・演出

- ヒーローの縦書きコピー：フェードイン
- 各セクション：IntersectionObserver によるスクロール時のフェードアップ表示
- ヘッダー：スクロール時に半透明背景＆ブラーを付与する固定ヘッダー
- ハンバーガー：開閉時のアイコン変形 + メニュー項目の遅延フェードイン
- カード類：ホバーで画像をやわらかく拡大
- 装飾：和紙テクスチャ、障子の格子、菱形のオーナメント
- 「SCROLL」表示：縦線アニメーション

すべて控えめで、和の静けさを損なわないトーンに統一しています。

---

## ローカルで確認する方法

### 方法 1：Pythonの簡易サーバー
```bash
cd /Users/huuka_1419/灯庵
python3 -m http.server 8080
```
ブラウザで http://localhost:8080/ を開く。

### 方法 2：VSCode の Live Server 拡張
`index.html` を右クリック →「Open with Live Server」

### 方法 3：直接開く
`index.html` をダブルクリックでも閲覧可能ですが、相対パスや一部のブラウザ機能のため、サーバー経由を推奨します。

---

## GitHub Pagesでの公開

リポジトリのルートに `index.html` があるので、そのまま GitHub Pages として公開可能です。

1. GitHubで新規リポジトリを作成して push
2. リポジトリの Settings → Pages → Branch を `main` / `(root)` に設定
3. 数十秒後に公開URLが発行されます

---

## クレジット

This website is a fictional project created for portfolio purposes.  
© 2026 TOUAN.
