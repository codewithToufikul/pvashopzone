import { useState } from 'react';
import whyus from './whyus.webp';
import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';

export const Whyus = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionData = [
    {
      title: "Our Company History",
      content: "We began with the goal of simplifying banking. Now, we offer clear reviews and comparisons of top banks to help users make better decisions."
    },
    {
      title: "Our Success Mission", 
      content: "We aim to provide accurate, unbiased banking information, making it easy for users to find the best financial products."
    },
    {
      title: "Our Future Plan",
      content: "We plan to launch a mobile app, interactive tools, and AI-driven recommendations to improve the user experience and make banking even easier."
    }
  ];

  return (
    <div className="relative bg-black pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Background Glows - Responsive positioning */}
      <div className="absolute top-1/4 sm:top-1/3 -left-32 sm:-left-16 lg:left-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[150px] sm:h-[200px] lg:h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-20 sm:opacity-30" />
      <div className="absolute top-1/4 sm:top-1/3 -right-32 sm:-right-16 lg:right-0 w-[350px] sm:w-[600px] lg:w-[800px] h-[150px] sm:h-[200px] lg:h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-20 sm:opacity-30" />
      
      {/* Decorative Stars - Responsive positioning and sizing */}
      <img
        className="absolute top-16 sm:top-20 left-4 sm:left-6 lg:left-10 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 animate-spin"
        src={landing_star}
        alt=""
      />
      <img
        className="absolute top-8 sm:top-12 right-4 sm:right-6 lg:right-10 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 animate-spin"
        src={landing_star}
        alt=""
      />
      <img
        className="absolute top-24 sm:top-32 left-0 sm:left-2 w-16 sm:w-20 lg:w-32"
        src={double_star}
        alt=""
      />
      <img
        className="absolute bottom-8 sm:bottom-12 right-0 sm:right-2 w-16 sm:w-20 lg:w-32"
        src={double_star}
        alt=""
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Better mobile typography */}
        <div className="text-center pt-12 sm:pt-16 lg:pt-20">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl text-white font-bold uppercase leading-tight">
            why us
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Trusted experts delivering smart solutions that drive growth and success.
          </p>
        </div>

        {/* Main Content Section - Improved mobile layout */}
        <div className="mt-12 sm:mt-16 lg:mt-20 border border-[#87970a] rounded-2xl p-4 sm:p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            
            {/* Left Section - Image and Title */}
            <div className="w-full lg:w-2/5 order-2 lg:order-1">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-white uppercase font-bold leading-tight mb-4 sm:mb-6">
                We <span className="text-[#87970a] opacity-55">trust</span> what we{' '}
                <span className="text-[#87970a] opacity-55">do</span>
              </h1>
              <div className="border-dotted border-white border-b mb-4 sm:mb-6"></div>
              <div className="w-full">
                <img 
                  src={whyus} 
                  className="w-full h-auto rounded-lg" 
                  alt="Why Us" 
                />
              </div>
            </div>

            {/* Right Section - Accordion */}
            <div className="w-full lg:w-3/5 order-1 lg:order-2">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-white uppercase font-bold leading-tight mb-6 sm:mb-8 lg:mb-10">
                why we are{' '}
                <span className="text-[#87970a] opacity-55">different</span>?
              </h1>
              
              {/* Custom Accordion - Mobile Optimized */}
              <div className="space-y-4 sm:space-y-6">
                {accordionData.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-[#6e8a38] border border-gray-300 rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between bg-[#6e8a38] hover:bg-[#5a7230] transition-colors duration-200"
                      onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    >
                      <span className="text-base sm:text-lg lg:text-xl font-bold text-black uppercase pr-4">
                        {item.title}
                      </span>
                      <span className="text-black text-xl sm:text-2xl font-bold flex-shrink-0">
                        {activeAccordion === index ? '−' : '+'}
                      </span>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      activeAccordion === index ? 'max-h-40' : 'max-h-0'
                    } overflow-hidden`}>
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};