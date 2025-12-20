import { Twitter, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [selectedColor, setSelectedColor] = useState('bw');

  // Featured product data
  const featuredProduct = {
    name: 'NIKE AIR MAX III',
    price: 189,
    rating: 5,
    image: '/images/heroshoe.png'
  };

  return (
    <div className="relative min-h-screen" style={{ 
      background: '#0d2a0d',
      color: 'white',
      fontFamily: "'Helvetica Neue', Arial, sans-serif"
    }}>
      {/* Corner Dots */}
      <div className="fixed top-4 left-4 w-3 h-3 bg-white rounded-full z-50" />
      <div className="fixed top-4 right-4 w-3 h-3 bg-white rounded-full z-50" />
      <div className="fixed bottom-4 left-4 w-3 h-3 bg-white rounded-full z-50" />
      <div className="fixed bottom-4 right-4 w-3 h-3 bg-white rounded-full z-50" />

      {/* Sidebar - Left */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-50">
        <div 
          className="font-semibold tracking-widest"
          style={{ 
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '18px'
          }}
        >
          DELIVERY
        </div>
        <div 
          className="font-semibold tracking-widest"
          style={{ 
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            color: '#ff5539',
            fontSize: '18px'
          }}
        >
          PACKAGING
        </div>
        <div 
          className="font-semibold tracking-widest"
          style={{ 
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '18px'
          }}
        >
          FAQ
        </div>
      </div>

      {/* Social Icons - Left Bottom */}
      <div className="fixed left-6 bottom-12 flex flex-col gap-5 z-50">
        <Twitter 
          className="w-5 h-5 text-white cursor-pointer hover:text-[#ff5539] transition-colors" 
        />
        <Instagram 
          className="w-5 h-5 text-white cursor-pointer hover:text-[#ff5539] transition-colors" 
        />
        <Facebook 
          className="w-5 h-5 text-white cursor-pointer hover:text-[#ff5539] transition-colors" 
        />
      </div>

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ height: 'calc(100vh - 80px)', width: '100%' }}>
        <div className="flex items-center justify-between pt-10" style={{ height: '100%' }}>
        {/* Hero Content - Left */}
        <div 
          className="flex-shrink-0 flex flex-col justify-center" 
          style={{ 
            flex: '0 0 45%', 
            zIndex: 10,
            paddingRight: '2rem'
          }}
        >
          {/* Headline */}
          <h1 
            className="font-black leading-tight"
            style={{ 
              fontSize: '4rem',
              lineHeight: '1.2',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '2rem'
            }}
          >
            Built for Every Step You Take
          </h1>

          {/* Paragraph */}
          <p 
            className="mb-8" 
            style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.8)', 
              lineHeight: '1.7', 
              maxWidth: '500px',
              marginBottom: '2.5rem'
            }}
          >
            Discover footwear designed for comfort, durability, and everyday performance. From daily wear to high-impact movement, StepUp shoes adapt to your lifestyle—so you can move confidently, anywhere.
          </p>

          {/* Shop Now Button */}
          <button 
            className="px-4 py-2 text-white font-medium rounded-lg cursor-pointer transition-all self-start text-sm"
            style={{ 
              background: '#086E0A'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#065408';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#086E0A';
            }}
          >
            Shop Now
          </button>
        </div>

        {/* Shoe Section - Right */}
        <div className="flex-1 relative flex items-center justify-center" style={{ height: '100%' }}>
          {/* Background Text "StepUp" */}
          <div 
            className="absolute"
            style={{
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          >
            <div
              className="font-black"
              style={{
                fontSize: '380px',
                lineHeight: '0.3',
                color: 'rgba(255, 255, 255, 0.1)',
                letterSpacing: '-0.05em',
                whiteSpace: 'nowrap',
                fontStretch: 'condensed',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              } as React.CSSProperties}
            >
              StepUp
            </div>
          </div>

          {/* Shoe Main Image */}
          <img
            src={featuredProduct.image}
            alt="Nike Shoe"
            className="relative z-10"
            style={{
              maxWidth: '550px',
              transform: 'rotate(-20deg)',
              marginRight: '-80px',
              marginTop: '80px',
              animation: 'floatShoe 4s ease-in-out infinite'
            }}
          />

          {/* Color Selector */}
          <div 
            className="absolute flex flex-col gap-4 z-20"
            style={{
              right: '200px',
              top: '47%',
              transform: 'translateY(-50%)'
            }}
          >
            <button
              onClick={() => setSelectedColor('bw')}
              className="w-7 h-7 rounded-full cursor-pointer transition-all relative"
              style={{
                background: 'conic-gradient(from 135deg, white 0deg 180deg, #2a2a2a 180deg 360deg)',
                border: selectedColor === 'bw' ? '2px solid white' : '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (selectedColor !== 'bw') {
                  e.currentTarget.style.transform = 'scale(1.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedColor !== 'bw') {
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            />
            <button
              onClick={() => setSelectedColor('rw')}
              className="w-7 h-7 rounded-full cursor-pointer transition-all relative"
              style={{
                background: 'conic-gradient(from 135deg, #ff3355 0deg 180deg, white 180deg 360deg)',
                border: selectedColor === 'rw' ? '2px solid white' : '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (selectedColor !== 'rw') {
                  e.currentTarget.style.transform = 'scale(1.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedColor !== 'rw') {
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            />
            <button
              onClick={() => setSelectedColor('ow')}
              className="w-7 h-7 rounded-full cursor-pointer transition-all relative"
              style={{
                background: 'conic-gradient(from 135deg, #ff5539 0deg 180deg, white 180deg 360deg)',
                border: selectedColor === 'ow' ? '2px solid white' : '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (selectedColor !== 'ow') {
                  e.currentTarget.style.transform = 'scale(1.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedColor !== 'ow') {
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            />
          </div>

          {/* Navigation Arrows */}
          <div 
            className="absolute flex gap-4 z-20"
            style={{
              right: '150px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <button 
              className="w-11 h-11 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.4)',
                color: 'rgba(255,255,255,0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff5539';
                e.currentTarget.style.borderColor = '#ff5539';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              ‹
            </button>
            <button 
              className="w-11 h-11 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.4)',
                color: 'rgba(255,255,255,0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff5539';
                e.currentTarget.style.borderColor = '#ff5539';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              ›
            </button>
          </div>

        </div>
      </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes floatShoe {
          0%, 100% {
            transform: rotate(-20deg) translateY(0px);
          }
          50% {
            transform: rotate(-20deg) translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}
