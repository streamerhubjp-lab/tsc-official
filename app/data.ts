export const siteConfig = {
  name: 'TSC Official',
  description: 'The Streamer Creator Server',

  // 👇 右側に表示されるロゴの画像パス
  logo: '/tsc-official/GoznTJVa4AAoq0S.jpg',

  // 👇 中央に表示される11人の集合写真の画像パス
  heroImages: ['/tsc-official/syuugou.webp'],
};

export const menuItems = [
  { id: 'home', label: 'HOME' },
  { id: 'news', label: 'NEWS' },
  { id: 'admins', label: '管理者/サブ管理人' },
  //{ id: 'profile', label: 'おすすめ配信者 / クリエイター' },
  //{ id: 'navigation', label: 'サーバーの使い方' },
  { id: 'activity', label: 'ACTIVITY' },
  { id: 'guidelines', label: 'ガイドライン' },
  { id: 'sponsors', label: 'SPONSORS' },
  { id: 'magazine', label: 'MAGAZINE' },
  { id: 'faq', label: 'FAQ' },
];

export const newsItems = [
  {
    id: 3, // ※他のリストと数字が被らないように適宜変更してください
    date: '2026.08.28',
    category: 'EVENT',
    title: 'いよいよ明日！8月29日(土)【TSC4000人記念APEXカスタム本戦】開催＆Twitchフロントページ掲載のお知らせ',
    content:
      '5月の予選を勝ち上がった総勢60名が激突する本戦がいよいよ開幕！初のTwitchフロントページ掲載が決定したほか、総額約138,000円分の超豪華な視聴者プレゼントもご用意。過去最高の仕上がりでお届けするこの夏最後の激戦をお見逃しなく！',
    articleId: 'news-003',
  },
  {
    id: 1,
    date: '2026.04.15',
    category: 'IMPORTANT',
    title: 'TSC鯖専用サイト開設',
    content:
      'TSC公式ポータルサイトがついにオープンしました！サーバーのガイドラインや活動記録、運営メンバーのプロフィールなど、TSCに関するあらゆる情報を集約しています。メンバーの皆様にとって使いやすく、外部の方には私たちの魅力をより伝えられる場所を目指していきます。ぜひチェックしてみてください！',
    articleId: 'news-001',
  },
  {
    id: 2,
    date: '2026.05.18',
    category: 'EVENT',
    title: '明日！！5月23、24日！【TSC4000人APEX記念カスタム】開催のお知らせ',
    content:
      'TSCサーバー4000人突破を記念した過去最大規模のAPEXカスタムが、いよいよ5月23日より開幕します！全120名の参加メンバーに加え、豪華視聴者プレゼントや特別動画もご用意。半年間の準備を注ぎ込んだ過去最高の大会をぜひお見逃しなく！',
    articleId: 'news-002',
  },
];

export const memoryItems = [
  {
    id: 'm1',
    type: 'image',
    src: '/tsc-official/kouryuuyousaba.PNG',
    title: 'TSC公式サイトオープン',
  },
  {
    id: 'm2',
    type: 'image',
    src: '/tsc-official/hirokinngupatona.jpg',
    title: '管理者ヒロキングtwitchパートナーへ',
  },
  
  //動画が絶妙にダサかったのでコメントアウトしてます。ただし、例としては残しておきます。動画を追加する場合は、twitchの動画IDを取得して、下記のように記述してください。


  //{
  //  id: 'm3', // または m4 など
  //  type: 'video',
  //  platform: 'twitch', // 👈 ここを twitch にする！
  //  videoId: '2553796570', // 👈 Twitchの動画IDを入れる！
  //  title: 'TSC3000人記念杯', // 👈 動画のタイトルを入れる！
  //},
  
];

// 🌟 1. データの型をアップデート
export interface CreatorProfile {
  id: string;
  name: string;
  image: string;
  // ▼ これを追加！（立ち絵の微調整用データ）
  imageStyle?: {
    scale: number; // 拡大縮小（1が基準。1.2なら120%）
    x: string;     // 横のズレ（例: '20px', '-5%'）
    y: string;     // 縦のズレ（例: '10px', '-20px'）
  };
  scopes: string[]; 
  platforms: { name: string; url: string }[]; 
  description: string; 
}

// 🌟 2. 実際のデータをアップデート
export const recommendedCreators: CreatorProfile[] = [
  {
    id: 'wolf_yarou',
    name: '狼の野郎',
    image: '/tsc-official/ookami.webp', 
    // ▼ ここで「このキャラ専用のベストポジション」を指定します！
    imageStyle: {
      scale: 3,    // ちょっと大きめに表示
      x: '450px',      // 右に10pxズラす
      y: '700px',      // 下に20pxズラす（足が浮いているのを直す等）
    },
    scopes: ['配信者', 'VTuber', 'モデレーター'],
    platforms: [
      { name: 'Twitch', url: 'https://twitch.tv/...' },
      { name: 'YouTube', url: 'https://youtube.com/...' },
      { name: 'X (Twitter)', url: 'https://x.com/...' },
    ],
    description: 'FPSゲームを中心に、リスナーとの距離が近い参加型配信をメインに活動中！コミュニティの盛り上げ役として様々な企画にも顔を出しています。',
  },
  // ... 他のメンバーも同様に追加（調整が不要なキャラは imageStyle を書かなくてもOKです）
  {
    id: 'aruxuxux',
    name: 'あるぅ',
    image: '/tsc-official/aruxu.webp', 
    // ▼ ここで「このキャラ専用のベストポジション」を指定します！
    imageStyle: {
      scale: 2,    // ちょっと大きめに表示
      x: '150px',      // 右に10pxズラす
      y: '600px',      // 下に20pxズラす（足が浮いているのを直す等）
    },
    scopes: ['配信者', 'VTuber', 'モデレーター'],
    platforms: [
      { name: 'Twitch', url: 'https://twitch.tv/...' },
      { name: 'YouTube', url: 'https://youtube.com/...' },
      { name: 'X (Twitter)', url: 'https://x.com/...' },
    ],
    description: 'FPSゲームを中心に、リスナーとの距離が近い参加型配信をメインに活動中！コミュニティの盛り上げ役として様々な企画にも顔を出しています。',
  },
];

export const galleryItems = [
  {
    id: 1,
    image: '/tsc-official/4000playsamune.PNG',
    date: '2026.05.24',
    title: '参加者4000人突破記念！「TSC APEXカスタム 予選」2日間の激闘をプレイバック！',
    category: 'EVENT',
    description:
      '2026年5月23日（土）・24日（日）の2日間にわたり、配信者やクリエイターが集う大人気Discordサーバー「The streamer Creator server」の参加者4,000人突破を記念したAPEXカスタム予選（Aブロック・Bブロック）が開催されました！',
    articleId: 'activity-002',
  },
  {
    id: 2,
    image: '/tsc-official/sss.png',
    date: '2025.08.30',
    title: '第1回 TSC3000人記念杯',
    category: 'TOURNAMENT',
    description:
      '2025年8月30日（土）、配信者やクリエイターが集うDiscordサーバー「The streamer Creator server」の参加者3,000人突破を記念した、特別なAPEXカスタムマッチが開催されました！サーバー設立以来の大きな節目を祝うべく行われた本大会。総勢60名の配信者が参戦し、豪華な演出と驚愕のプレゼント企画で、始終熱気に包まれた当日の様子をレポートをお届けします。',
    articleId: 'activity-001',
  },
];

// data.ts

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

export const faqList = [
  {
    q: '参加に年齢制限はありますか？',
    a: 'Discordの利用規約に基づき、16歳以上であればどなたでも参加可能です！サーバー内で特別な年齢制限ロールなどは設けていませんが、未成年の夜更かしは成長の敵です。夜はしっかり寝て、深夜の雑談に参加するのは18歳になってからの特権にしましょう！',
  },
  {
    q: '配信経験が全くないのですが、参加しても大丈夫ですか？',
    a: 'もちろん大歓迎です！TSCには『これから配信活動を始めてみたい！』という方も多数在籍しています。現在活躍中の配信者さんや、動画編集・イラスト制作などを行うクリエイターさんもたくさんいるので、先輩たちから刺激を受けながら楽しく活動をスタートできる環境が整っています！',
  },
  {
    q: 'サーバー内で他のメンバーにコラボを誘ってもいいですか？',
    a: '大丈夫です！募集チャンネルやVCチャンネルを使って自由に声をかけてください！ただし、執拗な誘いや、断られた後の無理な要求はガイドライン違反となりますのでご注意ください。',
  },
  {
    q: '自分のYouTubeやTwitchの宣伝をしてもいいですか？',
    a: '専用の「宣伝・告知チャンネル」を用意しております。そちらであれば、ご自身の配信開始の通知や、新作動画のアップロード報告を自由に行っていただいて構いません。',
  },
  {
    q: '配信者じゃなくても入れますか？',
    a: 'もちろんです！現在はクリエイター様、モデレーター様、企業様なども多数参加しており、配信者以外の方も活発に活動しております！',
  },
];

export const guidelineList = [
  {
    category: 'コミュニケーション',
    items: [
      '相手のプレイスタイルや価値観を尊重し、否定的な発言は控えましょう。',
      '過度な指示出し（いわゆる指示厨行為）や、求められていないアドバイスは避けましょう。',
      '政治、宗教、極端な思想に関わる話題は、トラブルの元になるため禁止とします。',
    ],
  },
  {
    category: '配信・録画について',
    items: [
      '当サーバーは「配信外で遊ぶ時間」も大切なコンセプトとしています。皆様が安心して過ごせるよう、以下のご協力をお願いします。配信を行う場合：必ず「配信専用のボイスチャンネル」をご利用ください（通常のVCでの配信はNGです）。',
      '初めから配信や録画を予定してボイスチャンネルを利用する場合は、専用の『録画OK・遊び場出入り自由』チャンネルをご利用ください。また、他メンバーの途中参加の可否などについては、必ずチャンネルステータスに明記してください。',
    ],
  },
  {
    category: '禁止事項',
    items: [
      '他者への誹謗中傷、暴言、ハラスメント行為。',
      'サーバー内での出会い目的の利用や、過度なDM（ダイレクトメッセージ）の送信。',
      'チートツール、マクロ、その他ゲームの規約に違反するツールの使用および共有。',
      '運営の指示や警告に従わない行為。',
    ],
  },
];

export const sponsorData = {
  headerTitle: 'Official Sponsors',
  mainTitle: 'Sponsors',
  description:
    'TSCサーバーを応援してくださる企業様をご紹介します。\nメンバー限定の特別価格や、専用のサポートをご提供いただいております。\n詳細はDiscordサーバー内の専用チャンネルをご確認ください。',
  homeSection: {
    title: '協賛企業様について',
    subtitle: '企業様もこのコミュニティに参加されています',
    text: 'TSCサーバーには、私たちの活動に賛同してくださる企業様も参加しています。クリエイターやストリーマーの皆様に向けて、このサーバー独自の特別価格や限定サポートをご提示いただくことも可能です。',

    // 🌟 ここを実際の運用に合わせてアップデート！
    features: [
      {
        title: '協賛企業様からの特別案内', // ※「交流」から実情に合わせたタイトルに微調整しました
        description:
          'ご希望の方を専用サーバーへご案内し、企業担当者様から直接サービスの説明や案内を聞くことができる機会を設けています。有益な情報をキャッチして、活動の幅を広げるきっかけとしてご活用ください。',
      },
      {
        title: 'サーバー限定価格のご案内',
        description:
          'TSC参加者様限定の特別割引や専用プランをご案内しています。現在はクリエイター活動を多角的にサポートする企業様と提携しており、今後はさらにジャンルを問わず、皆さんの活動を支えるパートナーをどんどん増やしていく予定です。日々進化していくTSCのサポート体制にぜひご期待ください！',
      },
    ],
  },
  companies: [
    {
      id: 'sp1',
      category: '動画制作サービス',
      name: '㈱NECOWorks  様',
      description:
        '配信の切り抜きや解説動画、Montageなど、ストリーマー・クリエイターの活動を加速させるハイクオリティな動画制作サービスを提供.TSCメンバー専用の特別割引プランをご用意いただいており、あなたの活動のステップアップを強力にバックアップしてくれます。（※メリットの詳細はdiscord内でチェック！）',
      benefit: 'サーバー限定割引あり',
    },
    {
      id: 'sp2',
      category: 'COMING SOON',
      name: '新規スポンサー様 参画予定！',
      description:
        '現在、TSCのコミュニティ理念に深く共感してくださった新たな企業様と、スポンサーシップに向けたお話しが進行中です。クリエイターの皆様の活動をさらに後押しする、強力で魅力的なサポートを絶賛準備しております。正式な情報解禁を楽しみにお待ちください！',
      benefit: '近日情報解禁',
    },
  ],
  footer: {
    title: '協賛をご検討の企業様へ',
    text: 'TSCでは、コミュニティを共に盛り上げてくださるスポンサー企業様を随時募集しております。お問い合わせフォームよりお気軽にご連絡ください。',
  },
};

export const floatingMemories: never[] = [];

export const articleItems = [
  {
    id: 'news-003',
    category: 'EVENT',
    date: '2026.08.29',
    title: '8月29日(土)20時30分～【TSC鯖4000人記念APEXカスタム本戦】開催＆Twitchフロントページ掲載のお知らせ！！',
    thumbnail: '/tsc-official/4000kessyou.webp',
    content: `5月の予選Aブロック、Bブロックを勝ち上がった総勢60名が本戦大会で頂点を決定！<br>
予選大会から、スポンサー様や運営陣を合わせると総勢170名が関わる、「TSC鯖」過去最大規模のイベント<span class="text-blue-600 font-black text-lg md:text-xl">【TSC4000人記念APEXカスタム】</span>の本戦開催がいよいよ迫る！

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">本戦開催スケジュール</h2>
<b>・日程：8月29日(土) 20:30～</b><br><br>
当日は配信待機画面、カウントダウン、クロスワードクイズ、オープニングムービーから始まり、スポンサー様紹介、チーム紹介、本戦、エンディングムービー、次回予告と盛りだくさん！

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">超豪華！視聴者プレゼント</h2>
カウントダウン後のクロスワードクイズでは、超豪華な視聴者プレゼントが当たるチャンスもあり！<br>
クロスワードクイズは<span class="text-red-500 font-bold bg-red-50 px-2 py-1 rounded">20:45～21:00</span>までになりますので、ぜひ刮目せよ！！<br>
<span class="text-sm text-slate-500">（※賞品はすべて、同額分の「Amazonギフト券」でのお渡しとなります）</span><br><br>
<div class="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
  <ul class="space-y-2 text-slate-800 font-medium">
    <li>・Stream Deck Neo 相当（14,000円×2）＝ <b>28,000円分</b></li>
    <li>・audio-technica AT4040 相当 ＝ <b>40,000円分</b></li>
    <li>・Amazonギフト券（10,000円）＝ <b>10,000円分</b></li>
    <li>・カタログギフト 相当（5,000円×6）＝ <b>30,000円分</b></li>
    <li>・INZONE Buds ワイヤレスイヤホン 相当 ＝ <b>30,000円分</b></li>
  </ul>
  <div class="mt-4 pt-4 border-t border-blue-200 text-center">
    <span class="text-lg font-bold text-blue-700">総額 約138,000円分！</span><br>
    <span class="text-xs text-slate-500">（EA提供ではございません）</span>
  </div>
</div>
<img src="/tsc-official/4000pl.webp" alt="プレゼント企画" class="w-full rounded-2xl my-10 shadow-md" />
<img src="/tsc-official/4000pl2.webp" alt="プレゼント企画" class="w-full rounded-2xl my-10 shadow-md" />

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">Twitchフロントページ掲載！！</h2>
当日は初の<b>Twitchフロントページ掲載</b>も決定！！<br>
いつも応援いただいている皆様も、初見の皆様もたくさんの皆様に、過去最高の仕上がりのカスタムをお届けします！<br><br>

この夏最後の一番ホットな激戦、心血注いだ最大級のカスタムを是非お楽しみに♪<br>
皆様のご参加・ご視聴を心よりお待ちしております。`,
  },
  {
    id: 'news-001',
    category: 'IMPORTANT',
    date: '2026.05.13',
    title: 'TSC公式ポータルサイトがついにオープンしました！',
    thumbnail: '/tsc-official/kouryuuyousaba.PNG',
    content: `ストリーマーとクリエイターのための次世代コミュニティ「TSC」の公式ポータルサイトが、ついに本日オープンいたしました！

今までDiscord内だけで完結していた情報を、外部の方やこれから参加を検討している方にも分かりやすくお伝えできるよう、このサイトを立ち上げました。

【このサイトでできること・見れること】
・TSCサーバーの理念や活動内容の確認
・一部ガイドライン（ルール）の確認
・運営チーム（管理者・サブ管理人）の詳細プロフィール
・過去の大会やイベントの活動ギャラリー
・協賛企業様からのサポート内容のご案内

まだまだコンテンツは拡充中ですが、まずはブックマークに登録していただき、サーバーの最新ニュースをいつでもチェックできるようにしていただければ嬉しいです。

今後のTSCのさらなる発展にご期待ください！
皆様、引き続きよろしくお願いいたします！`,
  },
  {
    id: 'activity-001',
    category: 'TOURNAMENT',
    date: '2025.08.30',
    title: '第1回 TSC3000人記念杯 開催レポート！',
    thumbnail: '/tsc-official/sss.png',
    content: `2025年8月30日（土）、配信者やクリエイターが集うDiscordサーバー「The streamer Creator server」の参加者<span class="text-blue-600 font-black text-xl md:text-2xl">3,000人突破</span>を記念した、特別なAPEXカスタムマッチが開催されました！<br><br>
サーバー設立以来の大きな節目を祝うべく行われた本大会。総勢60名の配信者が参戦し、豪華な演出と驚愕のプレゼント企画で、始終熱気に包まれた当日の様子をレポートをお届けします。

<!-- 🌟 途中の挿絵（イベントの全体風景やロゴなどを想定） -->
<img src="/tsc-official/3000_3.webp" alt="イベント風景" class="w-full rounded-2xl my-10 shadow-md" />

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">豪華演出で祭典の幕を開け！</h2>
カウントダウンクイズ動画から始まり、記念大会にふさわしい圧倒的なクオリティーの豪華なオープニング映像演出でスタートしました。<br><br>
大会終わりのエンディング動画も含め、七皇の剣メンバー、<b>りき狐りき子氏</b>による完全オリジナル制作。プロフェッショナルな映像美が、参加者と視聴者の期待を一気に高めました。また、全20チーム60名のメンバー紹介や、本大会を支えてくださったスポンサー様紹介も丁寧に行われ、一人ひとりが主役になれる、まさに「配信者・クリエイターサーバー」らしい愛の詰まった運営が印象的でした。

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">コミュニティが一体となった「ライブビューイング」</h2>
当日は配信画面だけでなく、Discordサーバー内のボイスチャットも大盛り上がり！ 多くのメンバーが集まり、リアルタイムで戦況を見守る<span class="font-bold text-slate-900">「ライブビューイング」</span>が実施されました。<br><br>
ナイスプレイには歓喜の声が上がり、惜しい場面ではため息が漏れる。サーバー内での結束力がより一層深まり、最高の交流の場となりました。

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">総額45万円超え！豪華視聴者プレゼントでコメント欄も熱狂</h2>
本大会の目玉の一つが、<span class="text-red-500 font-black text-xl">総額45万円を超える</span>という桁外れの視聴者プレゼント企画です。<br><br>
豪華な景品が発表されるたびに、配信のコメント欄は驚きと喜びのメッセージで埋め尽くされました。プレイヤーだけでなく、視聴者も一緒に「お祭り」を楽しめる仕掛けが、大会の活気をさらに押し上げていました。

<!-- 🌟 途中の挿絵（プレゼント企画の画像や熱狂するチャットの様子などを想定） -->
<img src="/tsc-official/3000_7_2.webp" alt="プレゼント企画" class="w-full rounded-2xl my-10 shadow-md" />
<img src="/tsc-official/3000_7.webp" alt="プレゼント企画" class="w-full rounded-2xl my-10 shadow-md" />

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">激戦を制した優勝チームは…？</h2>
ハイレベルな攻防が繰り広げられた戦場を勝ち抜き、見事栄冠に輝いたのは……<br><br>
<h2 class="text-center font-black mt-16 mb-12">
  <!-- 飾り文字（少し小さくして上品に） -->
  <span class="block text-lg md:text-xl text-slate-500 tracking-widest mb-2">
    しゅらら率いる
  </span>
  
  <!-- チーム名（メイン！色をつけてメリハリを出す） -->
  <span class="block text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-snug text-balance">
    シン・太陽神ゴットサンシャインジャスティスの魂！
  </span>
</h2>
<!-- 🌟 優勝チーム発表の特別ハイライトボックス -->
<img src="/tsc-official/3000_4.webp" alt="優勝チーム" class="w-full rounded-2xl my-10 shadow-md" />

チームワークと個々のスキルが光る、素晴らしい立ち回りで大会を制しました！

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">配信最大同時接続数を更新！大成功のフィナーレ</h2>
今回のカスタムマッチは、大きなトラブルもなく、極めてスムーズに進行しました。<br>
その結果、配信での<b>最大同時接続数も見事に更新</b>。数字としても、コミュニティの熱量としても、過去最大級の成功を収めることができました。<br><br>
主催の七皇の剣（ヒロキング氏）を中心に、参加者、運営スタッフ、スポンサー、そして視聴者の皆様が一体となって作り上げたこの「3000人記念APEXカスタム」。The streamer Creator serverは、これからも配信者・クリエイターたちが繋がり、輝ける場所として歩み続けます。<br><br>
参加された皆様、本当にお疲れ様でした！

<!-- 🌟 最後の「イベント概要」をリッチなカードデザインで配置 -->
<div class="bg-slate-50 border border-slate-200 rounded-2xl p-8 mt-16 shadow-sm">
  <h3 class="text-xl font-black text-slate-900 mb-6 border-b border-slate-200 pb-4">📌 イベント概要まとめ</h3>
  <ul class="space-y-4 text-slate-700 font-medium text-sm md:text-base">
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">イベント名</span><span>The streamer Creator server 3000人記念APEXカスタム</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">開催日</span><span>2025年8月30日（土）</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">参加規模</span><span>20チーム 60名</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">主催・運営</span><span>七皇の剣</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">映像制作</span><span>七皇の剣</span></li>
  </ul>
</div>`,
  },
  {
    id: 'activity-002',
    category: 'TOURNAMENT',
    date: '2026.05.24',
    title: '参加者4000人突破記念！「TSC APEXカスタム 予選」2日間の激闘をプレイバック！',
    thumbnail: '/tsc-official/4000playsamune.PNG',
    content: `2026年5月23日（土）・24日（日）の2日間にわたり、配信者やクリエイターが集う大人気Discordサーバー「The streamer Creator server」の参加者<span class="text-blue-600 font-black text-xl md:text-2xl">4,000人突破</span>を記念したAPEXカスタム予選（Aブロック・Bブロック）が開催されました！<br><br>
3000人記念大会からさらに規模が拡大し、今回は2日間で合計40チーム・120名の配信者が参戦！8月29日（土）に行われる「本戦」への切符（各ブロック上位10チーム・計20チーム）をかけた、熱すぎる予選の模様をお届けします。

<!-- 🌟 途中の挿絵 -->
<img src="/tsc-official/4000_play5.webp" alt="Aイベント風景" class="w-full rounded-2xl my-10 shadow-md" />
<img src="/tsc-official/4000_play4.webp" alt="Bイベント風景" class="w-full rounded-2xl my-10 shadow-md" />
<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">2日間連続の豪華演出で開幕！</h2>
今回の予選は、AブロックとBブロックで異なるオリジナル映像を用意！<br><br>
カウントダウン、オープニング、エンディングにいたるまで、すべて主催の<b>七皇の剣</b>が完全新規でオリジナル制作。連日参加・視聴するファンを飽きさせない圧倒的なこだわりで大会を彩りました。全チームのメンバー紹介も丁寧に行われ、画面越しからも伝わる熱気とともに、2日間にわたる大祭典の幕が上がりました。

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">【予選Aブロック】圧倒的火力と“拳”のドラマ（5月23日）</h2>
途中で配信が途切れてしまうアクシデントもありつつも、それを吹き飛ばすほどの凄まじい名勝負が連発しました！<br><br>
<b>🔥 怒涛の2連チャン（19キル＆17キル）</b><br>
第一試合・第二試合では、リーダー「もの」氏率いる「ファイトマシマシ～ダウン多め、コール少なめ」が圧倒的なガンファイトを展開！第一試合で19キル、第二試合で17キルという破格のキル数を叩き出し、圧巻の2連続チャンピオンを獲得しました。<br><br>
<b>🥊 武器禁止！“拳”で制した肉弾戦</b><br>
特殊ルール（武器禁止マッチ）となった第四試合・第五試合では、リーダー「あるーるん」氏率いる「あるある探検隊～頂をいただきに来た漢達～」が熱い殴り合いを制して2連続チャンピオンを獲得！<br><br>
結果、特殊ルール戦での怒涛の巻き返しで見事102ptという大差をつけた<b>「あるある探検隊～頂をいただきに来た漢達～」</b>がAブロック優勝を飾りました！
<img src="/tsc-official/4000_play3.webp" alt="Bブロック優勝の様子" class="w-full rounded-2xl my-10 shadow-md" />
<b>また白熱した試合の結果はこちらになります！</b><br>
<img src="/tsc-official/4000_play7.webp" alt="優勝者の様子" class="w-full rounded-2xl my-10 shadow-md" />

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">【予選Bブロック】大混戦を制したドラマチックな結末（5月24日）</h2>
翌日行われたBブロックは、まさに最後まで展開が読めない大波乱の展開となりました。<br><br>
<b>ぶるちゃっぴー氏の凄腕4タテ！</b><br>
第二試合・第三試合では、リーダー「こゆびさま」氏率いる「ぶるちゃっぽんさま2」が2連続チャンピオンを獲得！特にぶるちゃっぴー氏がダブルタップオルタネーターで魅せた華麗な「4タテ」には、コメント欄も大歓喜となりました。<br><br>
<b>怒涛の追撃を見せた社会人チーム</b><br>
対する第四試合・第五試合では、リーダー「しゃっちくさく」氏率いる「社会の歯車」が連勝を飾り、チャンピオンを連続奪取！

<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">Bブロックを制したのは…？</h2>
2強の激突となり、どちらのチームが頂点に立つのか誰もが固唾をのんで見守る中……総合ポイントで見事Bブロック優勝を勝ち取ったのはこちら！<br><br>
<img src="/tsc-official/4000_play1.webp" alt="優勝者の様子" class="w-full rounded-2xl my-10 shadow-md" />

「からあげ護衛隊」でした！！最後まで諦めない立ち回りが実を結ぶ、見事な逆転劇となりました！
<b>また白熱した試合の結果はこちらになります！</b><br>
<img src="/tsc-official/4000_play6.webp" alt="優勝者の様子" class="w-full rounded-2xl my-10 shadow-md" />
<h2 class="text-2xl md:text-3xl font-black text-slate-900 mt-16 mb-8 pl-4 border-l-4 border-blue-600">いざ、8月29日（土）の本戦へ！</h2>
予選Aブロック・Bブロックを勝ち抜いた猛者20チームが、ついに8月の「本戦」で一堂に会します。<br>
アクシデントを乗り越え、チームメンバー同士の絆と熱量がさらに深まった素晴らしい2日間となりました。参加された選手の皆様、長時間の配信を見守った視聴者の皆様、本当にお疲れ様でした！<br><br>
本戦まであと少し。さらなる高みへ――プルスウルトラ！
<img src="/tsc-official/4000_play2.webp" alt="試合の様子" class="w-full rounded-2xl my-10 shadow-md" />
<!-- 🌟 最後の「イベント概要」をリッチなカードデザインで配置 -->
<div class="bg-slate-50 border border-slate-200 rounded-2xl p-8 mt-16 shadow-sm">
  <h3 class="text-xl font-black text-slate-900 mb-6 border-b border-slate-200 pb-4">📌 イベント概要まとめ</h3>
  <ul class="space-y-4 text-slate-700 font-medium text-sm md:text-base">
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">イベント名</span><span>The streamer Creator server 4000人記念APEXカスタム 予選</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">開催日</span><span>【予選Aブロック】2026年5月23日（土）<br>【予選Bブロック】2026年5月24日（日）</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">参加規模</span><span>各日20チーム 60名（計120名）</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">主催・運営</span><span>七皇の剣</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">映像制作</span><span>七皇の剣</span></li>
    <li class="flex flex-col md:flex-row"><span class="md:w-32 font-bold text-slate-400 shrink-0">本戦日程</span><span>2026年8月29日（土）20:30開始</span></li>
  </ul>
</div>`,
  },
  {
    id: 'news-002',
    category: 'EVENT',
    date: '2026.05.18',
    title: '明日！！【TSC4000人APEX記念カスタム】開催のお知らせ',
    thumbnail: '/tsc-official/4000_play5.webp',
    content: `全チーム参加メンバー累計120名！スポンサー様や運営陣を合わせると総勢170名が関わる、TSC過去最大規模のイベント【TSC4000人APEX記念カスタム】がいよいよ開幕します！

X（旧Twitter）掲載用の特別なプロモーション動画も作成しておりますので、当日のオープニングとは一味違う映像をぜひご覧ください！（※拡散大希望です！）

【開催スケジュール】
■ 予選 Aブロック
・日程：5月23日(土) 20:50～
※リーダー枠は20:30集合

■ 予選 Bブロック
・日程：5月24日(日) 20:30～
※リーダー枠は20:30集合

■ 本戦
・日程：8月29日(土) 20:45～
Aブロック・Bブロックの上位10チームずつ（計20チーム）が本戦への出場権を獲得します！本戦開始前には、カウントダウンおよび視聴者プレゼント企画を実施します。

【動画コンテンツ】
予選・本戦ともに、皆様に楽しんでいただける特別な映像をご用意しています。

《予選》
・特別オープニング動画⟡.（※エンディングは本戦のみとなります）

《本戦》
・カウントダウン動画
・視聴者プレゼントクロスワード動画
・本戦用特別オープニング動画
・本戦用特別エンディング動画（スポンサー様もご紹介いたします）
※もちろん、本戦を戦い抜く出場者の皆様に向けた豪華賞品も別途ご用意しております！

【超豪華！視聴者プレゼント】
半年間の取り組み期間を経て、過去最大規模のプレゼントをご用意しました！
（※賞品はすべて、同額分の「Amazonギフト券」でのお渡しとなります）

・Stream Deck Neo 相当（14,000円×2）＝ 28,000円分
・audio-technica AT4040 相当 ＝ 40,000円分
・INZONE Buds ワイヤレスイヤホン 相当 ＝ 30,000円分
・カタログギフト 相当（5,000円×6）＝ 30,000円分
・Amazonギフト券（10,000円×2）＝ 20,000円分

総額 約148,000円分！

僕らの出せる全てをここに注ぎます。
過去最高の仕上がりを、ぜひ刮目してください。

APEXカスタムの魅力を、少しでも多くの方へ届けたい。
更に向こうへ、Plus ultra！皆様のご参加・ご視聴を心よりお待ちしております。`,
  },
];

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
    mobileOffsetX: 0,
    mobileOffsetY: 170,
    mobileScale: 2,

     // 👇 ヘッダー用（眼だけカットイン用）の設定
    headerPosition: 'center 10%', // ベースの位置
    headerScale: 2,             // 画像をズームアップする（例：1.5倍）
    headerX: 500,                  // 右に30pxずらす
    headerY: 100,                 // 上に20pxずらす

    catchphrases: ['王冠を戴き、誰もが笑える温かい居場所を創り出す。', '毎夜二十二時半に降臨する、愛嬌たっぷりの王子様。'],
    // 🌟 右側に並べるグリッド情報
// 👑 ヒロキングさんのプロフィールグリッド（ここから必要なものをピックアップ）
    profileGrid: [
      { label: 'ロール', value: 'TSC代表 / Twitchパートナー' },
      { label: 'メイン活動', value: 'APEX、ホラーゲーム、雑談' },
      { label: '配信時間', value: 'Twitchにて 毎日22:30〜' },
      { label: 'プラットフォーム', value: 'Twitch（ライブ） / YouTube（Shorts）' },
      { label: '誕生日', value: '3月6日' },
      { label: 'ファンマーク', value: '👑🩵' },
      { label: 'ファンアート', value: '#キングのお絵描き' },
      { label: '活動理念', value: '活動者同士が繋がれる居場所作り' }
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
    id: 'creator_02',
    name: '雪羽かよ',
    romanName: 'yukihanekayo',
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
    mobileOffsetX: 0,
    mobileOffsetY: 170,
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

    // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
    offsetX: 50,
    offsetY: 220,
    scale: 1.7, // 👈 2倍の大きさに！
    mobileOffsetX: 0,
    mobileOffsetY: 170,
    mobileScale: 2,

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
    mobileOffsetX: 0,
    mobileOffsetY: 170,
    mobileScale: 2,

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
    mobileOffsetX: 0,
    mobileOffsetY: 170,
    mobileScale: 2,


   // 👇 ヘッダー用（眼だけカットイン用）の設定
    headerPosition: 'center 50%', // ベースの位置
    headerScale: 2,             // 画像をズームアップする（例：1.5倍）
    headerX: 500,                  // 右に30pxずらす
    headerY: 100,                 // 上に20pxずらす

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
    mobileOffsetY: 170,
    mobileScale: 2,

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

    // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
    offsetX: 100,
    offsetY: 500,
    scale: 1.2, // 👈 2倍の大きさに！
    mobileOffsetX: 0,
    mobileOffsetY: 170,
    mobileScale: 2,

    // 👇 ヘッダー用（眼だけカットイン用）の設定
    headerPosition: 'center 10%', // ベースの位置
    headerScale: 3,             // 画像をズームアップする（例：1.5倍）
    headerX: 200,                  // 右に30pxずらす
    headerY: -180,                 // 上に20pxずらす
    //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
    bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
    bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
    bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

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
    mobileOffsetX: 0,
    mobileOffsetY: 170,
    mobileScale: 2,

    // 👇 ヘッダー用（眼だけカットイン用）の設定
    headerPosition: 'center 38%', // ベースの位置
    headerScale: 3,             // 画像をズームアップする（例：1.5倍）
    headerX: 600,                  // 右に30pxずらす
    headerY: -200,                 // 上に20pxずらす
    //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
    bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
    bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
    bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

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
    mobileOffsetY: 170,
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
    offsetY: 520,
    scale: 1.8, // 👈 2倍の大きさに！
    mobileOffsetX: 0,
    mobileOffsetY: 170,
    mobileScale: 2,

    // 👇 ヘッダー用（眼だけカットイン用）の設定
    headerPosition: 'center -10%', // ベースの位置
    headerScale: 1.3,             // 画像をズームアップする（例：1.5倍）
    headerX: 200,                  // 右に30pxずらす
    headerY: -10,                 // 上に20pxずらす
    //後ろのキャラクターの背景画像を調整する場合は、以下の値を変更してください
    bgFaceX: -400,    // 🌟 プラスにすると「右」へ、マイナスにすると「左」へ移動
    bgFaceY: -200,   // 🌟 プラスにすると「下」へ、マイナスにすると「上」へ移動
    bgFaceScale: 0.8, // 🌟 大きさを変えたい場合（1.1倍など）

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
    mobileOffsetY: 170,
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
    id: 'creator_12',
    name: 'よるねるか',
    romanName: 'yoruneruka (1).webp',
    role: 'Streamer',
    image: '/tsc-official/yoruneruka (1).webp', 
    headerImage: '/tsc-official/yorunerujaitimaie.webp',  // 🌟 ネームヘッダー専用に切り抜いた画像（任意）
    // 🌟 ミリシタ風の縦書きキャッチコピー（配列で複数行対応）
    // 🌟 これを追加！好きな色コード（HEX）を入れてください
    // 例：青系なら '#3B82F6'、赤系なら '#EF4444'、紫なら '#A855F7' など
    themeColor: '#cd98ff',

    // 🌟 これらをドーンと追加！（PROFILEで設定していた数値と同じでOKです）
    offsetX: 120,
    offsetY: 10,
    scale: 1.2, // 👈 2倍の大きさに！
    mobileOffsetX: 0,
    mobileOffsetY: 170,
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
