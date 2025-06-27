import { useState } from 'react';
import { Menu, X, Plus, ShoppingCart, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', link: '/' },
  {
    name: 'Products',
    dropdown: [
      { label: 'Buy Verified Snapchat Accounts', link: '/product/Buy Verified Snapchat Accounts' },
      { label: 'Buy Verified LinkedIn Accounts', link: '/product/Buy Verified LinkedIn Accounts' },
      { label: 'Buy Verified GitHub Accounts', link: '/product/Buy Verified GitHub Accounts' },
      { label: 'Buy Facebook Ads Accounts', link: '/product/Buy Facebook Ads Accounts' },
      { label: 'How to Buy Backlinks Safely in 2025', link: '/product/How to Buy Backlinks Safely in 2025' },
      { label: 'Buy Verified USA Gmail Accounts', link: '/product/Buy Verified USA Gmail Accounts' },
      { label: 'Buy PVA Gmail Accounts', link: '/product/Buy PVA Gmail Accounts' },
      { label: 'Buy Old Gmail Accounts', link: '/product/Buy Old Gmail Accounts' },
      { label: 'Buy Verified Google Voice Accounts', link: '/product/Buy Verified Google Voice Accounts' },
      { label: 'Trade with Confidence Using Verified Paxful Accounts', link: '/product/Trade with Confidence Using Verified Paxful Accounts' },
      { label: 'Buy Verified Binance Accounts', link: '/product/Buy Verified Binance Accounts' },
      { label: 'Buy USA Verified Skrill Accounts', link: '/product/Buy USA Verified Skrill Accounts' },
      { label: 'Buy Verified Payeer Accounts', link: '/product/Buy Verified Payeer Accounts' },
      { label: 'Buy Verified Coinbase Accounts', link: '/product/Buy Verified Coinbase Accounts' },
      { label: 'Buy Verified PayPal Accounts', link: '/product/Buy Verified PayPal Accounts' },
      { label: 'Buy Verified GO2 Bank Account', link: '/product/Buy Verified GO2 Bank Accounts' },
    ],
  },

  {
    name: 'Banking',
    dropdown: [
      { label: 'Verified Cash App Account', link: '/banking/cashapp' },
      { label: 'Verified PayPal Account', link: '/banking/paypal' },
      { label: 'Verified Payoneer Account', link: '/banking/payoneer' },
      { label: 'Verified Payeer Account', link: '/banking/payeer' },
      { label: 'Verified Coinbase Account', link: '/banking/coinbase' },
      { label: 'Verified Skrill Account', link: '/banking/skrill' },
      { label: 'Verified Wise Account', link: '/banking/wise' },
    ],
  },
  {
    name: 'Crypto',
    dropdown: [
      { label: 'Verified Binance Account', link: '/crypto/binance' },
      { label: 'Verified Paxful Account', link: '/crypto/paxful' },
      { label: 'Old GitHub Account', link: '/crypto/github' },
    ],
  },
  {
    name: 'SMM Service',
    dropdown: [
      { label: 'Facebook Ads Account', link: '/smm/facebook-ads' },
      { label: 'Google Voice Account', link: '/smm/google-voice' },
    ],
  },
  {
    name: 'SEO',
    dropdown: [
      { label: 'Backlinks', link: '/seo/backlinks' }
    ],
  },
  {
    name: 'Google',
    dropdown: [
      { label: 'USA Gmail Accounts', link: '/google/gmail-usa' },
      { label: 'Old Gmail Accounts', link: '/google/gmail-old' },
      { label: 'PVA Gmail Accounts', link: '/google/gmail-pva' },
      { label: 'Google Voice Accounts', link: '/google/voice' },
    ],
  },
  {
    name: 'Social Media',
    dropdown: [
      { label: 'LinkedIn Accounts', link: '/social/linkedin' },
      { label: 'USA Gmail Accounts', link: '/social/gmail-usa' },
      { label: 'Old Gmail Accounts', link: '/social/gmail-old' },
      { label: 'PVA Gmail Accounts', link: '/social/gmail-pva' },
      { label: 'Snapchat Accounts', link: '/social/snapchat' },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileDropdown = (idx) => {
    setActiveMobileDropdown(activeMobileDropdown === idx ? null : idx);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-400 font-bold uppercase tracking-wide hover:text-yellow-300 transition-colors duration-200">
              pvashopzone
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400 uppercase text-sm xl:text-base font-medium py-2 transition-colors duration-200">
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  
                  <div className={`absolute top-full left-0 w-72 bg-gray-900 text-white shadow-xl rounded-lg py-2 z-40 border-t-4 border-yellow-400 transition-all duration-300 ease-out transform ${
                      activeDropdown === idx
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                    <div className="max-h-96 overflow-y-auto">
                      {item.dropdown.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.link}
                          className="flex items-center gap-2 px-4 py-3 hover:bg-gray-800 hover:text-yellow-400 text-sm transition-colors duration-200 border-b border-gray-700 last:border-b-0"
                        >
                          <Plus className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.link}
                  className="hover:text-yellow-400 text-sm xl:text-base uppercase font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              )
            )}
            
            {/* Cart Icon */}
            <a
              href="/cart"
              className="flex items-center justify-center w-10 h-10 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-800 transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-gray-900`}>
        <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleMobileDropdown(idx)}
                  className="flex items-center justify-between w-full py-3 text-left text-base font-medium uppercase hover:text-yellow-400 transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileDropdown === idx ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  activeMobileDropdown === idx ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="pl-4 py-2 space-y-1 bg-gray-800 rounded-md mt-2">
                    {item.dropdown.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.link}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 py-2 px-2 text-sm hover:text-yellow-400 hover:bg-gray-700 rounded transition-colors duration-200"
                      >
                        <Plus className="w-3 h-3 flex-shrink-0 text-yellow-400" />
                        <span className="leading-tight">{sub.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={idx}
                href={item.link}
                onClick={closeMobileMenu}
                className="block py-3 text-base font-medium uppercase hover:text-yellow-400 transition-colors duration-200 border-b border-gray-700"
              >
                {item.name}
              </a>
            )
          )}
          
          {/* Mobile Cart Link */}
          <a
            href="/cart"
            onClick={closeMobileMenu}
            className="flex items-center gap-2 py-3 text-base font-medium uppercase hover:text-yellow-400 transition-colors duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </a>
        </div>
      </div>
    </nav>
  );
}