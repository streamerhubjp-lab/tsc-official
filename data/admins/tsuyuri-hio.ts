export const tsuyuriHioAdmin = {
  id: 'creator_07',
  name: 'つゆりひお',
  romanName: 'tsuyuri_hio',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/tuyuriho (1).webp', 
  headerImage: '/tsc-official/tuyurihioitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#6ca8f1',

  // ==========================================
  // 🧍‍♂️ ① 【PC画面】メイン立ち絵（左下の全身イラスト）
  // ==========================================
  offsetX: 100,
  offsetY: 500,
  scale: 1.2, // 👈 2倍の大きさに！
    // ==========================================
  // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
  // ==========================================
  spOffsetX: -50,
  mobileOffsetX: 30,
  mobileOffsetY: 400,
  mobileScale: 1,
  // ==========================================
  // 💳 ③ ネームヘッダー（右側にある、名前が書いてある大きな箱の背景）
  // ==========================================
  
  headerPosition: 'center 10%', // ベースの位置
  headerScale: 3,             // 画像をズームアップする（例：1.5倍）
  headerX: 200,                  // 右に30pxずらす
  headerY: -180,                 // 上に20pxずらす
  // ==========================================
  // 🌫️ ④ 背景の巨大な顔（画面全体の右上に透けている画像）
  // ==========================================
  bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
  bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
  bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center 20%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: 50,                  // スマホ専用の右ズレ
  spHeaderY: -30,                 // スマホ専用の上ズレ


  catchphrases: [
    'どこまでも真っ直ぐな、本気の軌跡。',
    'ちいさな足跡が刻むのは'
    
  ],
  // 🌟 右側に並べるグリッド情報
  // 👑 つゆりひおさんのプロフィールグリッド（ここから必要なものをピックアップ）
  profileGrid: [
    { label: '所属', value: 'result e-Sports (ストリーマー部門)' },
    { label: '誕生日', value: '5月7日' },
    { label: 'コンセプト', value: 'ハムスターモチーフの小動物系配信者' },
    { label: 'プレイタイトル', value: 'Apex(💎), VALORANT(銅)' },
    { label: 'プレイスタイル', value: 'おっとりとした癒やし × 真剣プレイ' },
    { label: 'ファンマーク', value: '💧🐹' },
    { label: '総合タグ', value: '#ひおの巣ごもり' },
    { label: 'ファンアート', value: '#つゆひお絵画' },
  ],

  profileText:
    'result e-Sports（ストリーマー部門）に所属する、ハムスターモチーフの小動物系配信者。\n主に『Apex Legends』や『VALORANT』などを配信中。普段のおっとりとした可愛らしい雰囲気とは裏腹に、ひとたびゲームが始まれば真剣に取り組むという「ギャップ」が最大の魅力。\n自身でイラスト制作も手掛けるなど、クリエイティブな一面も持ち合わせている。',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/hiokikai_twitch',
    twitch: 'https://www.twitch.tv/noahio0507',
    youtube: 'https://www.youtube.com/@Thuyurihio',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/tuyurihioitimaie.webp' },
  ],
};