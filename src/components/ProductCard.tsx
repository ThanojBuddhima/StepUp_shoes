import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../App';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: number, color: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize, selectedColor);
      setShowQuickAdd(false);
      setSelectedSize(null);
    }
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
        >
          <Heart
            className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-gray-700">
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
            className="absolute bottom-3 left-3 right-3 py-3 bg-indigo-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 hover:bg-indigo-700"
          >
            <ShoppingCart className="w-5 h-5" />
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-gray-900 line-clamp-1">{product.name}</h3>
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
          <span className="text-2xl text-gray-900">
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
          <div className="pt-3 border-t border-gray-200 space-y-3 animate-in fade-in duration-200">
            {/* Color Selection */}
            <div>
              <div className="text-sm text-gray-600 mb-2">Color</div>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedColor === color
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="text-sm text-gray-600 mb-2">Size (US)</div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.slice(0, 4).map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg text-sm transition-colors ${
                      selectedSize === size
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
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
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
              <button
                onClick={() => {
                  setShowQuickAdd(false);
                  setSelectedSize(null);
                }}
                className="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
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
