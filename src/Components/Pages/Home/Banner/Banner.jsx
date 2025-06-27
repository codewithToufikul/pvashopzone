import './Banner.css';
import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css'; // import default styling
import { useEffect, useRef, useState } from 'react';
import { AutoPlay } from '@egjs/flicking-plugins';
import image1 from './image/01.webp';
import image2 from './image/02.webp';
import image3 from './image/03.webp';
import image4 from './image/04.webp';
import image5 from './image/05.webp';
import image6 from './image/06.webp';
import image7 from './image/07.webp';
import image8 from './image/08.webp';

export const Banner = () => {
  const flickingRef = useRef(null);
  const [plugins, setPlugins] = useState([]);
  const [panelsPerView, setPanelsPerView] = useState(3);

  useEffect(() => {
    const updatePanelsPerView = () => {
      if (window.innerWidth < 640) {
        setPanelsPerView(1);
      } else if (window.innerWidth < 1024) {
        setPanelsPerView(2);
      } else {
        setPanelsPerView(3);
      }
    };

    updatePanelsPerView();
    window.addEventListener('resize', updatePanelsPerView);
    return () => window.removeEventListener('resize', updatePanelsPerView);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const autoplay = new AutoPlay({
        duration: 700,
        direction: 'NEXT',
        stopOnHover: false,
        autoplay: true,
      });

      setPlugins([autoplay]);
    }
  }, []);

  return (
    <div className="relative min-h-screen  bg-black overflow-hidden">
      {/* Left Glow - Responsive */}
      <div className="absolute  top-1/3 left-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[150px] sm:h-[250px] lg:h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />

      {/* Right Glow - Responsive */}
      <div className="absolute  top-1/3 right-0 w-[350px] sm:w-[600px] lg:w-[800px] h-[150px] sm:h-[250px] lg:h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30" />

      <div className="flex flex-col items-center min-h-screen max-w-[1700px] mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Spinning Stars - Responsive positioning and sizing */}
        <img
          className="absolute top-[40%] left-[8%] sm:left-[12%] lg:left-[16%] w-6 sm:w-8 lg:w-10 animate-spin"
          src={landing_star}
          alt=""
        />
        <img
          className="absolute top-[8%] right-[8%] sm:right-[10%] lg:right-[12%] w-6 sm:w-8 lg:w-10 animate-spin"
          src={landing_star}
          alt=""
        />
        <img
          className="absolute top-[2%] left-[4%] sm:left-[6%] lg:left-[8%] w-16 sm:w-24 lg:w-32"
          src={double_star}
          alt=""
        />
        <img
          className="absolute bottom-[8%] right-[2%] sm:right-[4%] lg:right-0 w-16 sm:w-24 lg:w-32"
          src={double_star}
          alt=""
        />

        {/* Headings - Improved responsive typography and spacing */}
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-center w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] pt-[8vh] sm:pt-[12vh] md:pt-[15vh] lg:pt-[17vh] leading-tight"
        >
          Unlock <span className="text-[#87970a]">shell</span> Account Success
          with Smart <span className="text-[#87970a]">SEO</span> Strategies
        </h1>
        
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-white text-xs sm:text-sm md:text-base lg:text-lg w-[95%] sm:w-[80%] md:w-[65%] lg:w-[50%] text-center pt-4 sm:pt-6 md:pt-8 lg:pt-12 leading-relaxed"
        >
          We optimize shell account listings with strategic SEO and compelling
          reviews to boost visibility, credibility, and conversions across
          search engines.
        </h2>

        {/* CTA Button - Responsive sizing and spacing */}
        <button
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="relative text-white uppercase text-sm sm:text-lg md:text-xl lg:text-2xl border border-[#87970a] rounded px-6 sm:px-10 md:px-14 lg:px-16 py-3 sm:py-4 mt-6 sm:mt-8 lg:mt-10 group cursor-pointer hover:shadow-lg transition-all duration-300"
        >
          <span className="relative z-10">Start Explore</span>
          <span className="absolute inset-0 bg-[#87970a] transition-all duration-700 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100 rounded"></span>
        </button>

        {/* Carousel - Improved responsive spacing and sizing */}
        <div className="w-full mt-8 sm:mt-12 lg:mt-20 px-2 sm:px-4 lg:px-10">
          <Flicking
            ref={flickingRef}
            circular={true}
            align="prev"
            panelsPerView={panelsPerView}
            spacing={8}
            plugins={plugins}
            className="overflow-visible "
          >
            {[image1, image2, image3, image4, image5, image6, image7, image8].map((image, index) => (
              <div key={index} className="flicking-panel mb-2 px-2 sm:px-4" style={{ width: panelsPerView === 1 ? '100%' : panelsPerView === 2 ? '50%' : '33.333%' }}>
                <div className="border border-[#87970a] rounded-xl p-3 sm:p-4 lg:p-6 h-full bg-black text-white text-center hover:border-[#a5b50c] transition-colors duration-300">
                  <img 
                    src={image} 
                    className="w-full h-auto rounded-lg object-cover" 
                    alt={`Gallery image ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Flicking>
        </div>
      </div>
    </div>
  );
};