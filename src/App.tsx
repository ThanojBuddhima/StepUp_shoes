import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  sizes: number[];
  rating: number;
  reviews: number;
  gender: 'Men' | 'Women' | 'Kids' | 'Unisex';
  isOnSale?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
  selectedColor: string;
}

const products: Product[] = [
  // Men's Products
  {
    id: 1,
    name: 'AirFlow Runner Pro',
    category: 'Running',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY2MDQ2NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Black', 'White', 'Blue'],
    sizes: [8, 9, 10, 11, 12, 13],
    rating: 4.8,
    reviews: 342,
    gender: 'Men'
  },
  {
    id: 2,
    name: 'Sprint Elite X',
    category: 'Athletic',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1761942028169-a70def49a131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGZvb3R3ZWFyfGVufDF8fHx8MTc2NjA1MDMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Red', 'Black', 'White'],
    sizes: [8, 9, 10, 11, 12, 13],
    rating: 4.9,
    reviews: 428,
    gender: 'Men'
  },
  {
    id: 3,
    name: 'Executive Oxford',
    category: 'Formal',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmb3JtYWwlMjBzaG9lc3xlbnwxfHx8fDE3MzQ1NjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Black', 'Brown', 'Burgundy'],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.7,
    reviews: 156,
    gender: 'Men'
  },
  {
    id: 4,
    name: 'Trail Master Pro',
    category: 'Athletic',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHNob2V8ZW58MXx8fHwxNzM0NTYwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Gray', 'Black', 'Yellow'],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 267,
    gender: 'Men'
  },

  // Women's Products
  {
    id: 5,
    name: 'CloudStep Sneaker',
    category: 'Casual',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNuZWFrZXJzfGVufDF8fHx8MTczNDU2MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['White', 'Pink', 'Beige'],
    sizes: [5, 6, 7, 8, 9, 10],
    rating: 4.6,
    reviews: 218,
    gender: 'Women'
  },
  {
    id: 6,
    name: 'Elegance Heel',
    category: 'Formal',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhlZWxzfGVufDF8fHx8MTczNDU2MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Black', 'Red', 'Nude'],
    sizes: [5, 6, 7, 8, 9],
    rating: 4.8,
    reviews: 312,
    gender: 'Women'
  },
  {
    id: 7,
    name: 'Flex Runner Women',
    category: 'Running',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNuZWFrZXJzfGVufDF8fHx8MTczNDU2MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Purple', 'Pink', 'Blue'],
    sizes: [5, 6, 7, 8, 9, 10],
    rating: 4.7,
    reviews: 189,
    gender: 'Women'
  },
  {
    id: 8,
    name: 'Summer Sandal',
    category: 'Casual',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNhbmRhbHN8ZW58MXx8fHwxNzM0NTYwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Tan', 'White', 'Gold'],
    sizes: [5, 6, 7, 8, 9],
    rating: 4.5,
    reviews: 145,
    gender: 'Women'
  },

  // Kids' Products
  {
    id: 9,
    name: 'Junior Sport Star',
    category: 'Athletic',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc25lYWtlcnN8ZW58MXx8fHwxNzM0NTYwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Blue', 'Red', 'Green'],
    sizes: [1, 2, 3, 4, 5, 6],
    rating: 4.8,
    reviews: 423,
    gender: 'Kids'
  },
  {
    id: 10,
    name: 'Little Explorer',
    category: 'Casual',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51d675571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNob2VzfGVufDF8fHx8MTczNDU2MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Navy', 'Pink', 'White'],
    sizes: [10, 11, 12, 13, 1, 2],
    rating: 4.6,
    reviews: 287,
    gender: 'Kids'
  },
  {
    id: 11,
    name: 'School Day Classic',
    category: 'Formal',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc2Nob29sJTIwc2hvZXN8ZW58MXx8fHwxNzM0NTYwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Black', 'Brown'],
    sizes: [1, 2, 3, 4, 5],
    rating: 4.4,
    reviews: 198,
    gender: 'Kids'
  },
  {
    id: 12,
    name: 'Playground Runner',
    category: 'Running',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1555274175-75f79b09d5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGtpZHMlMjBzaG9lc3xlbnwxfHx8fDE3MzQ1NjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Orange', 'Blue', 'Yellow'],
    sizes: [11, 12, 13, 1, 2, 3],
    rating: 4.7,
    reviews: 356,
    gender: 'Kids'
  },

  // Sale Products
  {
    id: 13,
    name: 'Urban Street Classic',
    category: 'Casual',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1622760807301-4d2351a5a942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjYxNTM3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['White', 'Gray', 'Beige'],
    sizes: [6, 7, 8, 9, 10, 11],
    rating: 4.6,
    reviews: 218,
    gender: 'Unisex',
    isOnSale: true
  },
  {
    id: 14,
    name: 'Velocity Runner Max',
    category: 'Running',
    price: 89.99,
    originalPrice: 139.99,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY2MDQ2NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Blue', 'Green', 'Orange'],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.7,
    reviews: 195,
    gender: 'Men',
    isOnSale: true
  },
  {
    id: 15,
    name: 'Lifestyle Comfort+',
    category: 'Casual',
    price: 69.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1659724526207-99fc675bb950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzaG9lcyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjYxNTM3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Brown', 'Black', 'Navy'],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.7,
    reviews: 156,
    gender: 'Women',
    isOnSale: true
  },
  {
    id: 16,
    name: 'Streetwear Essential',
    category: 'Casual',
    price: 49.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNhbGV8ZW58MXx8fHwxNzM0NTYwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['White', 'Black'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    rating: 4.5,
    reviews: 312,
    gender: 'Unisex',
    isOnSale: true
  },
  {
    id: 17,
    name: 'Premium Luxury Step',
    category: 'Formal',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1632979511708-0a5a8b4eb0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lcyUyMGZhc2hpb258ZW58MXx8fHwxNzY2MTI4OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Black', 'Brown', 'Burgundy'],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.8,
    reviews: 289,
    gender: 'Men',
    isOnSale: true
  },
  {
    id: 18,
    name: 'Kids Adventure Boot',
    category: 'Athletic',
    price: 39.99,
    originalPrice: 64.99,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYm9vdHN8ZW58MXx8fHwxNzM0NTYwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colors: ['Brown', 'Black', 'Blue'],
    sizes: [10, 11, 12, 13, 1, 2],
    rating: 4.6,
    reviews: 178,
    gender: 'Kids',
    isOnSale: true
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('All');

  // Map navigation items to product filtering
  const getFilteredByNav = (products: Product[], nav: string) => {
    switch (nav) {
      case 'Men':
        return products.filter(p => p.gender === 'Men' || p.gender === 'Unisex');
      case 'Women':
        return products.filter(p => p.gender === 'Women' || p.gender === 'Unisex');
      case 'Kids':
        return products.filter(p => p.gender === 'Kids');
      case 'Sale':
        return products.filter(p => p.isOnSale === true);
      default:
        return products;
    }
  };

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
    // Reset category filter when nav changes
    setSelectedCategory('All');
  };

  const navFilteredProducts = getFilteredByNav(products, activeNav);

  const filteredProducts = navFilteredProducts.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    return categoryMatch && priceMatch && sizeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const addToCart = (product: Product, size: number, color: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
    });
    setIsCartOpen(true);
  };

  const updateCartItemQuantity = (id: number, size: number, color: string, quantity: number) => {
    if (quantity === 0) {
      setCart(prevCart => prevCart.filter(
        item => !(item.id === id && item.selectedSize === size && item.selectedColor === color)
      ));
    } else {
      setCart(prevCart => prevCart.map(item =>
        item.id === id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />
      
      {activeNav === 'All' && <Hero />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            selectedSizes={selectedSizes}
            onSizesChange={setSelectedSizes}
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
          />
          
          <ProductGrid
            products={sortedProducts}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onAddToCart={addToCart}
            onFilterClick={() => setIsMobileFilterOpen(true)}
          />
        </div>
      </div>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateCartItemQuantity}
      />
    </div>
  );
}
