export const yorunerukaAdmin = {
  id: 'creator_12',
  name: 'よるねるか',
  romanName: 'yoruneruka',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/yoruneruka (1).webp', 
  headerImage: '/tsc-official/yorunerujaitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#cd98ff',

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

  catchphrases: [
    '今夜もあなたに、セクシーサンキュー。',
    '月明かりの下でグラスを傾ける、清楚なお姉さん。'
  ],
  // 🌟 右側に並べるグリッド情報
  // 🌟 2. 右側のグリッド情報をリメイク！
  // 🌟 右側に並べるグリッド情報
  profileGrid: [
    { label: '所属', value: '個人勢' },
    { label: 'コンセプト', value: '清楚癒し系お姉さんVstreamer' },
    { label: '挨拶', value: 'セクシーサンキューこんばんは☪︎' },
    { label: 'プレイタイトル', value: 'Apex Legends(💎), Minecraft' },
    { label: '好きなもの', value: 'お酒🥂, マンガ, アニメ' },
    { label: 'ファンマーク', value: '🌙🥂' },
    { label: '推し', value: '👑💙' },
    { label: 'ママ / パパ', value: '卯月うさぎ 様 / 病喰ゆめ 様' },
  ],
      
  profileText:
    '「セクシーサンキュー」な清楚癒し系お姉さんVstreamer。『Apex Legends』や『Minecraft』などのゲーム実況を中心に活動中。おっとりとした装いとは裏腹に、ゲームの腕前もお見事。自身のチャンネル内素材を作成する程のお絵描きスキルも持ち合わせている。',
      
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/yorunerukamone',
    twitch: 'https://www.twitch.tv/yoruneruka',
    youtube: 'https://www.youtube.com/@よるねるか',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/yorunerujaitimaie.webp' ,position: 'top',},
  ],
};