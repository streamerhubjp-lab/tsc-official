export const hiuHimuAdmin = {
  id: 'creator_06',
  name: 'ひうひむ',
  romanName: 'hiu-himu',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/hiuhimu2 .webp', 
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  headerImage: '/tsc-official/hiuhimuitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#ffcbf6',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 120,
  offsetY: 500,
  scale: 1.8, // 👈 2倍の大きさに！
  mobileOffsetX: 0,
  mobileOffsetY: 600,
  mobileScale: 2,
  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center 20%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: -50,                  // スマホ専用の右ズレ
  spHeaderY: 0,                 // スマホ専用の上ズレ

  // 🌟 静かな夜のラジオ配信とメイド要素を合わせたキャッチコピー
  catchphrases: [
    '静かな夜のお供に、一杯の紅茶を。',
    '三匹のおばけと寄り添う幽霊メイド。'
  ],
  // 🌟 右側に並べるグリッド情報
  // 👑 ヒロキングさんのプロフィールグリッド（ここから必要なものをピックアップ）
  profileGrid: [
    { label: 'コンセプト', value: '3匹の手下おばけを連れた幽霊メイド' },
    { label: 'プレイスタイル', value: 'ホラーでも叫ばない、ゆったりラジオ感覚' },
    { label: '好きなジャンル', value: 'RPGなどのストーリーもの' },
    { label: '趣味', value: '紅茶, 読書, 映画鑑賞(ホラー), 語学学習' },
    { label: '出没情報', value: '神出鬼没（VCで会えたらラッキー！）' },
    { label: '配信・お知らせ', value: 'Twitch等にて配信（Xで告知）' },
    { label: '配信タグ', value: '#ひうひむ 配信中' }, // ※実際のタグがあれば変更してください
    { label: 'ファンアート', value: '#ひうひむあーと' }, // ※実際のタグがあれば変更してください
  ],

  profileText:
    '3匹の手下おばけを連れた、おっとりとした物静かな幽霊メイド。\nRPGなどのストーリーものを心から愛しており、ホラーゲームでも叫ばないほどの落ち着きぶり。作業中で寂しい夜などに、ラジオ感覚でゆったり聴ける癒やしの配信をお届けしています。\n紅茶や読書、ホラー映画を嗜む多趣味な一面も。神出鬼没なので、サーバーのVC（ボイスチャット）で遭遇できたらラッキーかも？',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/hiuhymn',
    twitch: 'https://www.twitch.tv/hiuhymn',
    youtube: 'https://www.youtube.com/@hiuhymn',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/hiuhimuitimaie.webp' },
    {  type: 'image', 
      src: '/tsc-official/hiuhiuitimaie1.webp',
      // 'center 30%' ＝ 左右は真ん中(center)、上下は上から30%の位置を中心に表示
      position: 'center 20%', 
    },
    { type: 'image', src: '/tsc-official/hiuhiuitimaie2.webp' },
  ],
};