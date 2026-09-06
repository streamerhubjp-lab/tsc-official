// ==========================================
// ⭐ 運営チーム（ABOUT）データ
// ==========================================
export const collectiveData = {
  image: '/tsc-official/syuugoutatie.PNG', // ※実際の画像パスに直してくださいね
  adminCount: 1,
  subAdminCount: 11,
  totalCount: 12,
  title: '管理者・サブ管理人',
  subtitle: 'Admins & Sub-Admins',
  mainMessage: 'あなたの活動をサポートします。',
  description: [
    'TSCサーバーでは、1名の管理人と11名のサブ管理人、計12名の運営チームが日々サーバーの治安維持と環境アップデートに努めています。',
    '「Discordサーバーに参加するのは初めてで不安…」「もしトラブルがあったらどうしよう…」という方でも心配いりません。皆さんが安心して楽しく活動できるよう、しっかりとサポートする体制を整えています。',
  ],
};

// ==========================================
// ⭐ 運営陣・管理者（ADMINS）データ
// ==========================================
export const adminList = [
  {
    id: 'creator_01',
    name: 'ヒロキング',
    romanName: 'hiroking',
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
  },
  // 他のクリエイターもここに追加していきます
  {
    id: 'creator_09',
    name: 'ふゆち',
    romanName: 'huyuchi',
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
  },
 {
    id: 'creator_03',
    name: 'しいな',
    romanName: 'Shiina',
    role: 'Streamer',
    image: '/tsc-official/siinataiekougasitu.png', // 狼の野郎さんの立ち絵パス
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
  },
 {
    id: 'creator_06',
    name: 'ひうひむ',
    romanName: 'hiu-himu',
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
  },
 {
    id: 'creator_11',
    name: 'がいくま',
    romanName: 'gaikuma',
    role: 'Streamer',
    image: '/tsc-official/gaikuma.webp', 
    headerImage: '/tsc-official/gaikumaitimaie1.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
    // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
    // 🌟 これを追加！好きな色コード（HEX）を入れてください
    // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
    themeColor: '#eba9fcd7',

    // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
    offsetX: 100,
    offsetY: 210,
    scale: 1.5, // 👈 2倍の大きさに！
    mobileOffsetX: 0,
    mobileOffsetY: 700,
    mobileScale: 2,

    // 👇 ヘッダー用（眼だけカットイン用）の設定
    headerPosition: 'center 10%', // ベースの位置
    headerScale: 1.3,             // 画像をズームアップする（例：1.5倍）
    headerX: 140,                  // 右に30pxずらす
    headerY: -30,                 // 上に20pxずらす

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
      '人間に憧れたクマは、今日も誰かの傍で笑う。',
      '夕暮れから深夜まで。少人数VCでこっそり営業中🧸💜'
    ],
    // 🌟 右側に並べるグリッド情報
    // 🌟 2. 右側のグリッド情報をリメイク！
    // 🌟 プロフィールグリッド（個別に分けたバージョン）
    // 🌟 右側に並べるグリッド情報
    profileGrid: [
      { label: '所属/スタイル', value: '個人勢（※Vではありません）' },
      { label: 'コンセプト', value: '人間に憧れて転生した元クマ' },
      { label: 'プレイタイトル', value: 'APEX, ホラゲ, ちょっと変わったゲーム' },
      { label: 'プレイスタイル', value: '笑いと楽しさ重視の全力エンジョイ勢' },
      { label: '出没情報', value: '夕方〜深夜（少人数VCに生息）' },
      { label: 'ファンマーク', value: '🧸💜' },
      { label: 'ファンアート', value: '#GaikumArt' },
      { label: 'イラスト/ママ', value: 'hito3maru 様' },
    ],
    profileText:
      '人間に憧れ、熊から人間へ転生を果たした配信者（※VTuberではありません）。Twitchをメインに、『Apex Legends』やホラーゲーム、ちょっと変わったゲームなどを配信中。「ネタに生きる」全力でゲームを楽しむスタイルで、リスナーに笑顔を届けている。\nTSC内では夕方から深夜にかけて少人数用のボイスチャットによく出没。「大人数が苦手な人でも安心」をモットーにしており、一緒に遊ぶのはもちろん、プレイ鑑賞のみも大歓迎。困ったことがあれば優しく相談に乗ってくれる、頼れる親しみやすい存在。',
    links: {
      x: 'https://x.com/subkumasan3310',
      twitch: 'https://www.twitch.tv/gaikumasan_twitch',
    },

    pickupMedia: [
    { type: 'image', src: '/tsc-official/gaikumaitimaie1.webp', position: 'top'},
    { type: 'image', src: '/tsc-official/gaikumaitimaie.webp'},
    
  ],
  },
 {
    id: 'creator_05',
    name: '狼の野郎',
    romanName: 'WOLF YAROU',
    role: 'Streamer / Creator',
    image: '/tsc-official/ookami.webp', // 狼の野郎さんの立ち絵パス
    headerImage: '/tsc-official/ookamiitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
    // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
    // 🌟 これを追加！好きな色コード（HEX）を入れてください
    // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
    themeColor: '#636160',

    // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
    offsetX: 900,
    offsetY: 350,
    scale: 3, // 👈 2倍の大きさに！
    // ==========================================
    // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
    // ==========================================
    spOffsetX: -50,
    mobileOffsetX: 430,
    mobileOffsetY: 470,
    mobileScale: 3,
    // ==========================================

   // 👇 ヘッダー用（眼だけカットイン用）の設定
    headerPosition: 'center 50%', // ベースの位置
    headerScale: 2,             // 画像をズームアップする（例：1.5倍）
    headerX: 500,                  // 右に30pxずらす
    headerY: 100,                 // 上に20pxずらす

    // ==========================================
    // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
    // ==========================================
    // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
    spHeaderPosition: 'center 20%', // スマホ用のベース位置
    spHeaderScale: 2,               // PCより少し小さめにするなど
    spHeaderX: 200,                  // スマホ専用の右ズレ
    spHeaderY: 0,                 // スマホ専用の上ズレ

    catchphrases: ['ただの狼。最近は魔王になりたい。', '人間生活満喫中狼。'],
    // 🌟 右側に並べるグリッド情報
 profileGrid: [
      { label: 'クラス', value: 'ただの狼（エンジョイ勢）' },
      { label: '得意武器', value: 'Apex, VALORANT, 原神,まのさば' },
      { label: 'クラフト能力', value: '動画制作・小説執筆など多岐' },
      { label: '出没条件', value: '自由気まま（インターネットライフ）' },
      { label: '称号', value: '人間生活大満喫中狼' },
      { label: 'プレイスタイル', value: 'ジャンル問わず欲張りにエンジョイ' },
      { label: '配信のモットー', value: '楽しみまくる！' },
      { label: 'マルチタスク度', value: 'ゲームも創作も気ままに並行作業' },
    ],
    profileText:
      'ただの狼、人間生活大満喫中狼。\n配信者やら、物作りやら、小説書いたり、自由気ままにインターネット生活ライフ！\n『Apex Legends』、『原神』、『VALORANT』や『魔法少女ノ魔女裁判』などのストーリー系ゲームなど、多岐にわたるゲームを配信中。動画制作など色々と作り中。ぜひみてね～たのしぃ。',
    youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
    links: {
      x: 'https://x.com/wolf_wolf_wolfA',
      twitch: 'https://www.twitch.tv/wolfyarou',
      youtube: 'https://www.youtube.com/channel/UCLJ0tGK4PpfdZJvf0fjGVWw',
    },
        pickupMedia: [
    { type: 'image', src: '/tsc-official/ookamiitimaie.webp' },
  ],
  },  
{
    id: 'creator_10',
    name: 'こゆき',
    romanName: 'koyuki',
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
  },
 {
    id: 'creator_04',
    name: 'あるぅ',
    romanName: 'Aruud',
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
  },
{
    id: 'creator_07',
    name: 'つゆりひお',
    romanName: 'tsuyuri_hio',
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
  },
  {
    id: 'creator_08',
    name: '一楓あやの',
    romanName: 'ibuki_ayano',
    role: 'Streamer',
    image: '/tsc-official/ibukiatanotatie.webp', 
    headerImage: '/tsc-official/ayanoitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
    // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
    // 🌟 これを追加！好きな色コード（HEX）を入れてください
    // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
    themeColor: '#ffd9df',

    // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
    offsetX: 30,
    offsetY: 140,
    scale: 1.5, // 👈 2倍の大きさに！

    
    // ==========================================
    // 📱 ② 【スマホ画面】メイン立ち絵（スマホで見た時の専用設定）
    // ==========================================
    spOffsetX: -50,
    mobileOffsetX: 30,
    mobileOffsetY: 650,
    mobileScale: 2,


    // 👇 ヘッダー用（眼だけカットイン用）の設定
    headerPosition: 'center 42%', // ベースの位置
    headerScale: 3,             // 画像をズームアップする（例：1.5倍）
    headerX: 600,                  // 右に30pxずらす
    headerY: -180,                 // 上に20pxずらす
    //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
    bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
    bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
    bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

    // ==========================================
    // 📱 ③-b 【スマホ画面用】ネームヘッダー背景（★ここを追加！）
    // ==========================================
    // スマホだと箱の形が変わるので、倍率を下げたり位置をずらしたりします
    spHeaderPosition: 'center 30%', // スマホ用のベース位置
    spHeaderScale: 2,               // PCより少し小さめにするなど
    spHeaderX: 200,                  // スマホ専用の右ズレ
    spHeaderY: -60,                 // スマホ専用の上ズレ



    catchphrases: [
      'それでも辿り着くは、あなたが待つ温かな場所。',
      '揺れるしっぽと、迷子の足取り。'
    ],
    // 🌟 右側に並べるグリッド情報
    // 🌟 2. 右側のグリッド情報をリメイク！
    profileGrid: [
      { label: '所属', value: '完全個人勢' },
      { label: '愛称', value: 'いぶたそ' },
      { label: 'コンセプト', value: '方向音痴系獣人VStreamer' },
      { label: 'プレイタイトル', value: 'Apex Legends, NTE' },
      { label: '実績・称号', value: 'NTE公式コンテンツクリエイター🚗💨' },
      { label: '出没情報', value: '毎月前半・連休は「社畜うぉんな」' },
      { label: 'ファンアート', value: '#いぶたそあーと' },
      { label: 'ママ / イラスト', value: '檜木乃某 様 / 真白フェア 様' },
    ],

    profileText:
      '自称「どこでも迷子」の方向音痴系個人勢VStreamerであり、けもみみとしっぽをこよなく愛する獣人。ファンからは「いぶたそ」の愛称で親しまれている。\n『Apex Legends』や『NTE』などのゲーム実況を中心に活動しており、NTEでは公式コンテンツクリエイターも務める実力派！\nTwitchでの配信やYouTubeへの動画投稿をメインにしつつ、毎月前半やGW・お盆などの長期休み期間は「社畜うぉんな」として奮闘する親しみやすい一面も魅力。',
    youtubeId: 'Pj1G8lVq8y0', // 🌟 ピックアップ動画のID
    links: {
      x: 'https://x.com/ibuki_ayano',
      twitch: 'https://www.twitch.tv/ibuki_ayano',
      youtube: 'https://www.youtube.com/@Ibuki_ayano',
    },
    pickupMedia: [
    { type: 'image', src: '/tsc-official/ayanoitimaie.webp' },
  ],
  },
 {
    id: 'creator_02',
    name: '雪羽かよ',
    romanName: 'yukihakayo',
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
  },

 {
    id: 'creator_12',
    name: 'よるねるか',
    romanName: 'yoruneruka',
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
  },
];
