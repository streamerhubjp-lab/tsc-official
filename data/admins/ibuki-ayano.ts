export const ibukiAyanoAdmin = {
  id: 'creator_08',
  name: '一楓あやの',
  romanName: 'ibuki_ayano',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/ibukiatanotatie.webp', 
  headerImage: '/tsc-official/ayanoitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#ffd9df',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 30,
  offsetY: 140,
  scale: 1.5, // 👈 2倍の大きさに！

  // ==========================================
  // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
  // ==========================================
  spOffsetX: -50,
  mobileOffsetX: 30,
  mobileOffsetY: 650,
  mobileScale: 2,

  // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center 42%', // ベースの位置
  headerScale: 3,             // 画像をズームアップする（例：1.5倍）
  headerX: 600,                  // 右に30pxずらす
  headerY: -180,                 // 上に20pxずらす
  //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
  bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
  bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
  bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center 30%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: 200,                  // スマホ専用の右ズレ
  spHeaderY: -60,                 // スマホ専用の上ズレ

    // 🌟 これを追加！【ノートPC（縦幅が狭い画面）専用の設定】🌟
  laptopOffsetX: 60,    // 少しズレを調整
  laptopOffsetY: -50,   // 570だと沈むので、浅くする
  laptopScale:1.5,     // 1.5だと大きすぎるので少し小さく

  catchphrases: [
    'それでも辿り着くは、あなたが待つ温かな場所。',
    '揺れるしっぽと、迷子の足取り。'
  ],
  // 🌟 右側に並べるグリッド情報
  // 🌟 2. 右側のグリッド情報をリメイク！
  profileGrid: [
    { label: '所属', value: '完全個人勢' },
    { label: '愛称', value: 'いぶたそ' },
    { label: 'コンセプト', value: '方向音痴系獣人VStreamer' },
    { label: 'プレイタイトル', value: 'Apex Legends, NTE' },
    { label: '実績・称号', value: 'NTE公式コンテンツクリエイター🚗💨' },
    { label: '出没情報', value: '毎月前半・連休は「社畜うぉんな」' },
    { label: 'ファンアート', value: '#いぶたそあーと' },
    { label: 'ママ / イラスト', value: '檜木乃某 様 / 真白フェア 様' },
  ],

  profileText:
    '自称「どこでも迷子」の方向音痴系個人勢VStreamerであり、けもみみとしっぽをこよなく愛する獣人。ファンからは「いぶたそ」の愛称で親しまれている。\n『Apex Legends』や『NTE』などのゲーム実況を中心に活動しており、NTEでは公式コンテンツクリエイターも務める実力派！\nTwitchでの配信やYouTubeへの動画投稿をメインにしつつ、毎月前半やGW・お盆などの長期休み期間は「社畜うぉんな」として奮闘する親しみやすい一面も魅力。',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/ibuki_ayano',
    twitch: 'https://www.twitch.tv/ibuki_ayano',
    youtube: 'https://www.youtube.com/@Ibuki_ayano',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/ayanoitimaie.webp' },
  ],
};
