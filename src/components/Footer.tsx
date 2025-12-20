import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // Here you would typically send the email to your backend
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } else {
      alert('Please enter a valid email address');
    }
  };
  return (
    <footer className="border-t border-[#086E0A]/20 mt-16" style={{ 
      background: 'linear-gradient(to bottom right, rgba(8, 110, 10, 0.04), rgba(8, 110, 10, 0.02), rgba(8, 110, 10, 0.03))'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl text-gray-900">StepUp</h3>
            <p className="text-gray-600">
              Premium footwear for every occasion. Comfort meets style.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#086E0A]/10 border border-[#086E0A]/20 rounded-lg flex items-center justify-center hover:border-[#086E0A] hover:bg-[#086E0A]/20 transition-colors"
                style={{ color: '#086E0A' }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#086E0A]/10 border border-[#086E0A]/20 rounded-lg flex items-center justify-center hover:border-[#086E0A] hover:bg-[#086E0A]/20 transition-colors"
                style={{ color: '#086E0A' }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#086E0A]/10 border border-[#086E0A]/20 rounded-lg flex items-center justify-center hover:border-[#086E0A] hover:bg-[#086E0A]/20 transition-colors"
                style={{ color: '#086E0A' }}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  Women's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  Kids' Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Subscribe to get special offers and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#086E0A' }} />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A] placeholder:text-gray-400 bg-white border border-gray-300 text-gray-900"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-[#086E0A] text-white rounded-lg hover:bg-[#065408] transition-colors"
                style={{ backgroundColor: '#086E0A' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#065408'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#086E0A'}
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 StepUp. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-[#086E0A] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
