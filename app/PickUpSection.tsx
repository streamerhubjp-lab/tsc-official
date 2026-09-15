import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { monthlyPickups } from '@/data'; 

export default function PickUpSection() {
  const [activeMonth, setActiveMonth] = useState("2026年8月");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentMonthData = monthlyPickups?.[activeMonth as keyof typeof monthlyPickups];
  // 🌟 データがない場合（空っぽの場合）は undefined になります
  const activeCreator = currentMonthData?.[selectedIndex];
  const allMonths = Object.keys(monthlyPickups || {});

  const handleMonthChange = (month: string) => {
    setActiveMonth(month);
    setSelectedIndex(0);
    setIsDropdownOpen(false);
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] bg-[#FAFAFA] overflow-hidden flex flex-col">
      
      {/* =========================================
          1. 背景レイヤー（常に表示）
      ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full bg-[#f1f5f9] origin-bottom-left transform -skew-x-[20deg] border-l border-white shadow-[-20px_0_40px_rgba(0,0,0,0.02)]" />
        <div className="hidden lg:block absolute top-0 right-[-10%] w-[30%] h-full bg-white opacity-40 origin-bottom-left transform -skew-x-[20deg]" />
        <div className="block lg:hidden absolute bottom-0 left-0 w-full h-[60%] bg-[#f1f5f9] border-t border-white" />

        {/* ランダム配置の黒色斜めタイル装飾（濃くしました！） */}
        <div className="absolute top-[15%] left-[-5%] w-[30%] h-[40px] bg-slate-900 opacity-[0.15] transform -skew-x-[25deg]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[15px] bg-slate-800 opacity-[0.2] transform -skew-x-[25deg]" />
        <div className="absolute top-[50%] left-[20%] w-[8%] h-[8px] bg-black opacity-[0.3] transform -skew-x-[25deg]" />
        <div className="absolute top-[25%] right-[25%] w-[15%] h-[60px] bg-slate-900 opacity-[0.1] transform -skew-x-[25deg]" />

        {/* 🌟 キャラクターがいる時だけ背景透かしを表示 */}
        {activeCreator && (
          <>
            <motion.img
              key={`bg-${activeCreator.id}`}
              initial={{ opacity: 0, x: -20, scale: 1.05 }}
              animate={{ opacity: 0.05, x: 0, scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={activeCreator.image}
              className="absolute -left-[20%] lg:-left-[5%] top-[5%] w-auto h-[90%] object-cover grayscale origin-top-left"
            />
            <motion.div
              key={`textbg-${activeCreator.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.03, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-[25%] lg:top-[40%] right-[-10%] lg:right-[5%] text-[8rem] lg:text-[15rem] font-black text-slate-900 leading-none tracking-tighter select-none"
            >
              {activeCreator.romanName.split(' ')[0]}
            </motion.div>
          </>
        )}
      </div>

      {/* =========================================
          2. 左上：タイトル ＆ ドロップダウンメニュー（常に表示）
      ========================================= */}
      <div className="absolute top-4 left-4 lg:top-8 lg:left-10 z-40 flex flex-col gap-2 lg:gap-4 pointer-events-auto">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="w-6 lg:w-16 h-[2px] bg-slate-800" />
          <h2 className="text-xl lg:text-3xl font-serif text-slate-800 tracking-widest drop-shadow-sm">
            PickUp Streamers / Creators
          </h2>
        </div>
        
        <div className="relative ml-8 lg:ml-20 mt-1">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 text-sm lg:text-base font-bold text-slate-800 tracking-widest bg-white/50 backdrop-blur-sm border border-slate-300 px-4 py-2 hover:bg-white transition-colors shadow-sm"
          >
            {activeMonth}
            <span className={`text-[10px] transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl z-50 overflow-hidden"
              >
                {allMonths.map((month) => (
                  <button
                    key={month}
                    onClick={() => handleMonthChange(month)}
                    className={`w-full text-left px-5 py-3 text-sm font-bold tracking-widest transition-colors ${
                      activeMonth === month 
                        ? 'bg-slate-800 text-white' 
                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================
          3. メインコンテンツ（データ有無で切り替え）
      ========================================= */}
      {activeCreator ? (
        <>
          <div className="relative z-20 w-full h-full flex flex-col lg:flex-row pt-[90px] lg:pt-0 pointer-events-none">
            {/* 左側：立ち絵エリア */}
            <div className="w-full h-[40%] lg:w-[45%] lg:h-full relative flex justify-center items-end pb-0 lg:pb-0">
              <motion.div
                key={`char-wrap-${activeCreator.id}`}
                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 w-full h-[100%] lg:h-[95%] flex justify-center items-end pointer-events-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              >
                <motion.img
                  src={activeCreator.image}
                  alt={activeCreator.name}
                  className="w-auto h-full object-contain origin-bottom"
                  animate={{ 
                    x: activeCreator.adjustX || "0%", 
                    y: activeCreator.adjustY || "0%", 
                    scale: activeCreator.adjustScale || 1 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
            </div>

            {/* 右側：詳細テキストエリア */}
            <div className="w-full h-[60%] lg:w-[55%] lg:h-full flex flex-col justify-center px-6 lg:px-16 pb-20 lg:pb-0 overflow-y-auto pointer-events-auto custom-scrollbar">
              <motion.div
                key={`info-${activeCreator.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-2xl mx-auto lg:mx-0"
              >
                <div className="flex items-center mb-2">
                  <span className="text-xs lg:text-sm font-bold text-slate-500 tracking-widest">
                    {activeCreator.feature}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-slate-800 mb-0 lg:mb-1 tracking-tight leading-none">
                  {activeCreator.name}
                </h3>
                
                <p className="text-sm lg:text-lg font-bold text-slate-400 tracking-[0.2em] lg:tracking-[0.3em] uppercase mb-4 lg:mb-6 flex items-center gap-2">
                  <span className="text-[10px] lg:text-xs text-slate-300">{activeCreator.romanName}</span> 
                </p>

                <div className="w-full max-w-sm h-[1px] bg-slate-300 mb-4 lg:mb-6 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute left-0 top-0 h-full" 
                    style={{ backgroundColor: activeCreator.themeColor }} 
                  />
                </div>

                <p className="text-xs sm:text-sm lg:text-base text-slate-700 font-bold leading-relaxed lg:leading-loose text-justify max-w-xl">
                  {activeCreator.reason}
                </p>
              </motion.div>
            </div>
          </div>

          {/* 右下：キャラクターセレクター */}
          <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-12 z-50 flex gap-1.5 lg:gap-3 pointer-events-auto">
            {currentMonthData.map((creator, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <button
                  key={creator.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative w-[48px] h-[30px] lg:w-[80px] lg:h-[48px] transform -skew-x-[25deg] overflow-hidden transition-all duration-300 ${isActive ? 'w-[70px] lg:w-[100px] shadow-lg' : 'opacity-60 hover:opacity-100'}`}
                  style={{
                    border: isActive ? `2px solid ${creator.themeColor}` : '2px solid transparent',
                    backgroundColor: isActive ? 'white' : '#cbd5e1'
                  }}
                >
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="absolute inset-0 w-[150%] h-[150%] max-w-none object-cover transform skew-x-[25deg] -translate-x-[15%] -translate-y-[15%] transition-all duration-300"
                    style={{
                      objectPosition: 'center top',
                      filter: isActive ? 'grayscale(0%)' : 'grayscale(100%) brightness(0.8)'
                    }}
                  />
                  {isActive && (
                    <div 
                      className="absolute inset-0 mix-blend-overlay opacity-20"
                      style={{ backgroundColor: creator.themeColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </>
       ) : (
        /* 🌟 データが無い場合の「COMING SOON」画面（明朝体＆タイトル共通デザイン版） */
        <div className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center px-4 text-center"
          >
            {/* タイトルの短い横棒とお揃いのアクセント */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 lg:w-12 h-[2px] bg-slate-400" />
              <span className="text-xs lg:text-sm font-serif text-slate-400 tracking-[0.3em] uppercase">
                Archive
              </span>
              <div className="w-8 lg:w-12 h-[2px] bg-slate-400" />
            </div>

            {/* あの大好きな「明朝体の文字の形」を適用！ */}
            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-slate-700 tracking-widest mb-4 drop-shadow-sm">
              COMING SOON
            </h3>

            <div className="w-12 h-[1px] bg-slate-300 mb-4" />

            <p className="text-xs lg:text-sm font-serif text-slate-500 tracking-widest">
              次回のアップデートをお待ちください
            </p>
          </motion.div>
        </div>
      )}

    </section>
  );
}
