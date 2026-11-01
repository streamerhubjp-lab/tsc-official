import { pickups202611 } from './creators/2026-11';
// 新しい月が増えたらここに追加インポート
// import { pickups202612 } from './creators/2026-12';
// import { pickups202701 } from './creators/2027-01';

// 🌟 最新月が配列の先頭（[0]）に来るように並べる
const monthlyList = [
//  pickups202701, // 1月を追加したらここを先頭にする
//  pickups202612, // 12月を追加したらここを先頭にする
  pickups202611,
];

// 既存の型に合わせた辞書オブジェクトを生成
export const monthlyPickups: Record<string, any[]> = monthlyList.reduce((acc, item) => {
  acc[item.month] = item.creators;
  return acc;
}, {} as Record<string, any[]>);

// 🌟 最新の月名（配列の一番最初）を自動取得してエクスポート
export const latestMonth = monthlyList[0]?.month || "2026年11月";