import { useState } from 'react';
import svgPaths from "./svg-x0tsl4njhn";

function Frame({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button className="content-stretch cursor-pointer flex gap-[6px] items-center relative shrink-0 w-full" onClick={onClick}>
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[16px] text-black text-left">Advanced Filters</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className={`flex-none transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Brand</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Fragrance Type</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">{`Fragrance Family `}</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Ingredient Preference</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Shopping Preference</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Size</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Minor Filter</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Minor Filter</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Minor Filter</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Minor Filter</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[19px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Minor Filter</p>
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[5px] relative w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p2c6ca280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdvancedFilters() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full" data-name="advanced filters">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.13px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260.25 0.25">
            <path d="M0.125 0.125H260.125" id="Vector 5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.3" strokeWidth="0.25" />
          </svg>
        </div>
      </div>
      <Frame isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <>
          <Frame6 />
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Frame4 />
          <Frame5 />
          <Frame7 />
          <Frame8 />
          <Frame9 />
          <Frame10 />
          <Frame11 />
        </>
      )}
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.13px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260.25 0.25">
            <path d="M0.125 0.125H260.125" id="Vector 5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.3" strokeWidth="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}