import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../App';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: number, color: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

export function ProductCard({ product, onAddToCart, isFavorite, onToggleFavorite }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize, selectedColor);
      setShowQuickAdd(false);
      setSelectedSize(null);
    }
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#086E0A]/30 transition-all">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Wishlist Button */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#086E0A]/10 transition-colors shadow-md"
        >
          <Heart
            className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
            style={!isFavorite ? { color: '#086E0A' } : undefined}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-[#086E0A] font-medium">
            {product.category}
          </span>
          {product.isOnSale && (
            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        {!showQuickAdd && (
          <button
            onClick={() => setShowQuickAdd(true)}
            className="absolute bottom-3 left-3 right-3 py-3 bg-[#086E0A] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 hover:bg-[#000000]"
            style={{ backgroundColor: '#086E0A' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#086E0A'}
          >
            <ShoppingCart className="w-5 h-5" />
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-gray-900 line-clamp-1 group-hover:text-[#086E0A] transition-colors">{product.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-700">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl text-[#086E0A] font-semibold">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Quick Add Panel */}
        {showQuickAdd && (
          <div className="pt-3 border-t border-[#086E0A]/20 space-y-3 animate-in fade-in duration-200">
            {/* Color Selection */}
            <div>
              <div className="text-sm text-[#086E0A] font-medium mb-2">Color</div>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedColor === color
                        ? 'bg-[#086E0A] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#086E0A]/10 hover:text-[#086E0A]'
                    }`}
                    style={selectedColor === color ? { backgroundColor: '#086E0A', color: '#ffffff' } : undefined}
                    onMouseEnter={(e) => {
                      if (selectedColor !== color) {
                        e.currentTarget.style.backgroundColor = 'rgba(8, 110, 10, 0.1)';
                        e.currentTarget.style.color = '#086E0A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedColor !== color) {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                        e.currentTarget.style.color = '#374151';
                      }
                    }}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="text-sm text-[#086E0A] font-medium mb-2">Size (US)</div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.slice(0, 4).map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg text-sm transition-colors ${
                      selectedSize === size
                        ? 'bg-[#086E0A] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#086E0A]/10 hover:text-[#086E0A]'
                    }`}
                    style={selectedSize === size ? { backgroundColor: '#086E0A', color: '#ffffff' } : undefined}
                    onMouseEnter={(e) => {
                      if (selectedSize !== size) {
                        e.currentTarget.style.backgroundColor = 'rgba(8, 110, 10, 0.1)';
                        e.currentTarget.style.color = '#086E0A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedSize !== size) {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                        e.currentTarget.style.color = '#374151';
                      }
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  selectedSize
                    ? 'bg-[#086E0A] text-white hover:bg-[#065408]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                style={selectedSize ? { backgroundColor: '#086E0A' } : undefined}
                onMouseEnter={(e) => {
                  if (selectedSize) e.currentTarget.style.backgroundColor = '#065408';
                }}
                onMouseLeave={(e) => {
                  if (selectedSize) e.currentTarget.style.backgroundColor = '#086E0A';
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
              <button
                onClick={() => {
                  setShowQuickAdd(false);
                  setSelectedSize(null);
                }}
                className="px-4 py-3 border border-[#086E0A] rounded-lg text-[#086E0A] hover:bg-[#086E0A]/10 transition-colors"
                style={{ borderColor: '#086E0A', color: '#086E0A' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(8, 110, 10, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
