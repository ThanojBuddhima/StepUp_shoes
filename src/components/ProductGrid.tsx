import { SlidersHorizontal, Heart } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product } from '../App';

interface ProductGridProps {
  products: Product[];
  sortBy: string;
  onSortChange: (sort: string) => void;
  onAddToCart: (product: Product, size: number, color: string) => void;
  onFilterClick: () => void;
  favorites: number[];
  onToggleFavorite: (productId: number) => void;
  activeNav: string;
}

export function ProductGrid({ products, sortBy, onSortChange, onAddToCart, onFilterClick, favorites, onToggleFavorite, activeNav }: ProductGridProps) {
  const getTitle = () => {
    switch (activeNav) {
      case 'Favorites':
        return 'Favorites';
      case 'Men':
        return "Men's Shoes";
      case 'Women':
        return "Women's Shoes";
      case 'Kids':
        return "Kids' Shoes";
      case 'Sale':
        return 'Sale';
      default:
        return 'All Products';
    }
  };

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl text-gray-900">{getTitle()}</h2>
          <p className="text-gray-600 mt-1">{products.length} items found</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Button */}
          <button
            onClick={onFilterClick}
            className="lg:hidden px-4 py-2 border border-[#086E0A] rounded-lg text-[#086E0A] hover:bg-[#086E0A]/10 transition-colors flex items-center gap-2"
            style={{ borderColor: '#086E0A', color: '#086E0A' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(8, 110, 10, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#086E0A] transition-all"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {activeNav === 'Favorites' ? (
              <Heart className="w-12 h-12 text-gray-400" />
            ) : (
              <SlidersHorizontal className="w-12 h-12 text-gray-400" />
            )}
          </div>
          <h3 className="text-xl text-gray-900 mb-2">
            {activeNav === 'Favorites' ? 'No favorites yet' : 'No products found'}
          </h3>
          <p className="text-gray-600">
            {activeNav === 'Favorites' 
              ? 'Start adding products to your favorites by clicking the heart icon' 
              : 'Try adjusting your filters'}
          </p>
        </div>
      )}
    </div>
  );
}
