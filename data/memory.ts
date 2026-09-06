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

export const floatingMemories: never[] = [];