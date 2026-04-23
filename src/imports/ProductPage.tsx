import React, { useState } from "react";
import svgPaths from "./svg-z15nkphope";
import imgMain from "figma:asset/cbaeb6ae2d19647445308b3f2fb403c0a3f5c9d6.png";
import imgThumb1 from "figma:asset/d2bf9d32b26310962726fec0f0cff55a5f218d41.png";
import imgThumb2 from "figma:asset/63d83949a74ae90e97417f3e46b1900d1d5d9414.png";
import imgThumb3 from "figma:asset/437de07bfa1fcc867da07ddcf1348500a0cbcac0.png";
import imgThumb4 from "figma:asset/540687aa65af2ef782464c05a5da6d2ea0a69994.png";
import imgThumb5 from "figma:asset/515fb5ea20acd2c8fee82212a786ad41cfd86303.png";

// Bottom Cards
import imgCard1 from "figma:asset/009677769b091bc49bc4d17cc1363171307e8745.png";
import imgCard2 from "figma:asset/c3b4970b950e2b3daeee85d14c51c7011c7fb4d7.png";
import imgCard3 from "figma:asset/82eff39fd5c9ed3cefb365b7085975bfa790a7dc.png";
import imgCard4 from "figma:asset/3829ad6d3a714a83a38b5a0c5c15bf1ceccba730.png";
import imgCard5 from "figma:asset/fcead3068875a86190fc278f09875186229d4f86.png";



export default function ProductPage() {
  const [isInBasket, setIsInBasket] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const productImages = [
    imgMain,
    imgThumb1,
    imgThumb2,
    imgThumb3,
    imgThumb4,
    imgThumb5
  ];

  const handleNext = () => setActiveImgIndex((prev) => (prev + 1) % productImages.length);
  const handlePrev = () => setActiveImgIndex((prev) => (prev - 1 + productImages.length) % productImages.length);

  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen font-['Inter',sans-serif]">
      
      

      <main className="w-full max-w-[1440px] px-[60px] py-10 flex flex-col items-center">
        <div className="w-full flex flex-col items-start mb-10">
           <button className="text-[12px] font-['Inter:Medium',sans-serif] text-[#575757] mb-8 flex items-center hover:underline cursor-pointer">
             &lt; Back
           </button>

           <div className="flex flex-col lg:flex-row w-full gap-16">
             {/* Left Column: Images */}
             <div className="flex-[1.2] relative flex justify-start items-start gap-8">
                {/* Thumbnails (Circular) */}
                <div className="flex flex-col gap-4">
                  {productImages.map((img, index) => (
                    <div 
                      key={index}
                      onClick={() => setActiveImgIndex(index)}
                      className={`w-[60px] h-[60px] rounded-full border flex items-center justify-center overflow-hidden cursor-pointer p-1 transition-all ${activeImgIndex === index ? 'border-black ring-1 ring-black' : 'border-[#E5E5E5] hover:border-gray-400'}`}
                    >
                      <img src={img} alt={`thumb-${index}`} className="object-cover w-full h-full rounded-full" />
                    </div>
                  ))}
                  <button className="text-[10px] font-['Inter:Medium',sans-serif] text-[#575757] mt-2 hover:underline">See all 9</button>
                </div>
                
                {/* Main Image View */}
                <div className="flex-1 relative flex items-center justify-center min-h-[600px] bg-[#F9F9F9] rounded-[4px] overflow-hidden group">
                  <img 
                    src={productImages[activeImgIndex]} 
                    alt="product main" 
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button 
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
             </div>

             {/* Right Column: Details */}
             <div className="flex-1 flex flex-col max-w-[550px]">
               <h1 className="text-[16px] font-['Inter:Bold',sans-serif] font-bold text-[#0A0A0A] uppercase tracking-wide mb-2">BURBERRY</h1>
               <h2 className="text-[28px] leading-[34px] text-[#0A0A0A] font-['Inter:Regular',sans-serif] mb-4">
                 Her Elixir de Parfum with Dark Red Berries, Jasmine & Vanilla
               </h2>

               <div className="flex items-center gap-2 mb-6">
                 <div className="flex text-black space-x-1">
                   <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                 </div>
                 <span className="text-[12px] font-['Inter:Medium',sans-serif] font-medium text-black ml-1">4.2</span>
                 <span className="text-[12px] font-['Inter:Regular',sans-serif] text-[#6A7282]">(1.2k)</span>
                 <div className="flex items-center gap-2 ml-4">
                   <span className="text-[12px] font-['Inter:Medium',sans-serif] bg-black text-white px-3 py-1.5 rounded-[4px] cursor-pointer hover:bg-gray-800">Ask A Question</span>
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                   <span className="text-[12px] font-['Inter:Regular',sans-serif] text-[#6A7282]">1.2k</span>
                 </div>
               </div>

               <div className="mb-4">
                 <div className="text-[28px] font-['Inter:Bold',sans-serif] font-bold text-[#0A0A0A]">$182.00</div>
                 <div className="text-[14px] font-['Inter:Regular',sans-serif] text-[#0A0A0A] mt-1">get it for <span className="font-bold text-[#CE112D]">$223.25 (5% off)</span> with Auto-Replenish</div>
               </div>

               <div className="mb-6">
                 <h3 className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-[#0A0A0A] mb-3">Standard Size:</h3>
                 <div className="flex gap-4">
                   <div className="border border-[#E5E5E5] bg-white text-black py-2 px-4 rounded-[6px] cursor-pointer text-center hover:border-black transition-colors w-max">
                     <div className="text-[12px] font-['Inter:Medium',sans-serif] mb-0.5">1 OZ / 30 ML</div>
                     <div className="text-[10px] font-['Inter:Regular',sans-serif] text-gray-500">PARFUM SPRAY</div>
                   </div>
                   <div className="border border-black bg-white text-black py-2 px-4 rounded-[6px] cursor-pointer text-center shadow-sm w-max">
                     <div className="text-[12px] font-['Inter:Medium',sans-serif] mb-0.5">1.6 OZ / 50 ML</div>
                     <div className="text-[10px] font-['Inter:Regular',sans-serif] text-gray-500">PARFUM SPRAY</div>
                   </div>
                   <div className="border border-[#E5E5E5] bg-white text-black py-2 px-4 rounded-[6px] cursor-pointer text-center hover:border-black transition-colors w-max">
                     <div className="text-[12px] font-['Inter:Medium',sans-serif] mb-0.5">3.3 OZ / 100 ML</div>
                     <div className="text-[10px] font-['Inter:Regular',sans-serif] text-gray-500">PARFUM SPRAY</div>
                   </div>
                 </div>
               </div>

               <div className="mb-8">
                 <h3 className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-[#0A0A0A] mb-3">Mini Size:</h3>
                 <div className="flex gap-4">
                   <div className="border border-[#E5E5E5] bg-white text-black py-2 px-4 rounded-[6px] cursor-pointer text-center hover:border-black transition-colors w-max">
                     <div className="text-[12px] font-['Inter:Medium',sans-serif] mb-0.5">0.33 OZ / 10 ML</div>
                     <div className="text-[10px] font-['Inter:Regular',sans-serif] text-gray-500">PARFUM SPRAY</div>
                   </div>
                 </div>
               </div>

               {/* Delivery Options Row */}
               <div className="flex gap-3 mb-8 w-full">
                 <div className="border border-black rounded-[6px] p-4 flex-1 cursor-pointer relative shadow-[inset_0_0_0_1px_black]">
                   <svg className="mb-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                   <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-black">FREE Shipping</div>
                   <div className="text-[11px] font-['Inter:Regular',sans-serif] text-black leading-tight mt-1">Delivery by Thu,<br/>Apr 2 to M6H 4A9</div>
                 </div>
                 
                 <div className="border border-[#E5E5E5] rounded-[6px] p-4 flex-1 cursor-pointer">
                   <svg className="mb-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 2.61-6.3L2 8"/></svg>
                   <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#666]">Auto-Replenish</div>
                   <div className="text-[11px] font-['Inter:Regular',sans-serif] text-[#666] leading-tight mt-1">Save 5% on this item</div>
                 </div>

                 <div className="border border-[#E5E5E5] rounded-[6px] p-4 flex-1 cursor-pointer">
                   <svg className="mb-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                   <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#666]">Same-Day Delivery</div>
                 </div>

                 <div className="border border-[#E5E5E5] rounded-[6px] p-4 flex-1 cursor-pointer">
                   <svg className="mb-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                   <div className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#666]">Buy Online</div>
                   <div className="text-[11px] font-['Inter:Regular',sans-serif] text-[#666] leading-tight mt-1">Dufferin Mall</div>
                 </div>
               </div>

               {/* Add to Basket */}
                <div className="flex flex-col gap-4 mt-6">
                  {isInBasket && (
                    <div className="w-full bg-black text-white px-6 py-2.5 rounded-full flex items-center justify-between cursor-pointer hover:bg-gray-900 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-['Inter:Bold',sans-serif] font-bold">1 in basket</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                      <span className="text-[12px] font-['Inter:Regular',sans-serif]">Get it Shipped</span>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <div className="relative">
                      <select className="appearance-none border border-[#E5E5E5] rounded-full pl-6 pr-10 py-3 bg-white font-['Inter:Medium',sans-serif] font-medium text-[14px] focus:outline-none focus:ring-1 focus:ring-black h-[48px]">
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="black" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <button 
                      onClick={() => setIsInBasket(true)}
                      className="flex-1 bg-[#CF112C] hover:bg-[#A30000] text-white font-['Inter:Bold',sans-serif] font-bold py-3 px-6 rounded-full text-[16px] transition-colors h-[48px]"
                    >
                      Add to Basket
                    </button>
                  </div>
                </div>
               
             </div>
           </div>
        </div>

        {/* Product Descriptions Bottom section */}
        <div className="w-full mt-10 pt-10 flex border-t border-[#E5E5E5]">
           {/* Vertical Left Nav */}
           <div className="w-[250px] flex flex-col gap-6 font-['Inter:Bold',sans-serif] font-bold text-[16px] text-black shrink-0">
             <div className="border-b-[3px] border-black pb-1 w-max cursor-pointer">About The Product</div>
             <div className="text-[#666] font-normal cursor-pointer hover:text-black">How To Use</div>
             <div className="text-[#666] font-normal cursor-pointer hover:text-black">Ingredients</div>
             <div className="text-[#666] font-normal cursor-pointer hover:text-black">Review</div>
           </div>
           
           <div className="w-px bg-[#E5E5E5] min-h-[300px] mx-10 shrink-0"></div>

           {/* Content */}
           <div className="flex-1 max-w-[700px]">
              <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#848484] mb-6">Item 2608735</p>
              
              <div className="space-y-6">
                 <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black"><span className="font-['Inter:Bold',sans-serif] font-bold text-black">Fragrance Family:</span> Florals</p>
                 <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black"><span className="font-['Inter:Bold',sans-serif] font-bold text-black">Scent Type:</span> Warm Florals</p>
                 <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black leading-relaxed"><span className="font-['Inter:Bold',sans-serif] font-bold text-black">Key Notes:</span> Strawberry And Blackberry Accord, Jasmine Accord, Vanilla, Amber, Sandalwood</p>
                 <div className="pt-2 flex gap-2">
                   <span className="font-['Inter:Bold',sans-serif] font-bold text-black block mb-2 text-[14px] whitespace-nowrap">Fragrance Description:</span> 
                   <p className="text-[14px] font-['Inter:Regular',sans-serif] leading-[22px] text-black">
                     Notes Of Strawberry And Blackberry Accords Blend With A Trio Of Jasmine, Vanilla And Amber. Earthy Sandalwood At The Base Lends A Rich Warmth, Unifying The Fruity And Ambery Tones.
                   </p>
                 </div>

                 <div className="pt-4">
                    <span className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black mb-3 block">Highly rated for:</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[12px] font-['Inter:Regular',sans-serif] bg-white border border-[#00947E] text-[#00947E] px-4 py-1.5 rounded-full">Long-wearing</span>
                      <span className="text-[12px] font-['Inter:Regular',sans-serif] bg-white border border-[#B08900] text-[#B08900] px-4 py-1.5 rounded-full">Layerable Scent</span>
                      <span className="text-[12px] font-['Inter:Regular',sans-serif] bg-white border border-[#D92B73] text-[#D92B73] px-4 py-1.5 rounded-full">Floral Scent</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* See It In Real Life */}
        <div className="w-full mt-20">
          <h2 className="text-[24px] font-['Inter:Bold',sans-serif] font-bold text-black">See It In Real Life</h2>
          <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black mb-6 mt-1">Mention @Sephora for a chance to be featured or upload to gallery!</p>
          
          <div className="flex gap-4 mb-4">
            {[imgThumb1, imgThumb2, imgThumb3, imgThumb4, imgThumb5].map((img, i) => (
              <div key={i} className="w-[200px] h-[200px] bg-gray-200 relative group cursor-pointer overflow-hidden">
                 <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
          <button className="text-[14px] font-['Inter:Regular',sans-serif] text-[#1D63B9] hover:underline cursor-pointer">
            + Add to Gallery
          </button>
        </div>

        {/* You might also like */}
        <div className="w-full mt-20">
          <h2 className="text-[24px] font-['Inter:Bold',sans-serif] font-bold text-black mb-8">You might also like</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {/* Card 1 */}
            <div className="w-[220px] flex flex-col cursor-pointer group">
               <div className="relative mb-4">
                  <img src={imgCard1} className="w-full h-[220px] object-contain" />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">New</span>
               </div>
               <h3 className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">OLEHENRIKSEN</h3>
               <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black line-clamp-2 mt-1">Pout Preserve Hydrating Peptide Lip Treatment...</p>
               <div className="mt-2 text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">$22.00</div>
            </div>
            {/* Card 2 */}
            <div className="w-[220px] flex flex-col cursor-pointer group">
               <div className="relative mb-4">
                  <img src={imgCard2} className="w-full h-[220px] object-contain" />
               </div>
               <h3 className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">SEPHORA COLLECTION</h3>
               <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black line-clamp-2 mt-1">Glossed Hydrating Long Wear Lip Gloss</p>
               <div className="mt-2 text-[14px] font-['Inter:Bold',sans-serif] font-bold"><span className="text-[#CF112C]">$9.50</span> <span className="text-gray-500 line-through font-normal">$19.00</span></div>
            </div>
            {/* Card 3 */}
            <div className="w-[220px] flex flex-col cursor-pointer group">
               <div className="relative mb-4">
                  <img src={imgCard3} className="w-full h-[220px] object-contain" />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">New</span>
               </div>
               <h3 className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">MILK MAKEUP</h3>
               <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black line-clamp-2 mt-1">Mini KUSH High Volumizing Mascara...</p>
               <div className="mt-2 text-[14px] font-['Inter:Bold',sans-serif] font-bold"><span className="text-[#CF112C]">$10.50</span> <span className="text-gray-500 line-through font-normal">$21.00</span></div>
            </div>
            {/* Card 4 */}
            <div className="w-[220px] flex flex-col cursor-pointer group">
               <div className="relative mb-4">
                  <img src={imgCard4} className="w-full h-[220px] object-contain" />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">New</span>
               </div>
               <h3 className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">SOL DE JANEIRO</h3>
               <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black line-clamp-2 mt-1">Refresca Paraiso Hair & Body Perfume Mist...</p>
               <div className="mt-2 text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">$35.00</div>
            </div>
            {/* Card 5 */}
            <div className="w-[220px] flex flex-col cursor-pointer group">
               <div className="relative mb-4">
                  <img src={imgCard5} className="w-full h-[220px] object-contain" />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">New</span>
               </div>
               <h3 className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">SUMMER FRIDAYS</h3>
               <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black line-clamp-2 mt-1">Sweet Pink Duo</p>
               <div className="mt-2 text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">$52.00</div>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="w-full mt-20 mb-20">
          <h2 className="text-[24px] font-['Inter:Bold',sans-serif] font-bold text-black mb-8">Recently Viewed</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            <div className="w-[220px] flex flex-col cursor-pointer group">
               <div className="relative mb-4">
                  <img src={imgCard1} className="w-full h-[220px] object-contain" />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">New</span>
               </div>
               <h3 className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-black">BEAUTYBLENDER</h3>
               <p className="text-[14px] font-['Inter:Regular',sans-serif] text-black line-clamp-2 mt-1">Bounce Liquid Whip Long Wear Foundation</p>
               <div className="mt-2 text-[14px] font-['Inter:Bold',sans-serif] font-bold"><span className="text-[#CF112C]">$12.25</span> <span className="text-gray-500 line-through font-normal">$49.00</span></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white flex justify-center py-16">
        <div className="w-full max-w-[1440px] px-[60px] flex flex-col gap-10">
          <div className="flex gap-12 text-[14px] font-['Inter:Medium',sans-serif]">
            <div className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Find a Store</div>
            <div className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> Customer Service</div>
            <div className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> Get the App</div>
            <div className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Get SMS Alerts</div>
          </div>
          <div className="h-px w-full bg-[#333]"></div>
          <div className="flex justify-between w-full">
            <div className="flex gap-16 text-[12px] font-['Inter:Regular',sans-serif] leading-[28px] opacity-80">
               <div className="flex flex-col">
                 <span className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white opacity-100 mb-2">About Sephora</span>
                 <span>About Sephora</span><span>Newsroom</span><span>Careers</span><span>Sephora Social Impact</span><span>Supply Chain Transparency</span><span>Affiliates</span><span>Sephora Events</span><span>Gift Cards</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white opacity-100 mb-2">My Sephora</span>
                 <span>Beauty Insider</span><span>Community Profile</span><span>Order Status</span><span>Purchase History</span><span>Account Settings</span><span>Beauty Advisor Recommendations</span><span>Beauty Offers</span><span>Rewards Bazaar</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white opacity-100 mb-2">Help</span>
                 <span>Customer Service</span><span>Returns & Exchanges</span><span>Delivery and Pickup Options</span><span>Shipping</span><span>Billing</span><span>International Shipments</span><span>Store Location</span><span>Online Ordering</span>
               </div>
            </div>
            <div className="flex flex-col">
               <h2 className="text-[32px] font-['Inter:Medium',sans-serif] mb-6 leading-tight max-w-[280px]">We Belong to Something Beautiful</h2>
               <div className="text-[12px] font-['Inter:Bold',sans-serif] font-bold mb-2">Sign up for Sephora Texts</div>
               <div className="flex mb-6">
                 <input type="text" placeholder="Mobile Phone Number" className="px-4 py-2 bg-white text-black text-[12px]" />
                 <button className="px-4 py-2 border border-white text-[12px] font-['Inter:Bold',sans-serif] font-bold hover:bg-white hover:text-black transition-colors">Continue</button>
               </div>
               <div className="text-[12px] font-['Inter:Bold',sans-serif] font-bold mb-2">Sign up for Sephora Emails</div>
               <div className="flex">
                 <input type="email" placeholder="Enter your email address" className="px-4 py-2 bg-white text-black text-[12px]" />
                 <button className="px-4 py-2 border border-white text-[12px] font-['Inter:Bold',sans-serif] font-bold hover:bg-white hover:text-black transition-colors">Sign Up</button>
               </div>
            </div>
          </div>
          <div className="h-px w-full bg-[#333] mt-8"></div>
          <div className="text-[10px] font-['Inter:Regular',sans-serif] opacity-60 mt-4 flex justify-between">
             <p>© 2026 Sephora USA, Inc. All rights reserved.</p>
             <p>Privacy Policy | Terms of Use | Accessibility | Sitemap</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
