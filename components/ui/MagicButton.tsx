import React from 'react';

interface ButtonText{
    text: string;
    icon: React.ReactNode;
    iconPosition: string;
    handleClick? : ()=>void;
    style? : string;
}

export default function MagicButton({text, icon, iconPosition, handleClick, style}: ButtonText) {
  return (
    <>
      {/* <button 
        className={`shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-3 bg-[#fff] text-[#696969] rounded-md transition duration-200 ease-linear flex items-center gap-2 ${style}`}
        onClick={handleClick}
      >
        
      </button> */}
      <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] " onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white backdrop-blur-3xl">
          {iconPosition === "left" && icon}
            {text}
          {iconPosition === "right" && icon}
        </span>
      </button>
    </>
  );
}
