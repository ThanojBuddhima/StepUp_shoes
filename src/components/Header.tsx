import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  activeNav: string;
  onNavClick: (nav: string) => void;
  onProfileClick: () => void;
}

export function Header({ cartItemsCount, onCartClick, activeNav, onNavClick, onProfileClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Men', 'Women', 'Kids', 'Sale'];

  const handleNavClick = (nav: string) => {
    onNavClick(nav);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/30" style={{ backgroundColor: '#000000', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button
              className="lg:hidden p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: '#ffffff' }}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavClick('All'); }}
              className="text-2xl lg:text-3xl tracking-tight"
              style={{ color: '#ffffff', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              StepUp
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative transition-colors px-3 py-2 rounded-lg ${
                    activeNav === item
                      ? 'text-white font-medium'
                      : 'text-white hover:bg-white/20'
                  }`}
                  style={activeNav === item 
                    ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }
                    : { color: '#ffffff' }
                  }
                  onMouseEnter={(e) => {
                    if (activeNav !== item) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeNav !== item) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                >
                  {item}
                  {activeNav === item && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#ffffff' }} />
              <input
                type="text"
                placeholder="Search shoes..."
                className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all placeholder:text-white/70"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: '#ffffff',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              style={{ color: '#ffffff' }}
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              className="hidden sm:block p-2 hover:bg-white/10 rounded-lg transition-colors"
              style={{ color: '#ffffff' }}
              onClick={() => handleNavClick('Favorites')}
            >
              <Heart className="w-5 h-5" />
            </button>
            
            <button 
              className="hidden sm:block p-2 hover:bg-white/10 rounded-lg transition-colors"
              style={{ color: '#ffffff' }}
              onClick={onProfileClick}
            >
              <User className="w-5 h-5" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
              style={{ color: '#ffffff' }}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                  style={{ 
                    backgroundColor: '#ffffff', 
                    color: '#054006',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#ffffff' }} />
            <input
              type="text"
              placeholder="Search shoes..."
              className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 placeholder:text-white/70"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                color: '#ffffff',
                borderWidth: '2px',
                borderStyle: 'solid',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.15)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              }}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative text-left transition-colors px-3 py-2 rounded-lg ${
                    activeNav === item
                      ? 'text-white font-medium'
                      : 'text-white hover:bg-white/20'
                  }`}
                  style={activeNav === item 
                    ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }
                    : { color: '#ffffff' }
                  }
                  onMouseEnter={(e) => {
                    if (activeNav !== item) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeNav !== item) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                >
                  {item}
                  {activeNav === item && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
