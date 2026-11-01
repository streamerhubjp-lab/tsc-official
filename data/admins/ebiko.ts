export const ebikoAdmin = {
  id: 'creator_13',
  name: '海音えびこ',
  romanName: 'umineebiko',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/yoruneruka (1).webp', 
  headerImage: '/tsc-official/yorunerujaitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#ef454a',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 120,
  offsetY: 110,
  scale: 1.2, // 👈 2倍の大きさに！
  mobileOffsetX: 70,
  mobileOffsetY: 770,
  mobileScale: 2,

  // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center 10%', // ベースの位置
  headerScale: 3,             // 画像をズームアップする（例：1.5倍）
  headerX: 200,                  // 右に30pxずらす
  headerY: 30,                 // 上に20pxずらす
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
  laptopOffsetX: 70,    // 少しズレを調整
  laptopOffsetY: 210,   // 570だと沈むので、浅くする
  laptopScale: 1.5,     // 1.5だと大きすぎるので少し小さく


  // ① ズーム（1.3なら130%拡大）
  menuScale: 2,
  // ▼ さらに細かく調整したい場合（例：左から30%、上から10%の位置に顔がある）
  menuPosition: '55% 2%',

  catchphrases: [
    '静寂を彩る透き通る歌声、癒やしと感動を届ける歌姫。',
    '昼夜問わずVCに降臨する元気なお姉さん。'
  ],
  // 🌟 右側に並べるグリッド情報
  // 🌟 2. 右側のグリッド情報をリメイク！
  // 🌟 右側に並べるグリッド情報
  profileGrid: [
    { label: '所属', value: '個人勢' },
    { label: 'コンセプト', value: '癌と闘うVstreamer' },
    { label: '座右の銘', value: '私は何があっても諦めない' },
    { label: 'プレイタイトル', value: 'Rust、APEX(Twitch)、歌枠(YouTube)' },
    { label: '誕生日', value: '10月13日' },
    { label: 'ファンマーク', value: '🦐' },
    { label: '目標', value: '目指せTwitchパートナー' },
    { label: 'ファンアート', value: '#えびこあーと' },
  ],
      
  profileText:
    'ほぼ毎日20時からTwitchにて配信しているVtuber。YouTubeでの歌枠では、透き通ってきれいな歌声で視聴者様を魅了。何事も諦めない、ポジティブ思考で元気いっぱい！TSC鯖内でもVCでは聞き上手のお姉さん。',
      
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/ebichan_gg2525',
    twitch: 'https://www.twitch.tv/ebichan_2525',
    youtube: 'https://www.youtube.com/@UmineEbiko',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/yorunerujaitimaie.webp' ,position: 'top',},
  ],
};
