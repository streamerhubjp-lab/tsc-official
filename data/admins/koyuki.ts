export const koyukiAdmin = {
  id: 'creator_10',
  name: 'こゆき',
  romanName: 'koyuki',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/koyukitatie .webp', 
  headerImage: '/tsc-official/koyukiitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#ffcef7d7',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 100,
  offsetY: 620,
  scale: 1.8, // 👈 2倍の大きさに！
  // ==========================================
  // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
  // ==========================================
  
  mobileOffsetX: 30,
  mobileOffsetY: 770,
  mobileScale: 2.3,

  // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center -10%', // ベースの位置
  headerScale: 1.3,             // 画像をズームアップする（例：1.5倍）
  headerX: 200,                  // 右に30pxずらす
  headerY: -10,                 // 上に20pxずらす
  //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください

  bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
  bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
  bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center -30%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: 100,                  // スマホ専用の右ズレ
  spHeaderY: 10,                 // スマホ専用の上ズレ

     // 🌟 これを追加！【ノートPC（縦幅が狭い画面）専用の設定】🌟
  laptopOffsetX: 50,    // 少しズレを調整
  laptopOffsetY: 340,   // 570だと沈むので、浅くする
  laptopScale:  1.8,     // 1.5だと大きすぎるので少し小さく


  catchphrases: [
    '桜舞う。あなたと語らうひとときを。',
    '縁を紡ぎて咲き誇る、凛と立つのは桜華。'
  ],
  // 🌟 右側に並べるグリッド情報
  // 🌟 2. 右側のグリッド情報をリメイク！
  // 🌟 プロフィールグリッド（個別に分けたバージョン）
  profileGrid: [
    { label: '誕生日/記念日', value: '3月18日 / 6月26日' },
    { label: '好きなゲーム', value: 'Apex' },
    { label: '趣味', value: 'お酒, ゲーム, おしゃべり' },
    { label: '嫌いなもの', value: '虫全般、嘘つき' },
    { label: 'ファンマーク', value: '🍻🌸' },
    { label: '欲しいもの', value: 'アサヒビールさんからの案件' },
    { label: 'APEXファンタグ', value: 'GGKP' },
    { label: '好きな色', value: 'ピンク' },
  ],
  profileText:
    'ゲームとお酒とお喋り大好き、個人勢Vtuber。『Apex Legends』のゲーム実況を中心に活動中。七皇の剣の専属モデレーターも兼任中。おしゃべりが大好きなのでTSCでは主にVCの盛り上げ役や、裏方として技術面のサポートも行っている。',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/hajikoyuch',
    twitch: 'https://www.twitch.tv/vtuberkoyuki',
    youtube: 'https://www.youtube.com/@hajikoyuch',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/koyukiitimaie.webp'},
  ],
};
