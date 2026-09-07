import { adminList } from './admins';

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

// ＝ 管理人・副管理人の動的カウント処理 ＝
const adminCount = adminList.filter((item) => item.isMainAdmin === true).length;
const subAdminCount = adminList.length - adminCount;

// ==========================================
// ⭐ 運営チーム（ABOUT）データ
// ==========================================
export const collectiveData = {
  image: '/tsc-official/syuugoutatie.PNG', // ※実際の画像パスに直してくださいね
  adminCount,
  subAdminCount,
  get totalCount() {
    return this.adminCount + this.subAdminCount;
  },
  title: '管理者・サブ管理人',
  subtitle: 'Admins & Sub-Admins',
  mainMessage: 'あなたの活動をサポートします。',
  description: [
    'TSCサーバーでは、${this.adminCount}名の管理人と${this.subAdminCount}名のサブ管理人、計${this.totalCount}名の運営チームが日々サーバーの治安維持と環境アップデートに努めています。',
    '「Discordサーバーに参加するのは初めてで不安…」「もしトラブルがあったらどうしよう…」という方でも心配いりません。皆さんが安心して楽しく活動できるよう、しっかりとサポートする体制を整えています。',
  ],
};