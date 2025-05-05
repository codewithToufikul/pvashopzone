import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaPlus } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const navItems = [
  { name: 'Home', link: '/' },
  {
    name: 'Banking',
    dropdown: [
      { label: 'Verified Cash App account', link: 'https://www.google.com' },
      { label: 'Verified Paypal account', link: 'https://www.google.com' },
      { label: 'Verified Payoneer account', link: 'https://www.google.com' },
      { label: 'Verified payer account', link: 'https://www.google.com' },
      { label: 'Verified Coinbase account', link: 'https://www.google.com' },
      { label: 'Verified Skrill account', link: 'https://www.google.com' },
      { label: 'Verified Wise account', link: 'https://www.google.com' },
    ],
  },
  {
    name: 'Cripto',
    dropdown: [
      { label: 'Verified binance account', link: 'https://www.google.com' },
      { label: 'Verified Paxful account', link: 'https://www.google.com' },
      { label: 'Old GitHub account', link: 'https://www.google.com' },
    ],
  },
  {
    name: 'SMM Service',
    dropdown: [
      { label: ' Facebook Ads Account', link: 'https://www.google.com' },
      { label: ' google Voice Account', link: 'https://www.google.com' },
    ],
  },
  {
    name: ' SEO',
    dropdown: [{ label: 'Backlink', link: 'https://www.google.com' }],
  },
  {
    name: 'Google',
    dropdown: [
      { label: '   USA Gmail ', link: 'https://www.google.com' },
      { label: 'Old Gmail account ', link: 'https://www.google.com' },
      { label: 'PVA Gmail account ', link: 'https://www.google.com' },
      { label: ' google Voice Account', link: 'https://www.google.com' },
    ],
  },

  {
    name: 'Social Media',
    dropdown: [
      { label: 'LinkedIn account', link: 'https://www.google.com' },
      { label: ' USA Gmail', link: 'https://www.google.com' },
      { label: 'Old Gmail account', link: 'https://www.google.com' },
      { label: 'PVA Gmail account', link: 'https://www.google.com' },
      { label: 'Snapchat account', link: 'https://www.google.com' },
    ],
  },
  {
    name: <FaCartShopping size={24} />, // ✅ Correct fix here
    link: '/cart',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 ">
      <div className="mx-auto sm:px-6 lg:px-8 xl:px-0">
        <div className="flex w-full items-center h-20">
          <div className="text-3xl text-yellow-400 font-bold w-[40%] md:w-[30%] justify-center flex md:justify-end md:pr-52 uppercase">
            pvashopzone
            {/* <span className="text-red-500"> .</span> Ratul */}
          </div>
          <div className="hidden md:flex space-x-8 items-center w-[70%] mr-52 md:justify-end gap-10">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="hover:text-gray-300 uppercase text-xl py-5 cursor-pointer">
                    {item.name}
                  </button>
                  <div
                    className={`absolute top-full left-0 w-64 bg-black text-white shadow-lg rounded-t-md py-2 z-40 border-t-4 border-[#607831] transition-all duration-700 ease-out transform ${
                      activeDropdown === idx
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                  >
                    {item.dropdown.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" px-4 py-2 hover:text-[#607831] text-white cursor-pointer flex items-center gap-1 "
                      >
                        <FaPlus className="text-xs" />
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.link}
                  className="hover:text-gray-300 text-xl uppercase"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pr-4 flex justify-end w-[70%]">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <details
                key={idx}
                className="text-white border-b border-gray-700 pb-2"
              >
                <summary className="cursor-pointer py-3 text-lg uppercase font-semibold hover:text-[#607831]">
                  {item.name}
                </summary>
                <div className="bg-black text-white px-4 py-2 space-y-1">
                  {item.dropdown.map((sub, subIdx) => (
                    <a
                      key={subIdx}
                      href={sub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base py-1 hover:text-[#607831]"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={idx}
                href={item.link}
                className="block py-3 text-lg uppercase font-semibold hover:text-[#607831]"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
