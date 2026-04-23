import React from 'react';
import imgBurberry from "figma:asset/cbaeb6ae2d19647445308b3f2fb403c0a3f5c9d6.png";

interface BasketPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BasketPopup({ isOpen, onClose }: BasketPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-[calc(100%+10px)] z-[1000] w-[350px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.15)] rounded-[4px] border border-[#E5E5E5] flex flex-col font-['Inter',sans-serif] translate-x-[20px]">
      {/* Popover Arrow */}
      <div className="absolute -top-[10px] right-[40px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white filter drop-shadow(0 -1px 0 #E5E5E5)"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-[#F5F5F5]">
        <span className="text-[16px] font-['Inter:Bold',sans-serif] font-bold text-black">Basket</span>
        <button onClick={onClose} className="text-[12px] font-['Inter:Medium',sans-serif] text-[#1D63B9] hover:underline cursor-pointer">View all</button>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 max-h-[500px] overflow-y-auto">
        <div className="text-[11px] font-['Inter:Medium',sans-serif] font-medium text-[#757575] mb-4 uppercase tracking-wider">Get It Shipped</div>
        
        {/* Item Row */}
        <div className="flex gap-4 mb-4">
          <div className="w-[64px] h-[64px] shrink-0 border border-[#F0F0F0] rounded-[2px] overflow-hidden flex items-center justify-center p-1">
            <img src={imgBurberry} alt="product" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 flex flex-col min-w-0">
            <div className="flex justify-between items-start gap-2 mb-0.5">
              <div className="flex flex-col min-w-0">
                <span className="text-[12px] font-['Inter:Bold',sans-serif] font-bold text-black uppercase tracking-tight">BURBERRY</span>
                <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#1A1A1A] leading-tight line-clamp-2 mt-0.5">Her Elixir de Parfum with Dark Red Berries, Jasmine & Vanilla</span>
              </div>
              <span className="text-[13px] font-['Inter:Bold',sans-serif] font-bold text-black shrink-0">$182.00</span>
            </div>
            <div className="text-[11px] font-['Inter:Regular',sans-serif] text-[#666] leading-[14px]">Size - 1.6 OZ / 50 ML</div>
            <button className="text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1D63B9] hover:underline mt-2 w-max">Move to Loves</button>
          </div>
        </div>

        <div className="h-px bg-[#F5F5F5] w-full my-3"></div>

        {/* Subtotal */}
        <div className="flex justify-between items-center py-2 mb-2">
          <span className="text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-black">Subtotal (1 item)</span>
          <span className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">$182.00</span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#CF112C] hover:bg-[#A30000] text-white font-['Inter:Bold',sans-serif] font-bold py-3.5 rounded-full text-[14px] mt-2 transition-colors shadow-sm">
          View Basket & Checkout
        </button>

        {/* Footer Info */}
        <div className="flex flex-col gap-4 mt-8 pb-2">
          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <p className="text-[11.5px] text-[#444] leading-relaxed">
              See samples, rewards, and promos in <span className="text-[#1D63B9] cursor-pointer hover:underline">basket</span>.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <p className="text-[11.5px] text-[#444] leading-relaxed">
              Beauty Insiders enjoy <span className="font-bold uppercase text-[10px] tracking-tighter">FREE</span> standard shipping on all orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
