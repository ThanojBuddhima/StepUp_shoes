import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  activeNav: string;
  onNavClick: (nav: string) => void;
}

export function Header({ cartItemsCount, onCartClick, activeNav, onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Men', 'Women', 'Kids', 'Sale'];

  const handleNavClick = (nav: string) => {
    onNavClick(nav);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button
              className="lg:hidden p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavClick('All'); }}
              className="text-2xl lg:text-3xl text-gray-900 tracking-tight"
            >
              StepUp
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`transition-colors ${
                    activeNav === item
                      ? 'text-[#163C40] font-medium'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search shoes..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C40] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            
            <button className="hidden sm:block p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            
            <button className="hidden sm:block p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#163C40] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search shoes..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C40] focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-left transition-colors ${
                    activeNav === item
                      ? 'text-[#163C40] font-medium'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
