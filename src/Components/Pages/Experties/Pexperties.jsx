import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking from '@egjs/react-flicking';
import { useEffect, useRef, useState } from 'react';
import '@egjs/react-flicking/dist/flicking.css';
import image1 from './images/01.jpg';
import image2 from './images/02.jpg';
import image3 from './images/03.jpg';
import image4 from './images/04.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';

export const Experties = () => {
  const flickingRef = useRef(null);
  const [plugins, setPlugins] = useState([]);
  const [panelsPerView, setPanelsPerView] = useState(4);

  useEffect(() => {
    const updatePanelsPerView = () => {
      if (window.innerWidth < 640) {
        setPanelsPerView(1);
      } else if (window.innerWidth < 1024) {
        setPanelsPerView(2);
      } else {
        setPanelsPerView(4);
      }
    };

    updatePanelsPerView();
    window.addEventListener('resize', updatePanelsPerView);
    return () => window.removeEventListener('resize', updatePanelsPerView);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const autoplay = new AutoPlay({
        duration: 5000,
        direction: 'NEXT',
        stopOnHover: false,
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
      description: 'This is a custom SEO review strategy.',
    },
    {
      image: image4,
      name: 'Madison Lee',
      title: 'Review Campaign Strategist',
      description: 'Boost your ranking with real reviews.',
    },
    {
      image: image3,
      name: 'Anastasiia Hlushchenko',
      title: 'Shell Account Analyst',
      description: 'Data-driven shell account optimization.',
    },
    {
      image: image2,
      name: 'Amelia Clarke',
      title: 'Conversion Copywriter',
      description: 'Engaging copy that converts visitors.',
    },
    {
      image: image5,
      name: 'Ethan Walker',
      title: 'Technical SEO Auditor',
      description: 'Technical audits for shell account sites.',
    },
    {
      image: image1,
      name: 'Kateryna Shevchenko',
      title: 'Organic Growth Specialist',
      description: 'Organic traffic growth guaranteed.',
    },
  ];

  return (
    <div className="relative bg-black overflow-hidden py-20 px-4 sm:px-6 lg:px-10">
      {/* Left Glow */}
      <div className="absolute top-1/3 left-0 w-[700px] h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* Right Glow */}
      <div className="absolute top-2/3 right-0 w-[800px] h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* Spinning Stars */}
      <img
        className="absolute top-4/5 left-0/6 animate-spin"
        src={landing_star}
        alt=""
      />
      <img
        className="absolute top-1/12 right-1/12 animate-spin"
        src={landing_star}
        alt=""
      />
      <img
        className="absolute top-3/12 left-0/12 w-32"
        src={double_star}
        alt=""
      />
      <img
        className="absolute bottom-1/12 right-0/12 w-32"
        src={double_star}
        alt=""
      />

      <div className="max-w-[1700px] mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl uppercase text-white font-bold">
            Proven Expertise
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg w-full sm:w-[80%] md:w-[60%] mx-auto pt-4">
            Our team brings deep industry knowledge and hands-on experience to
            deliver tailored solutions that drive success and lasting impact for
            your brand.
          </p>
        </div>

        <div className="border-t-2 border-white mt-16 mb-10 border-dotted" />

        <Flicking
          ref={flickingRef}
          circular={true}
          align="prev"
          panelsPerView={panelsPerView}
          spacing={16}
          plugins={plugins}
        >
          {cards.map((card, index) => (
            <div key={index} className="flicking-panel px-2 sm:px-4">
              <div className="rounded-xl p-4 sm:p-6 h-full bg-black text-white text-center shadow-md border border-white/10">
                <img
                  className="rounded-md mx-auto mb-4"
                  src={card.image}
                  alt={`Card ${index + 1}`}
                />
                <h2 className="text-lg sm:text-2xl font-bold mb-1">
                  {card.name}
                </h2>
                <p className="text-sm sm:text-base italic text-yellow-300 mb-2">
                  {card.title}
                </p>
                <p className="text-sm sm:text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </Flicking>

        <div className="border-t-2 border-white mt-10 mb-10 border-dotted" />
      </div>
    </div>
  );
};
