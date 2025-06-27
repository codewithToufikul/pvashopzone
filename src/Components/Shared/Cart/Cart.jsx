import React, { useEffect, useState } from 'react';
import { Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    showToast('Item removed from cart!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
          toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            <span className="font-medium">{toast.message}</span>
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full">
                <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4 uppercase">
              🛒 Your Cart
            </h2>
          </div>

          {cartItems.length === 0 ? (
            // Empty Cart State
            <div className="text-center py-12 sm:py-20">
              <div className="mb-6 sm:mb-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mb-6">
                  <ShoppingCart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
                </div>
                <p className="text-gray-400 text-base sm:text-lg mb-6 px-4">
                  Your cart is currently empty.
                </p>
              </div>
              <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black transition-all duration-200 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform hover:scale-105">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                Continue Shopping
              </button>
            </div>
          ) : (
            // Cart Items
            <div className="space-y-4 sm:space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-[#67AE6E]/10 backdrop-blur-sm border border-gray-200/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-[#67AE6E]/20 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(index)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-full transition-all duration-200"
                  >
                    <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>

                  <div className="pr-12 sm:pr-16">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 pr-8">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                      {item.intro}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Safe price rendering */}
                      {item.price ? (
                        <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                          {item.price}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400 italic">Price not available</div>
                      )}
                      
                      <button className="w-full sm:w-auto text-white bg-black/50 hover:bg-white/10 border border-white/20 px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-sm sm:text-base uppercase font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20">
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
