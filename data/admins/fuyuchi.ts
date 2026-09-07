export const fuyuchiAdmin = {
  id: 'creator_09',
  name: 'ふゆち',
  romanName: 'huyuchi',
  isMainAdmin: false, // サブ管理人
  role: 'Streamer',
  image: '/tsc-official/huyuti.webp', 
  headerImage: '/tsc-official/huyuti.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
  // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
  // 🌟 これを追加！好きな色コード（HEX）を入れてください
  // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
  themeColor: '#633372d7',

  // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
  offsetX: 100,
  offsetY: 10,
  scale: 1.2, // 👈 2倍の大きさに！
  mobileOffsetX: 0,
  mobileOffsetY: 740,
  mobileScale: 2,

  // 👇 ヘッダー用（眼だけカットイン用）の設定
  headerPosition: 'center 20%', // ベースの位置
  headerScale: 1.3,             // 画像をズームアップする（例：1.5倍）
  headerX: 100,                  // 右に30pxずらす
  headerY: -30,                 // 上に20pxずらす
  //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
  bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
  bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
  bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）
  // ==========================================
  // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
  // ==========================================
  // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
  spHeaderPosition: 'center 20%', // スマホ用のベース位置
  spHeaderScale: 1,               // PCより少し小さめにするなど
  spHeaderX: 100,                  // スマホ専用の右ズレ
  spHeaderY: 0,                 // スマホ専用の上ズレ


  catchphrases: [
    '誰もが心地よく過ごせるように。',
    '裏側で静かに組み上げる、鯖の心臓。'
  ],
  // 🌟 右側に並べるグリッド情報
  // 🌟 2. 右側のグリッド情報をリメイク！
  // 🌟 プロフィールグリッド（個別に分けたバージョン）
  profileGrid: [
    { label: '誕生日/記念日', value: '2月18日 / 12月6日' },
    { label: '好きなゲーム', value: 'Apex, VALORANT, Tarkov, 原神' },
    { label: '趣味', value: 'ゲーム, アニメ, 釣り, ギター' },
    { label: '嫌いなもの', value: 'パクチー、労働' },
    { label: 'ファンマーク', value: '🌨️💜' },
    { label: 'ファンネーム', value: 'よこしまな奴ら' },
    { label: '配信タグ', value: '#ふゆちちの配信' },
    { label: 'ファンアート', value: '#ふゆちちあーと' },
  ],
  profileText:
    'TSCの舞台裏を支える技術担当。Discordの複雑な権限設定やロール構築、機能的なチャンネルレイアウトの設計を一手に引き受けるスペシャリスト。\nメンバーが『使いやすい』と感じるその瞬間のために、裏側で緻密なコードと設定を組み上げる、鯖の心臓部を守るエンジニアです。\n趣味は釣りやギターなど多彩で、『Apex Legends』や『Escape From Tarkov』などをプレイ。なお、パクチーと「労働」は天敵。技術的な相談があれば、ふゆちに聞けば間違いなし！',
  youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
  links: {
    x: 'https://x.com/fuyuch1_',
    twitch: 'https://www.twitch.tv/fuyuchi_',
    youtube: 'https://www.youtube.com/@fuyuchi_',
  },
  pickupMedia: [
    { type: 'image', src: '/tsc-official/huyuti.webp', mode: 'contain'},
  ],
};