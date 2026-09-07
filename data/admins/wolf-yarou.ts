export const wolfYarouAdmin = {
  id: 'creator_05',
  name: '狼の野郎',
  romanName: 'WOLF YAROU',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer / Creator',
  image: '/tsc-official/ookami.webp', // 狼の野郎さんの立ち絵パス
  headerImage: '/tsc-official/ookamiitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#636160',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 900,
  offsetY: 350,
  scale: 3, // 👈 2倍の大きさに！
  // ==========================================
  // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
  // ==========================================
  spOffsetX: -50,
  mobileOffsetX: 430,
  mobileOffsetY: 470,
  mobileScale: 3,
  // ==========================================

  // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center 50%', // ベースの位置
  headerScale: 2,             // 画像をズームアップする（例：1.5倍）
  headerX: 500,                  // 右に30pxずらす
  headerY: 100,                 // 上に20pxずらす

  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center 20%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: 200,                  // スマホ専用の右ズレ
  spHeaderY: 0,                 // スマホ専用の上ズレ

  // 🌟 これを追加！【ノートPC（縦幅が狭い画面）専用の設定】🌟
  laptopOffsetX: 680,    // 少しズレを調整
  laptopOffsetY: 120,   // 570だと沈むので、浅くする
  laptopScale: 3,     // 1.5だと大きすぎるので少し小さく

  catchphrases: ['ただの狼。最近は魔王になりたい。', '人間生活満喫中狼。'],
  // 🌟 右側に並べるグリッド情報
  profileGrid: [
      { label: 'クラス', value: 'ただの狼（エンジョイ勢）' },
      { label: '得意武器', value: 'Apex, VALORANT, 原神,まのさば' },
      { label: 'クラフト能力', value: '動画制作・小説執筆など多岐' },
      { label: '出没条件', value: '自由気まま（インターネットライフ）' },
      { label: '称号', value: '人間生活大満喫中狼' },
      { label: 'プレイスタイル', value: 'ジャンル問わず欲張りにエンジョイ' },
      { label: '配信のモットー', value: '楽しみまくる！' },
      { label: 'マルチタスク度', value: 'ゲームも創作も気ままに並行作業' },
    ],
  profileText:
    'ただの狼、人間生活大満喫中狼。\n配信者やら、物作りやら、小説書いたり、自由気ままにインターネット生活ライフ！\n『Apex Legends』、『原神』、『VALORANT』や『魔法少女ノ魔女裁判』などのストーリー系ゲームなど、多岐にわたるゲームを配信中。動画制作など色々と作り中。ぜひみてね～たのしぃ。',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/wolf_wolf_wolfA',
    twitch: 'https://www.twitch.tv/wolfyarou',
    youtube: 'https://www.youtube.com/channel/UCLJ0tGK4PpfdZJvf0fjGVWw',
  },
      pickupMedia: [
  { type: 'image', src: '/tsc-official/ookamiitimaie.webp' },
  ],
};
