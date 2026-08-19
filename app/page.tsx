import UltimateCommunitySite from './UltimateCommunitySite';
// 👇 1. スプレッドシートの代わりに、先ほど作った data.ts から直接データを引っこ抜く！
// （※ data.ts の場所に合わせてパス './data' は微調整してください）
import { newsItems, articleItems, galleryItems } from './data';

export const metadata = {
  title: 'TSC Official | The Streamer Creator Server',
  description: 'The Streamer Creator Server Official Portal Site',
};

// 外部と通信しないので async は外しました
export default function Page() {
  // 2. data.ts 側で既にキレイな形になっているので、配列を整える処理（.map）はもう不要です！

  // 3. 準備できたデータを「主役（UltimateCommunitySite）」にドカンと渡す！
  return (
    <UltimateCommunitySite 
      dynamicNews={newsItems} 
      dynamicArticles={articleItems} 
      dynamicGallery={galleryItems} 
    />
  );
}
