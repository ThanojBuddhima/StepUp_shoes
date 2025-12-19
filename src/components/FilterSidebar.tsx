import { X } from 'lucide-react';

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedSizes: number[];
  onSizesChange: (sizes: number[]) => void;
  isOpen: boolean;
  onClose: () => void;
}

const categories = ['All', 'Running', 'Casual', 'Athletic', 'Formal'];
const sizes = [6, 7, 8, 9, 10, 11, 12, 13];

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedSizes,
  onSizesChange,
  isOpen,
  onClose
}: FilterSidebarProps) {
  const toggleSize = (size: number) => {
    if (selectedSizes.includes(size)) {
      onSizesChange(selectedSizes.filter(s => s !== size));
    } else {
      onSizesChange([...selectedSizes, size]);
    }
  };

  const content = (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-gray-900 mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className="w-full text-left px-4 py-2 rounded-lg transition-colors border-2 font-medium"
              style={selectedCategory === category 
                ? { backgroundColor: '#086E0A', color: '#ffffff', borderColor: '#086E0A' }
                : { backgroundColor: '#f9fafb', color: '#374151', borderColor: 'transparent' }
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
            className="w-full"
            style={{ accentColor: '#086E0A' }}
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-gray-900 mb-4">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className="py-2 rounded-lg transition-colors border-2 font-medium"
              style={selectedSizes.includes(size)
                ? { backgroundColor: '#086E0A', color: '#ffffff', borderColor: '#086E0A' }
                : { backgroundColor: '#f9fafb', color: '#374151', borderColor: 'transparent' }
              }
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          onCategoryChange('All');
          onPriceRangeChange([0, 200]);
          onSizesChange([]);
        }}
        className="w-full py-3 border border-[#086E0A] rounded-lg text-[#086E0A] hover:bg-[#086E0A]/10 transition-colors"
        style={{ borderColor: '#086E0A', color: '#086E0A' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(8, 110, 10, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        Reset Filters
      </button>
    </div>
  );

  // Mobile drawer
  if (isOpen) {
    return (
      <>
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />

        {/* Drawer */}
        <div className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900">Filters</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#086E0A]/10 rounded-lg transition-colors"
                style={{ color: '#086E0A' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
          </div>
        </div>
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h2 className="text-xl text-gray-900 mb-6">Filters</h2>
        {content}
      </div>
    </aside>
  );
}
