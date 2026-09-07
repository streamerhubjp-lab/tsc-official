import { news003 } from './articles/news-003';
import { news001 } from './articles/news-001';
import { activity001 } from './articles/activity-001';
import { activity002 } from './articles/activity-002';
import { news002 } from './articles/news-002';

const rawArticles = [
  news003,
  news001,
  activity001,
  activity002,
  news002,
];

// 各記事内の日付（date: "2026.08.29"）を比較して新しい順（降順）に自動で並び替える
export const articleItems = [...rawArticles].sort((a, b) => {
  return new Date(b.date.replace(/\./g, '/')).getTime() - new Date(a.date.replace(/\./g, '/')).getTime();
});