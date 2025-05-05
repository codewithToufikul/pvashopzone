import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';
import backlinks from './products/backlinks.png';
import bainance from './products/bainance.jpg';
import cashApp from './products/cash-app.jpg';
import coinbase from './products/coinbase.jpg';
import facebookAds from './products/facebook-ads.jpg';
import github from './products/github.jpg';
import googleVoice from './products/google-voice.jpg';
import linkedin from './products/linkedIn.jpg';
import oldGmail from './products/old-gmail.jpg';
import paxful from './products/paxful.jpg';
import payeer from './products/payeer.jpg';
import payonner from './products/payonner.jpg';
import pvaGmail from './products/pva-gmail.jpg';
import reviews from './products/reviews.jpg';
import skrill from './products/skrill.jpg';
import snapchat from './products/snapchat.jpg';
import usaGmail from './products/usa-gmail.jpg';
import paypal from './products/paypal.jpg';
import { Link } from 'react-router-dom';

const imageMap = {
  'Buy Verified Snapchat Accounts': snapchat,
  'Buy Verified LinkedIn Accounts': linkedin,
  'Buy Verified GitHub Accounts': github,
  'Buy Facebook Ads Accounts': facebookAds,
  'How to Buy Backlinks Safely in 2025': backlinks,
  'Buy Verified USA Gmail Accounts': usaGmail,
  'Buy PVA Gmail Accounts': pvaGmail,
  'Buy Old Gmail Accounts': oldGmail,
  'Buy Verified Google Voice Accounts': googleVoice,
  'Trade with Confidence Using Verified Paxful Accounts': paxful,
  'Buy Verified Binance Accounts': bainance,
  'Buy USA Verified Skrill Accounts': skrill,
  'Buy Verified Payeer Accounts': payeer,
  'Buy Verified Payonner Accounts': payonner,
  'Buy Verified Coinbase Accounts': coinbase,
  'Buy Verified Cash App Accounts': cashApp,
  'Buy Verified PayPal Accounts': paypal,
  'Buy Product Reviews': reviews,
};

export const Products = () => {
  const [services, setServices] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data.services))
      .catch((err) => console.error('Failed to fetch services:', err));

    const cartExpiry = localStorage.getItem('cartExpiry');
    if (cartExpiry && Date.now() > Number(cartExpiry)) {
      localStorage.removeItem('cart');
      localStorage.removeItem('cartExpiry');
    }
  }, []);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('cartExpiry', Date.now() + 24 * 60 * 60 * 1000);

    toast.success(`${product.title} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden p-4">
      {/* Glows and stars */}
      <div className="absolute top-1/3 left-0 w-[700px] h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/3 right-0 w-[800px] h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30" />
      <img
        className="absolute top-2/5 left-0/12 animate-spin"
        src={landing_star}
        alt=""
      />
      <img
        className="absolute top-1/12 right-0/12 animate-spin"
        src={landing_star}
        alt=""
      />
      <img
        className="absolute top-6/12 left-0/12 w-32"
        src={double_star}
        alt=""
      />
      <img
        className="absolute top-2/12 left-0/12 w-32"
        src={double_star}
        alt=""
      />
      <img
        className="absolute bottom-1/12 right-3/12 w-32"
        src={double_star}
        alt=""
      />
      <img
        className="absolute bottom-6/12 right-0/12 w-32"
        src={double_star}
        alt=""
      />

      <div className="relative z-10 text-white max-w-[1700px] mx-auto">
        <h1 className="text-7xl font-bold my-20 text-center">Features Item</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, visibleCount).map((service, index) => (
            <Link
              key={index}
              to={`/product/${encodeURIComponent(service.title)}`}
              className="block"
            >
              <div
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-yellow-500 transition"
              >
                <img
                  src={imageMap[service.title] || reviews}
                  alt={service.title}
                  className="rounded-xl w-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // prevent redirect
                    handleAddToCart(service);
                  }}
                  className="mt-4 px-4 py-2 text-xl cursor-pointer rounded-md text-white border border-[#454f2e] hover:bg-black"
                >
                  Make a Purchase
                </button>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < services.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="text-white border px-6 py-2 rounded-md text-lg border-yellow-600 hover:bg-yellow-600 hover:text-black transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};
