import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import Trash icon
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Item removed from cart!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden py-10 px-4">
      {/* Left Glow */}
      <div className="absolute top-1/3 left-0 w-[700px] h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />

      {/* Right Glow */}
      <div className="absolute top-1/3 right-0 w-[800px] h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30" />

      <div className="max-w-4xl mx-auto rounded-2xl shadow-lg p-8">
        <h2 className="text-5xl font-extrabold mb-8 text-center uppercase text-white">
          🛒 Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              Your cart is currently empty.
            </p>
            <a
              href="/"
              className="inline-block mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-all"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all bg-[#67AE6E]/10 text-white relative"
              >
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                >
                  <FaTrash size={20} />
                </button>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white">{item.intro}</p> <br />
                <button className="text-white bg-black border px-10 py-5 rounded-md text-lg uppercase hover:bg-white/30 cursor-not-allowed">
                  Make the proccede
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
};
