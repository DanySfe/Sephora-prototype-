import { useState } from 'react';
import DesktopHome from '../imports/DesktopHome';
import FragranceCategory from '../imports/FragranceCategory';
import ProductPage from '../imports/ProductPage';
import NavigationBar from '../imports/NavigationBar';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'fragrance' | 'product'>('home');
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const navigateToFragrance = () => setCurrentView('fragrance');
  const navigateToHome = () => setCurrentView('home');
  const navigateToProduct = () => setCurrentView('product');

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden bg-white flex flex-col items-center"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        // Navigate to Fragrance category when clicking "Fragrance" text
        if (target.textContent?.trim() === 'Fragrance' && (target.tagName === 'P' || target.tagName === 'SPAN')) {
          navigateToFragrance();
        }

        // Navigate to home when clicking SEPHORA logo
        if (target.textContent?.includes('SEPHORA')) {
          navigateToHome();
        }
        
        // Navigate back to home when clicking Back
        if (target.textContent?.includes('< Back')) {
          navigateToHome();
        }

        // Navigate to Product Page when clicking a product card
        if (target.closest('[data-name="Card-homepage"]')) {
          navigateToProduct();
        }

        // Handle Add to Basket
        if (target.textContent?.trim() === 'Add to Basket') {
          setIsBasketOpen(true);
        } else if (!target.closest('[data-name="Basket Popup"]') && !target.closest('[data-name="Basket"]')) {
          // Close basket if clicking outside
          setIsBasketOpen(false);
        }
      }}
      onMouseMove={(e) => {
        const target = e.target as HTMLElement;
        // Add pointer cursor to clickable elements
        if (target.textContent?.trim() === 'Fragrance' ||
             target.textContent?.includes('SEPHORA') ||
             target.textContent?.includes('< Back')) {
          target.style.cursor = 'pointer';
        }
        if (target.closest('[data-name="Card-homepage"]')) {
          target.style.cursor = 'pointer';
        }
      }}
    >
      <NavigationBar isBasketOpen={isBasketOpen} onCloseBasket={() => setIsBasketOpen(false)} onOpenBasket={() => setIsBasketOpen(true)} />
      <div className="w-full max-w-[1920px] min-h-screen">
        {currentView === 'home' && <DesktopHome />}
        {currentView === 'fragrance' && <FragranceCategory />}
        {currentView === 'product' && <ProductPage />}
      </div>
    </div>
  );
}
