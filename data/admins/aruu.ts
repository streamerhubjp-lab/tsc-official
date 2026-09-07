export const aruuAdmin = {
  id: 'creator_04',
  name: 'あるぅ',
  romanName: 'Aruud',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/aruxutatie.webp', // 立ち絵パス
  headerImage: '/tsc-official/aruitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#fffaea',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 100,
  offsetY: 570,
  scale: 1.5, // 👈 2倍の大きさに！
  // ==========================================
  // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
  // ==========================================
  spOffsetX: -50,
  mobileOffsetX: 50,
  mobileOffsetY: 840,
  mobileScale: 2,
  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center 10%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: 100,                  // スマホ専用の右ズレ
  spHeaderY: 10,                 // スマホ専用の上ズレ
  // 🌟 これを追加！【ノートPC（縦幅が狭い画面）専用の設定】🌟
  laptopOffsetX: 60,    // 少しズレを調整
  laptopOffsetY: 300,   // 570だと沈むので、浅くする
  laptopScale:1.5,     // 1.5だと大きすぎるので少し小さく

  catchphrases: ['落ち着いた声色で届ける笑顔の時間。', 'サプライズ、準備完了。'],
  // 🌟 右側に並べるグリッド情報
  // あるぅさんのプロフィールラベル（全8種）
  profileGrid: [
    { label: 'スタイル', value: 'サプライズ好きのエンターテイナー' },
    { label: 'メインゲーム', value: 'Apex Legends, DbD' },
    { label: '主食', value: 'リスナーの驚く顔と笑顔' },
    { label: '声帯の治安', value: '極めて良好（落ち着いたトーン）' },
    { label: '要注意事項', value: '突然のサプライズにご注意ください' },
    { label: '総合タグ', value: '#思い出があるぅ' },
    { label: 'ファンアート', value: '#素敵な絵があるぅ' },
    { label: 'グッズタグ', value: '#うぇるかむあるぅ' },
  ],
  profileText:
    'サプライズが得意な個人勢Vstreamer。落ち着いた声色が特徴的だが、人を楽しませたり喜ばせるのが得意。『Apex Legends』や『DBD』のゲーム以外にも、料理配信や視聴者参加型の配信など、バラエティ豊かな企画配信も多く行っているエンターテイナー。',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/aruu_jp',
    twitch: 'https://www.twitch.tv/aruu_jp',
    youtube: 'https://www.youtube.com/@aruu_jp',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/aruitimaie.webp' },
    { type: 'image', src: '/tsc-official/arutatieA.webp' },
    { type: 'image', src: '/tsc-official/aruxitimaie3.webp' },
  ],
};
