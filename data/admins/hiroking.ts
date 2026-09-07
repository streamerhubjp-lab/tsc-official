export const hirokingAdmin = {
  id: 'creator_01',
  name: 'ヒロキング',
  romanName: 'hiroking',
  isMainAdmin: true, // 管理者フラグ
  role: 'Streamer',
  image: '/tsc-official/IMG_0795.webp', 
  headerImage: '/tsc-official/hirokingitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#daebff',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 150,
  offsetY: 650,
  scale: 2.5, // 👈 2倍の大きさに！
  mobileOffsetX: 50,
  mobileOffsetY: 520,
  mobileScale: 2.4,

    // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center 10%', // ベースの位置
  headerScale: 2,             // 画像をズームアップする（例：1.5倍）
  headerX: 500,                  // 右に30pxずらす
  headerY: 100,                 // 上に20pxずらす

  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center -20%', // スマホ用のベース位置
  spHeaderScale: 2,               // PCより少し小さめにするなど
  spHeaderX: 300,                  // スマホ専用の右ズレ
  spHeaderY: -30,                 // スマホ専用の上ズレ

       // 🌟 これを追加！【ノートPC（縦幅が狭い画面）専用の設定】🌟
  laptopOffsetX: 60,    // 少しズレを調整
  laptopOffsetY: 300,   // 570だと沈むので、浅くする
  laptopScale:2.5,     // 1.5だと大きすぎるので少し小さく

  catchphrases: ['王冠を戴き、誰もが笑える温かい居場所を創り出す。', '毎夜二十二時半に降臨する、愛嬌たっぷりの王子様。'],
  // 🌟 右側に並べるグリッド情報
  // 👑 ヒロキングさんのプロフィールグリッド（ここから必要なものをピックアップ）
  profileGrid: [
    { label: 'ロール', value: 'TSC代表 / Twitchパートナー / MEDISIA所属' },
    { label: 'メイン活動', value: 'APEX、ホラーゲーム' },
    { label: '配信時間', value: 'Twitchにて 曜日不定期22:30〜' },
    { label: 'プラットフォーム', value: 'Twitch（ライブ）' },
    { label: '誕生日', value: '3月6日' },
    { label: 'ファンマーク', value: '👑🩵' },
    { label: 'ファンアート', value: '#キングのお絵描き' },
    { label: '活動理念', value: '活動者同士が繋がれる居場所作り、諦めないド根性' }
  ],

  profileText:
    'Twitchパートナーとして活動する配信者。ゲーム配信や雑談配信を中心に活動しながら、配信者・VTuber・クリエイター交流コミュニティ「TSC」を運営。コラボ企画やイベント運営を通して、活動者同士が繋がれる場所を作り続けている。',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/hiroking_0306',
    twitch: 'https://www.twitch.tv/theseventhone666',
    youtube: 'https://www.youtube.com/@theseventhone71',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/hirokingitimaie.webp' ,
    // 🌟 今回のスクショのように「顔が上にあって切れてしまう」場合
    // これを入れると、画像の「上端」を基準に表示されるので顔が見えるようになります！
    position: 'top',},
    { type: 'image', src: '/tsc-official/hirokinngutatie2.webp',
          // 🌟 立ち絵など、絶対に全身を枠内に収めたい場合
      mode: 'contain',
    },
  ],
};
