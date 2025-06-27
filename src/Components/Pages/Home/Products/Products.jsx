import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';
import backlinks from './products/backlinks.webp';
import bainance from './products/bainance.webp';
import cashApp from './products/cash-app.webp';
import coinbase from './products/coinbase.webp';
import facebookAds from './products/facebook-ads.webp';
import github from './products/github.webp';
import googleVoice from './products/google-voice.webp';
import linkedin from './products/linkedIn.webp';
import oldGmail from './products/old-gmail.webp';
import paxful from './products/paxful.webp';
import payeer from './products/payeer.webp';
import payonner from './products/payonner.webp';
import pvaGmail from './products/pva-gmail.webp';
import reviews from './products/reviews.webp';
import skrill from './products/skrill.webp';
import snapchat from './products/snapchat.webp';
import usaGmail from './products/usa-gmail.webp';
import paypal from './products/paypal.webp';
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
    <div className="relative min-h-screen bg-black overflow-hidden px-4 py-6 sm:p-4">
      {/* Background glows - adjusted for mobile */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[150px] sm:w-[500px] sm:h-[250px] lg:w-[700px] lg:h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-20 sm:opacity-30" />
      <div className="absolute top-1/3 right-0 w-[350px] h-[175px] sm:w-[600px] sm:h-[250px] lg:w-[800px] lg:h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-20 sm:opacity-30" />
      
      {/* Decorative stars - responsive positioning and sizing */}
      <img
        className="absolute top-[20%] left-[5%] w-8 h-8 sm:w-12 sm:h-12 animate-spin"
        src={landing_star}
        alt=""
      />
      <img
        className="absolute top-[10%] right-[5%] w-8 h-8 sm:w-12 sm:h-12 animate-spin"
        src={landing_star}
        alt=""
      />
      <img
        className="absolute top-[50%] left-[2%] w-16 sm:w-20 lg:w-32"
        src={double_star}
        alt=""
      />
      <img
        className="absolute top-[15%] left-[3%] w-16 sm:w-20 lg:w-32"
        src={double_star}
        alt=""
      />
      <img
        className="absolute bottom-[20%] right-[15%] w-16 sm:w-20 lg:w-32"
        src={double_star}
        alt=""
      />
      <img
        className="absolute bottom-[40%] right-[2%] w-16 sm:w-20 lg:w-32"
        src={double_star}
        alt=""
      />

      <div className="relative z-10 text-white max-w-[1700px] mx-auto">
        {/* Responsive heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-8 sm:my-12 lg:my-20 text-center px-4">
          Features Item
        </h1>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
          {services.slice(0, visibleCount).map((service, index) => (
            <Link
              key={index}
              to={`/product/${encodeURIComponent(service.title)}`}
              className="block"
            >
              <div
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className="bg-gray-900 rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-yellow-500 transition-all duration-300 h-full flex flex-col"
              >
                {/* Image container with aspect ratio */}
                <div className="aspect-video w-full mb-3 sm:mb-4 overflow-hidden rounded-xl">
                  <img
                    src={imageMap[service.title] || reviews}
                    alt={service.title}
                    className="w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                {/* Content section */}
                <div className="flex-1 flex flex-col">
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2 leading-tight">
                    {service.title}
                  </h2>
                  
                  {/* Price display */}
                  {service.price && (
                    <div className="mb-3 sm:mb-4">
                      <span className="text-yellow-400 text-lg sm:text-xl lg:text-2xl font-bold">
                        ${service.price}
                      </span>
                    </div>
                  )}
                  
                  {/* Button container */}
                  <div className="mt-auto">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(service);
                      }}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base lg:text-lg cursor-pointer rounded-md text-white border border-[#454f2e] hover:bg-black transition-all duration-300 active:scale-95"
                    >
                      Make a Purchase
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more button */}
        {visibleCount < services.length && (
          <div className="flex justify-center mt-8 sm:mt-10 px-4">
            <button
              onClick={handleLoadMore}
              className="text-white border px-6 py-2 sm:px-8 sm:py-3 rounded-md text-sm sm:text-base lg:text-lg border-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300 active:scale-95"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Toast container with responsive positioning */}
      <ToastContainer 
        position="top-right"
        className="!top-4 !right-4 sm:!top-6 sm:!right-6"
        toastClassName="!text-sm sm:!text-base"
      />
    </div>
  );
};