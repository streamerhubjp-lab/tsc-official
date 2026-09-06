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