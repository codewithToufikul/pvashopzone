import whyus from './whyus.jpg';
import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';

export const Whyus = () => {
  return (
    <div className="relative  bg-black pb-32 overflow-hidden">
      {/* Left Glow */}
      <div className="absolute top-1/3 left-0 w-[700px] h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />
      {/* Right Glow */}
      <div className="absolute top-1/3 right-0 w-[800px] h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30" />
      {/* Spinning Stars */}
      <img
        className="absolute top-10/12 left-10 animate-spin"
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

      <div className="max-w-[1700px] mx-auto   px-4">
        <h2 className="text-4xl md:text-7xl text-white font-bold text-center uppercase">
          why us
        </h2>
        <h1 className="text-white text-base md:text-lg text-center pt-2">
          Trusted experts delivering smart solutions that drive growth and
          success.
        </h1>

        <div className="mt-20 border border-[#87970a] rounded-2xl flex flex-col lg:flex-row items-center p-6 md:p-10 gap-10">
          <div className="w-full lg:w-[40%] pl-0 lg:pl-6">
            <h1 className="text-4xl md:text-7xl text-white uppercase font-bold w-[100%] md:w-[80%] pb-6">
              We <span className="text-[#87970a] opacity-55">trust</span> what
              we <span className="text-[#87970a] opacity-55">do</span>
            </h1>
            <div className="border-dotted border-white border-b mb-4"></div>
            <img src={whyus} className="w-full lg:w-[900px]" alt="Why Us" />
          </div>
          <div className="w-full md:w-[60%]">
            <h1 className="text-4xl md:text-7xl text-white uppercase font-bold w-full md:w-[60%] -mt-20  ">
              why we are{' '}
              <span className="text-[#87970a] opacity-55">different</span> ?
            </h1>
            <div className="w-full space-y-6 pt-10">
              {/* Accordion 1 */}
              <div className="collapse collapse-plus bg-[#6e8a38] border border-base-300 rounded-xl ">
                <input type="radio" name="whyus-accordion" defaultChecked />
                <div className="collapse-title text-xl font-bold text-black uppercase">
                  Our Company History
                </div>
                <div className="collapse-content text-lg  text-gray-700">
                  We began with the goal of simplifying banking. Now, we offer
                  clear reviews and comparisons of top banks to help users make
                  better decisions.
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="collapse collapse-plus bg-[#6e8a38] border border-base-300 rounded-xl">
                <input type="radio" name="whyus-accordion" />
                <div className="collapse-title text-xl font-bold text-black uppercase">
                  Our Success Mission
                </div>
                <div className="collapse-content text-lg text-gray-700">
                  We aim to provide accurate, unbiased banking information,
                  making it easy for users to find the best financial products.
                </div>
              </div>

              {/* Accordion 3 */}
              <div className="collapse collapse-plus bg-[#6e8a38] border border-base-300 rounded-xl">
                <input type="radio" name="whyus-accordion" />
                <div className="collapse-title text-xl font-bold text-black uppercase">
                  Our Future Plan
                </div>
                <div className="collapse-content text-lg text-gray-700">
                  We plan to launch a mobile app, interactive tools, and
                  AI-driven recommendations to improve the user experience and
                  make banking even easier.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
