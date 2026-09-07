export const yukihaKayoAdmin = {
  id: 'creator_02',
  name: '雪羽かよ',
  romanName: 'yukihakayo',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/kayotatiekarui.webp', // 狼の野郎さんの立ち絵パス
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  headerImage: '/tsc-official/kayoitimaie2.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  themeColor: '#0284C7',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 20,
  offsetY: 260,
  scale: 1.5, // 👈 2倍の大きさに！
  // ==========================================
  // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
  // ==========================================
  spOffsetX: -50,
  mobileOffsetX: -50,
  mobileOffsetY: 700,
  mobileScale: 2,

  // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center 20%', // ベースの位置
  headerScale: 1,             // 画像をズームアップする（例：1.5倍）
  headerX: 50,                  // 右に30pxずらす
  headerY: 3,                 // 上に20pxずらす
  
  //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
  bgFaceX: -1000,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
  bgFaceY: 300,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
  bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center 20%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: 50,                  // スマホ専用の右ズレ
  spHeaderY: -30,                 // スマホ専用の上ズレ

  // 🌟 「真っ白」を海要素に変更し、リズムを整えました！
  catchphrases: [
    '皆と一緒に未来を紡ぐために',
    '蒼い水底から浮かび上がった女の子。'
  ],
  // 🌟 右側に並べるグリッド情報
    profileGrid: [
    { label: '呼び名', value: 'ゆきは / かよ' },
    { label: '誕生日', value: '12月7日' },
    { label: 'コンセプト', value: 'クラゲの「かよ」が生み出した「雪羽」' },
    { label: '世界観', value: '友達のフロウくんと水底から通信中' },
    { label: 'プレイスタイル', value: 'まったり癒やし空間' },
    { label: '配信・お知らせ', value: 'Twitchにて配信（毎週Xで告知＆縁巡回）' },
    { label: '配信タグ', value: '#雪羽かよの遊び場 / #Yukihakayo_now' },
    { label: 'ファンアート', value: '#ゆきはあーと' },
  ],
  profileText:
    '「水底から、地上のあなたへ通信中——」\n\nクラゲの「かよ」が生み出した「雪羽」というコンセプトストリーマー。\n皆と一緒に未来を紡ぐため、深海から地上へ向けて癒やしの時間をお届けしています。\n普段は『あつまれどうぶつの森』や『原神』などをプレイ。まるで波間にたゆたうような、まったりとした空間と表情豊かな配信が特徴的！',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/YukihaKayo',
    twitch: 'https://www.twitch.tv/yukiha_kayo',
    youtube: 'https://www.youtube.com/channel/UCOgBheyN6Ge4MG_kq2wkRCA',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/kayotatie3.webp' },
    { type: 'image', src: '/tsc-official/kayoitimaie2.webp' ,
      // 🌟 今回のスクショのように「顔が上にあって切れてしまう」場合
    // これを入れると、画像の「上端」を基準に表示されるので顔が見えるようになります！
    position: 'top',},
    { type: 'image', src: '/tsc-official/kayoitimaie.webp' },
  ],
};