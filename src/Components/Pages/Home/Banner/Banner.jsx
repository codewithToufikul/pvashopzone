import './Banner.css';
import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css'; // import default styling
import { useEffect, useRef, useState } from 'react';
import { AutoPlay } from '@egjs/flicking-plugins';
import image1 from './image/01.jpg';
import image2 from './image/02.jpg';
import image3 from './image/03.jpg';
import image4 from './image/04.jpg';
import image5 from './image/05.jpg';
import image6 from './image/06.jpg';
import image7 from './image/07.jpg';
import image8 from './image/08.jpg';
export const Banner = () => {
  const flickingRef = useRef(null);
  const [plugins, setPlugins] = useState([]);
  const [panelsPerView, setPanelsPerView] = useState(3);

  useEffect(() => {
    const updatePanelsPerView = () => {
      if (window.innerWidth < 768) {
        setPanelsPerView(1);
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
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Left Glow */}
      <div className="absolute top-1/3 left-0 w-[700px] h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />

      {/* Right Glow */}
      <div className="absolute top-1/3 right-0 w-[800px]  h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30" />

      <div className="flex flex-col items-center h-[100vh] max-w-[1700px] mx-auto overflow-hidden">
        {/* Spinning Stars */}
        <img
          className="absolute top-2/5 left-1/6 animate-spin"
          src={landing_star}
          alt=""
        />
        <img
          className="absolute top-1/12 right-1/12 animate-spin"
          src={landing_star}
          alt=""
        />
        <img
          className="absolute top-0/12 left-1/12 w-32"
          src={double_star}
          alt=""
        />
        <img
          className="absolute bottom-1/12 right-0/12 w-32"
          src={double_star}
          alt=""
        />

        {/* Headings */}
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-white text-3xl  md:text-7xl font-bold uppercase text-center w-[95%] md:w-[65%] pt-[5vh] md:pt-[17vh] "
        >
          Unlock <span className="text-[#87970a]">shell</span> Account Success
          with Smart <span className="text-[#87970a]">SEO</span> Strategies
        </h1>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-white text-sm md:text-lg w-[90%] md:w-[50%] text-center pt-6 md:pt-12 "
        >
          We optimize shell account listings with strategic SEO and compelling
          reviews to boost visibility, credibility, and conversions across
          search engines.
        </h1>

        {/* CTA Button */}
        <button
          data-aos="zoom-out-up"
          data-aos-duartion="1000"
          className="relative  text-white uppercase text-2xl border border-[#87970a] rounded px-16 py-4 mt-10 group cursor-pointer "
        >
          <span className="relative z-10">Start Explore</span>
          <span className="absolute inset-0 bg-[#87970a] transition-all duration-700 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        </button>

        {/* Carousel */}
        <div className="w-full mt-20 px-10">
          <Flicking
            ref={flickingRef}
            circular={true}
            align="prev"
            panelsPerView={panelsPerView}
            spacing={16}
            plugins={plugins}
          >
            {/* Card 1 */}
            <div className="flicking-panel w-[33.333%]  px-4">
              <div className="border border-[#87970a] rounded-xl p-6 h-full bg-black text-white text-center">
                <img src={image1} className="w-full" alt="" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="flicking-panel w-[33.333%] px-4">
              <div className="border border-[#87970a] rounded-xl p-6 h-full bg-black text-white text-center">
                <img src={image2} className="w-[100%]" alt="" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="flicking-panel w-[33.333%] px-4">
              <div className="border border-[#87970a] rounded-xl p-6 h-full bg-black text-white text-center">
                <img src={image3} alt="" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="flicking-panel w-[33.333%] px-4">
              <div className="border border-[#87970a] rounded-xl p-6 h-full bg-black text-white text-center">
                <img src={image4} alt="" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="flicking-panel w-[33.333%] px-4">
              <div className="border border-[#87970a] rounded-xl p-6 h-full bg-black text-white text-center">
                <img src={image5} alt="" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="flicking-panel w-[33.333%] px-4">
              <div className="border border-[#87970a] rounded-xl p-6 h-full bg-black text-white text-center">
                <img src={image6} alt="" />
              </div>
            </div>

            {/* Card 7 */}
            <div className="flicking-panel w-[33.333%] px-4">
              <div className="border border-[#87970a] rounded-xl p-6 h-full bg-black text-white text-center">
                <img src={image7} alt="" />
              </div>
            </div>

            {/* Card 8 */}
            <div className="flicking-panel w-[33.333%] px-4">
              <div className="border border-[#87970a] rounded-xl p-6 h-full bg-black text-white text-center">
                <img src={image8} alt="" />
              </div>
            </div>
          </Flicking>
        </div>
      </div>
    </div>
  );
};
