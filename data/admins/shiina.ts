export const shiinaAdmin = {
  id: 'creator_03',
  name: 'しいな',
  romanName: 'Shiina',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/siinataiekougasitu.png', // 狼の野郎さんの立ち絵パス
  headerImage: '/tsc-official/siinatatie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#cff7f3',

  // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center 30%', // ベースの位置
  headerScale: 2,             // 画像をズームアップする（例：1.5倍）
  headerX: 50,                  // 右に30pxずらす
  headerY: -10,                 // 上に20pxずらす
  // ==========================================
  // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
  // ==========================================
  spOffsetX: -50,
  mobileOffsetX: -50,
  mobileOffsetY: 600,
  mobileScale: 2,


  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 50,
  offsetY: 220,
  scale: 1.7, // 👈 2倍の大きさに！

  //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
  bgFaceX: -800,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
  bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
  bgFaceScale: 1, // 🌟 大きさを変えたい場合（1.1倍など）

  catchphrases: ['心温まる怪奇現象。', '不定期に発生する'],
  // 🌟 右側に並べるグリッド情報
  profileGrid: [
    { label: 'コンセプト', value: 'PS5に棲むオバケ' },
    { label: 'プレイタイトル', value: 'レトロゲーから音ゲーまで' },
    { label: '配信スタイル', value: 'おっとり癒やし系' },
    { label: '配信の魅力', value: 'リスナー想いの温かい交流' },
    { label: '出没時間', value: '深夜帯' },
    { label: 'TSCでの顔', value: '細やかな運営サポート' },
  ],
  profileText:
    '不定期にPS5で怪奇現象（配信）をしているオバケ、というコンセプトストリーマー。『リトルナイトメア』や『ロックマン2』などのゲーム実況に加え、音ゲーの『DEEMO』をピアノで演奏するなど多岐にわたる。おっとりとした癒やし系の雰囲気があり、リスナーを大切にする温かい交流が魅力の配信者。TSC内でも細やかな気遣いや丁寧な仕事ぶりで運営を支えている。',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/shiina_81417',
    twitch: 'https://www.twitch.tv/shiina_41777',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/siinaB.png' ,
    // 🌟 立ち絵など、絶対に全身を枠内に収めたい場合
      mode: 'contain',},
    { type: 'image', src: '/tsc-official/siinaA.png',mode: 'contain'},
    { type: 'image', src: '/tsc-official/siinaa09.png',mode: 'contain'},
  ],
};