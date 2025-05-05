import airbnb from './images/airbnb.png';
import microsoft from './images/microsoft.png';
import amazon from './images/amazon3.png';
import fedex from './images/fedex2.png';
import ama from './images/ama.svg';

export const Trusted = () => {
  return (
    <div className="relative  bg-black px-4 pt-10 pb-24">
      {/* Left Glow */}
      <div className="absolute top-1/4 left-0 w-[200px] h-[100px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />

      {/* Right Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[100px] bg-yellow-800 rounded-full blur-3xl opacity-30" />

      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 bg-white/10 p-6 sm:p-10 rounded-lg">
          {/* Heading */}
          <h1 className="text-white font-medium text-2xl sm:text-3xl text-center lg:text-left capitalize leading-snug">
            Trusted by top <span className="text-[#87970a]">companies</span>
          </h1>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 items-center justify-center w-full">
            <div className="flex justify-center">
              <img
                className="w-[120px] sm:w-[180px] lg:w-[220px]"
                src={fedex}
                alt="FedEx"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-[120px] sm:w-[180px] lg:w-[220px]"
                src={airbnb}
                alt="Airbnb"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-[120px] sm:w-[180px] lg:w-[220px]"
                src={microsoft}
                alt="Microsoft"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-[120px] sm:w-[180px] lg:w-[220px]"
                src={amazon}
                alt="Amazon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
