import image1 from './images/1.svg';
import image2 from './images/2.svg';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';
import image9 from './images/9.png';
import tele from './images/telegram.png';
import wp from './images/wp.png';
import gmail from './images/gmail.png';

export const Footer = () => {
  return (
    <div className="relative bg-black overflow-hidden py-10 px-4">
      {/* Glows */}
      <div className="absolute top-1/3 left-0 w-[200px] h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/3 right-0 w-[200px] h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-2/3 bottom-0 w-full h-[100px] bg-yellow-800 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-[1700px] mx-auto z-10">
        {/* Social icons */}
        <div className="w-full flex justify-center gap-6 flex-wrap mb-6">
          <a
            href="mailto:info@pvashopzone.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            <img className="w-12 sm:w-14" src={gmail} alt="gmail" />
          </a>

          <a
            href="https://wa.me/01559634929"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            <img className="w-12 sm:w-14" src={wp} alt="whatsapp" />
          </a>

          <a
            href="https://t.me/01559634929"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <img className="w-12 sm:w-14" src={tele} alt="telegram" />
          </a>
        </div>

        {/* Navigation */}
        <div className="text-white flex flex-wrap justify-center text-center text-sm sm:text-xl gap-4 sm:gap-6 uppercase">
          <span>Home</span>
          <span className="hidden sm:inline-block border-r border-gray-400 h-4"></span>
          <span>Cripto</span>
          <span className="hidden sm:inline-block border-r border-gray-400 h-4"></span>
          <span>SMM Service</span>
          <span className="hidden sm:inline-block border-r border-gray-400 h-4"></span>
          <span>SEO</span>
          <span className="hidden sm:inline-block border-r border-gray-400 h-4"></span>
          <span>Banking</span>
          <span className="hidden sm:inline-block border-r border-gray-400 h-4"></span>
          <span>Review</span>
        </div>

        <div className="border-dotted border-white border-b w-[50%] sm:w-[20%] mx-auto pt-4"></div>
        <h1 className="text-gray-400 pt-2 text-center text-sm sm:text-lg">
          Need something? Feel free to contact with us!
        </h1>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6">
          {[
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
          ].map((img, index) => (
            <img
              key={index}
              className="w-14 sm:w-20"
              src={img}
              alt={`logo-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
