import React, { useState } from 'react';
import { Mail, MessageCircle, Send, X } from 'lucide-react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const contactOptions = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Gmail',
      value: 'pvashopzone@gmail.com',
      href: 'mailto:pvashopzone@gmail.com',
      bgColor: 'bg-red-500 hover:bg-red-600'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      value: '+17095079679',
      href: 'https://wa.me/17095079679',
      bgColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <Send className="w-5 h-5" />,
      label: 'Telegram',
      value: '+16396667833',
      href: 'https://t.me/+16722746630',
      bgColor: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Contact Options */}
      <div className={`absolute bottom-16   transition-all duration-200 ${
        isOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        <div className="space-y-2">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className={`transition-all duration-200 ${
                isOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-2 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-3 py-2 rounded-full shadow-md text-white transition-all duration-150 hover:shadow-lg whitespace-nowrap ${option.bgColor} transform translate-x-[-100%] ml-12`}
              >
                {option.icon}
                <span className="text-sm font-medium">{option.label}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main Contact Button */}
      <button
        onClick={toggleMenu}
        className={`w-12 h-12 rounded-full shadow-lg text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label="Contact options"
      >
        {isOpen ? (
          <X className="w-5 h-5 mx-auto" />
        ) : (
          <MessageCircle className="w-5 h-5 mx-auto" />
        )}
      </button>
    </div>
  );
};

export default FloatingContactButton;