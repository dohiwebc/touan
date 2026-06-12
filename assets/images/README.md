# assets/images

このフォルダに、サイトで使用する写真を配置してください。  
画像が未配置の状態でも、上品なプレースホルダーが表示されるようになっています。

## 必要な画像一覧（推奨ファイル名）

### トップページ
- `hero-touan-exterior.jpg` — 古民家外観と庭（ヒーロー用、横長推奨）
- `concept-garden.jpg` — 庭・苔の美しい写真（縦長推奨）
- `concept-irori.jpg` — 囲炉裏のある室内
- `concept-moss.jpg` — 苔と石の景色

### 看板甘味
- `menu-anmitsu.jpg` — 抹茶あんみつ
- `menu-kakigori.jpg` — 抹茶かき氷
- `menu-warabi.jpg` — 黒蜜きなこわらび餅
- `menu-jouswagashi.jpg` — 上生菓子と抹茶

### 空間紹介
- `space-garden.jpg` — 広い庭
- `space-engawa.jpg` — 縁側席
- `space-irori.jpg` — 囲炉裏の間
- `space-zashiki.jpg` — 座敷
- `space-window.jpg` — 窓辺の席
- `space-tatami.jpg` — 木と畳の落ち着いた空間（トップ空間カード用）

### ギャラリー（space.html 下部）
- `gallery-moss.jpg` — 苔と石
- `gallery-engawa-view.jpg` — 縁側からの眺め
- `gallery-shoji.jpg` — 障子と光
- `gallery-irori-close.jpg` — 囲炉裏のぬくもり
- `gallery-tatami.jpg` — 畳と陶器
- `gallery-noren.jpg` — 木の柱と暖簾

### 季節
- `season-spring.jpg` — 春の甘味
- `season-summer.jpg` — 夏の甘味
- `season-autumn.jpg` — 秋の甘味
- `season-winter.jpg` — 冬の甘味

### アクセス
- `access-entrance.jpg` — 暖簾と入口

## 画像の差し替え方

HTML内の `<div class="placeholder">` 要素に `<img>` を追加してください。

```html
<div class="placeholder">
  <img src="assets/images/hero-touan-exterior.jpg" alt="灯庵の古民家外観" />
  <span class="placeholder__label">hero-touan-exterior.jpg</span>
</div>
```

`<img>` は `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;` で
プレースホルダーの上に重なるようスタイルされています。表示後はラベル `<span>` を削除しても構いません。

## 推奨スペック

- ヒーロー画像：横長 2400×1600 以上、JPEG（80〜85%）
- カード・ギャラリー画像：1200×900 程度、JPEG（80%）
- 全体的に暗めの色調、自然光、和の落ち着いた色味のものがマッチします
