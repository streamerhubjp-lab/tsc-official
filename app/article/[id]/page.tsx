import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// 🌟 修正①：本物のデータ名「articleItems」を読み込む
import { articleItems } from "../../data";

export function generateStaticParams() {
  // 🌟 修正②：articleItems.map に変更
  return articleItems.map((article) => ({
    id: article.id,
  }));
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  // 🌟 修正③：articleItems.find に変更
  const article = articleItems.find((a) => a.id === params.id);

  if (!article) {
    return (
      <div className="pt-40 text-center font-bold text-slate-400 h-screen">
        記事が見つかりませんでした。
      </div>
    );
  }

  return (
    <section className="pt-32 md:pt-40 pb-32 px-4 md:px-6 bg-slate-50 min-h-screen relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* BACK TO HOME リンク */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-sm tracking-widest transition-colors group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO HOME
        </Link>

        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          
          {/* サムネイル画像 */}
          {article.thumbnail && (
            <div className="w-full relative rounded-t-3xl overflow-hidden bg-slate-50">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-auto relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20 pointer-events-none mix-blend-multiply" />
            </div>
          )}

          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
              
              {/* 左カラム：情報 */}
              <div className="lg:w-1/3 shrink-0">
                <div className="sticky top-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-bold tracking-widest text-slate-400">
                      {article.date}
                    </span>
                    <span className="text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-slate-200 bg-transparent text-slate-500">
                      {article.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
                    {article.title}
                  </h1>
                  <div className="h-[2px] w-12 bg-slate-800 rounded-full mb-10" />
                </div>
              </div>

            {/* ▼ 右カラム：本文とシェアボタン ▼ */}
              <div className="lg:w-2/3">
                {/* 🌟 修正①： `whitespace-pre-wrap` を削除（HTMLタグの無駄な余白を防ぐため） */}
                <div 
                  className="text-slate-700 leading-loose font-medium text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">
                    Share this article
                  </span>
                  {/* 🌟 修正②：シェア先のURLを「個別記事のURL」に変更！ */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title + ' | TSC Official')}&url=${encodeURIComponent(`https://streamerhubjp-lab.github.io/tsc-official/article/${article.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-3 bg-slate-900 hover:bg-black text-white text-sm font-bold rounded-full transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.08 4.126H5.117z" />
                    </svg>
                    <span>Post on X</span>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}