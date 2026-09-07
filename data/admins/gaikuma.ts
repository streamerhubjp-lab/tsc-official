export const gaikumaAdmin = {
  id: 'creator_11',
  name: 'がいくま',
  romanName: 'gaikuma',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/gaikuma.webp', 
  headerImage: '/tsc-official/gaikumaitimaie1.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#eba9fcd7',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 100,
  offsetY: 280,
  scale: 1.5, // 👈 2倍の大きさに！
  mobileOffsetX: 0,
  mobileOffsetY: 700,
  mobileScale: 2,

  // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center 10%', // ベースの位置
  headerScale: 1.3,             // 画像をズームアップする（例：1.5倍）
  headerX: 140,                  // 右に30pxずらす
  headerY: -30,                 // 上に20pxずらす

  //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
  bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
  bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
  bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center 10%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: 100,                  // スマホ専用の右ズレ
  spHeaderY: 10,                 // スマホ専用の上ズレ

    // 🌟 これを追加！【ノートPC（縦幅が狭い画面）専用の設定】🌟
  laptopOffsetX: 100,    // 少しズレを調整
  laptopOffsetY: 10,   // 570だと沈むので、浅くする
  laptopScale: 1.5,     // 1.5だと大きすぎるので少し小さく

  catchphrases: [
    '人間に憧れたクマは、今日も誰かの傍で笑う。',
    '夕暮れから深夜まで。少人数VCでこっそり営業中🧸💜'
  ],
  // 🌟 右側に並べるグリッド情報
  // 🌟 2. 右側のグリッド情報をリメイク！
  // 🌟 プロフィールグリッド（個別に分けたバージョン）
  // 🌟 右側に並べるグリッド情報
  profileGrid: [
    { label: '所属/スタイル', value: '個人勢（※Vではありません）' },
    { label: 'コンセプト', value: '人間に憧れて転生した元クマ' },
    { label: 'プレイタイトル', value: 'APEX, ホラゲ, ちょっと変わったゲーム' },
    { label: 'プレイスタイル', value: '笑いと楽しさ重視の全力エンジョイ勢' },
    { label: '出没情報', value: '夕方〜深夜（少人数VCに生息）' },
    { label: 'ファンマーク', value: '🧸💜' },
    { label: 'ファンアート', value: '#GaikumArt' },
    { label: 'イラスト/ママ', value: 'hito3maru 様' },
  ],
  profileText:
    '人間に憧れ、熊から人間へ転生を果たした配信者（※VTuberではありません）。Twitchをメインに、『Apex Legends』やホラーゲーム、ちょっと変わったゲームなどを配信中。「ネタに生きる」全力でゲームを楽しむスタイルで、リスナーに笑顔を届けている。\nTSC内では夕方から深夜にかけて少人数用のボイスチャットによく出没。「大人数が苦手な人でも安心」をモットーにしており、一緒に遊ぶのはもちろん、プレイ鑑賞のみも大歓迎。困ったことがあれば優しく相談に乗ってくれる、頼れる親しみやすい存在。',
  links: {
    x: 'https://x.com/subkumasan3310',
    twitch: 'https://www.twitch.tv/gaikumasan_twitch',
  },

  pickupMedia: [
    { type: 'image', src: '/tsc-official/gaikumaitimaie1.webp', position: 'top'},
    { type: 'image', src: '/tsc-official/gaikumaitimaie.webp'},
  ],
};
