import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking from '@egjs/react-flicking';
import { useEffect, useRef, useState } from 'react';
import '@egjs/react-flicking/dist/flicking.css';

  import image1 from './images/01.webp';
import image2 from './images/02.webp';
import image3 from './images/03.webp';
import image4 from './images/04.webp';
import image5 from './images/5.webp';
import image6 from './images/6.webp';

// Mock star icons using Unicode stars
const StarIcon = ({ className }) => (
  <div className={`text-yellow-400 text-4xl ${className}`}>
    ⭐
  </div>
);

const DoubleStarIcon = ({ className }) => (
  <div className={`text-yellow-400 text-6xl ${className}`}>
    ✨
  </div>
);

export const Experties = () => {
  const flickingRef = useRef(null);
  const [plugins, setPlugins] = useState([]);
  const [panelsPerView, setPanelsPerView] = useState(1);
  const [spacing, setSpacing] = useState(12);

  useEffect(() => {
    const updateResponsiveSettings = () => {
      const width = window.innerWidth;
      
      if (width < 480) {
        // Extra small mobile
        setPanelsPerView(1);
        setSpacing(8);
      } else if (width < 640) {
        // Small mobile
        setPanelsPerView(1);
        setSpacing(12);
      } else if (width < 768) {
        // Large mobile / small tablet
        setPanelsPerView(1.5);
        setSpacing(16);
      } else if (width < 1024) {
        // Tablet
        setPanelsPerView(2);
        setSpacing(20);
      } else if (width < 1280) {
        // Small desktop
        setPanelsPerView(3);
        setSpacing(24);
      } else {
        // Large desktop
        setPanelsPerView(4);
        setSpacing(24);
      }
    };

    updateResponsiveSettings();
    window.addEventListener('resize', updateResponsiveSettings);
    return () => window.removeEventListener('resize', updateResponsiveSettings);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const autoplay = new AutoPlay({
        duration: 5000,
        direction: 'NEXT',
        stopOnHover: true,
        autoplay: true,
      });

      setPlugins([autoplay]);
    }
  }, []);

  const cards = [
    {
      image: image6,
      name: 'Oliver Bennett',
      title: 'SEO Researcher',
      description: 'Custom SEO review strategy that drives organic growth and improves search rankings.',
    },
    {
      image: image4,
      name: 'Madison Lee',
      title: 'Review Campaign Strategist',
      description: 'Boost your ranking with authentic reviews and strategic campaign management.',
    },
    {
      image: image3,
      name: 'Anastasiia Hlushchenko',
      title: 'Shell Account Analyst',
      description: 'Data-driven shell account optimization for maximum performance and ROI.',
    },
    {
      image: image2,
      name: 'Amelia Clarke',
      title: 'Conversion Copywriter',
      description: 'Engaging copy that converts visitors into customers and drives sales.',
    },
    {
      image: image5,
      name: 'Ethan Walker',
      title: 'Technical SEO Auditor',
      description: 'Comprehensive technical audits for shell account sites and optimization.',
    },
    {
      image: image1,
      name: 'Kateryna Shevchenko',
      title: 'Organic Growth Specialist',
      description: 'Organic traffic growth strategies with guaranteed results and measurable impact.',
    },
  ];

  return (
    <div className="relative bg-black overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Glow - Responsive positioning */}
        <div className="absolute top-1/4 sm:top-1/3 -left-32 sm:-left-64 lg:-left-0 w-[400px] sm:w-[600px] lg:w-[700px] h-[200px] sm:h-[250px] lg:h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-20 sm:opacity-25 lg:opacity-30" />
        
        {/* Right Glow - Responsive positioning */}
        <div className="absolute top-2/3 -right-32 sm:-right-64 lg:-right-0 w-[500px] sm:w-[700px] lg:w-[800px] h-[200px] sm:h-[250px] lg:h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-20 sm:opacity-25 lg:opacity-30" />
      </div>

      {/* Animated Stars - Better mobile positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <StarIcon className="absolute top-[15%] left-[5%] sm:left-[8%] animate-spin" />
        <StarIcon className="absolute top-[8%] right-[5%] sm:right-[8%] animate-spin" />
        <DoubleStarIcon className="absolute top-[25%] left-[2%] sm:left-[5%] opacity-80" />
        <DoubleStarIcon className="absolute bottom-[15%] right-[2%] sm:right-[5%] opacity-80" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-white font-bold leading-tight mb-4 sm:mb-6">
            Proven Expertise
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-none sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto leading-relaxed">
            Our team brings deep industry knowledge and hands-on experience to
            deliver tailored solutions that drive success and lasting impact for
            your brand.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white border-dotted mb-8 sm:mb-12" />

        {/* Cards Carousel */}
        <div className="mb-8 sm:mb-12">
          <Flicking
            ref={flickingRef}
            circular={true}
            align="prev"
            panelsPerView={panelsPerView}
            spacing={spacing}
            plugins={plugins}
            className="w-full"
          >
            {cards.map((card, index) => (
              <div key={index} className="flicking-panel">
                <div className="rounded-xl p-4 sm:p-5 md:p-6 h-full bg-black text-white text-center shadow-lg border border-white/20 hover:border-white/40 transition-colors duration-300 min-h-[320px] sm:min-h-[350px] flex flex-col">
                  {/* Image */}
                  <div className="mb-4 flex-shrink-0">
                    <img
                      className="rounded-lg mx-auto w-20 h-40 sm:w-24 sm:h-24 md:w-28 md:h-28 object-top object-cover"
                      src={card.image}
                      alt={card.name}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white">
                        {card.name}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg italic text-yellow-300 mb-3 sm:mb-4 font-medium">
                        {card.title}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Flicking>
        </div>

        {/* Bottom Divider */}
        <div className="border-t-2 border-white border-dotted" />
      </div>
    </div>
  );
};

export default Experties;