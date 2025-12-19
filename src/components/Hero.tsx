import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
              New Collection 2025
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Step Into
              <br />
              <span className="text-indigo-600">Your Style</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Discover premium footwear that combines comfort, style, and performance. Free shipping on orders over $100.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                View Collection
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-4">
              <div>
                <div className="text-2xl lg:text-3xl text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl text-gray-900">4.8★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1638953173691-671b6c2692fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9lJTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYxNTM3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Shoe Collection"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square lg:aspect-auto lg:h-[500px]"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-gray-900">Free Shipping</div>
                <div className="text-sm text-gray-600">Orders over $100</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <div className="text-gray-900">30 Day Returns</div>
                <div className="text-sm text-gray-600">Easy returns policy</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-900">Secure Payment</div>
                <div className="text-sm text-gray-600">100% protected</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-900">24/7 Support</div>
                <div className="text-sm text-gray-600">Always here to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
