import content from './image/content.png';
import data from './image/data.png';
import digital from './image/digital.png';
import seo from './image/seo.png';
import social from './image/social.png';
import web from './image/web.png';
import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Specialist = () => {
  AOS.init();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Left Glow */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[200px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />

      {/* Right Glow */}
      <div className="absolute top-2/3 rotate-45 right-0 w-[500px]  h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30" />

      <div className="max-w-[1700px] mx-auto">
        <img
          className="absolute top-1/12 right-1/12 animate-spin"
          src={landing_star}
          alt=""
        />
        <img
          className="absolute top-7/12 left-20 w-32"
          src={double_star}
          alt=""
        />
        <img
          className="absolute bottom-2/12 right-32 w-32 "
          src={double_star}
          alt=""
        />
        <h1 className="text-white text-3xl md:text-7xl uppercase font-bold text-center pt-20">
          we create <span className="text-[#87970a]">creative</span> marketing
        </h1>
        <h1 className="text-center text-white pt-5 text-lg w-full sm:w-[80%] mx-auto">
          Our dedicated specialist is always here to support you, making your
          life easier and more manageable every single step forward.
        </h1>

        <div className="pt-14 flex flex-wrap gap-8 px-4 sm:px-14 justify-center mt-6">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="border border-[#89ac46] rounded-md p-4 shadow-lg w-full sm:w-[30%] mb-8 sm:mb-0"
            style={{
              boxShadow:
                'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px, rgba(255, 255, 255, 0.1) 0px 3px 15px 0px',
            }}
          >
            <img src={content} className="w-80 mx-auto" alt="" />
            <h1 className="text-white text-2xl pl-4 pt-4 font-bold">
              Engage. Inform. Convert. Effectively.
            </h1>
            <h1 className="text-white text-md pl-4 pt-2">
              We write compelling, SEO-friendly content that engages your
              audience, builds trust, boosts traffic, and turns readers into
              loyal customers.
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="border border-[#89ac46] rounded-md p-4 shadow-lg w-full sm:w-[30%] mb-8 sm:mb-0"
            style={{
              boxShadow:
                'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px, rgba(255, 255, 255, 0.1) 0px 3px 15px 0px',
            }}
          >
            <img src={data} className="w-72 mx-auto" alt="" />
            <h1 className="text-white text-2xl pl-4 pt-8 font-bold">
              Data Analytics That Drive Results
            </h1>
            <h1 className="text-white text-md pl-4 pt-2">
              We transform raw data into actionable insights, helping you make
              smarter decisions, optimize performance, and fuel business growth
              with confidence.
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="border border-[#89ac46] rounded-md p-4 shadow-lg w-full sm:w-[30%] mb-8 sm:mb-0"
            style={{
              boxShadow:
                'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px, rgba(255, 255, 255, 0.1) 0px 3px 15px 0px',
            }}
          >
            <img src={digital} className="w-80 mx-auto" alt="" />
            <h1 className="text-white text-2xl pl-4 pt-4 font-bold">
              Drive Growth with Digital Power
            </h1>
            <h1 className="text-white text-md pl-4 pt-2">
              Our digital marketing approach blends creativity with
              strategy—delivering compelling content, smart SEO, and
              high-converting campaigns that connect with your audience and turn
              online presence into real-world impact.
            </h1>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="border border-[#89ac46] rounded-md p-4 shadow-lg w-full sm:w-[30%] mb-8 sm:mb-0"
            style={{
              boxShadow:
                'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px, rgba(255, 255, 255, 0.1) 0px 3px 15px 0px',
            }}
          >
            <img src={seo} className="w-72 mx-auto" alt="" />
            <h1 className="text-white text-2xl pl-4 pt-6 font-bold">
              Boost Your Visibility with SEO
            </h1>
            <h1 className="text-white text-md pl-4 pt-2">
              Maximize your website's visibility and rankings with targeted SEO
              strategies that drive organic traffic and improve search engine
              results.
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="border border-[#89ac46] rounded-md p-4 shadow-lg w-full sm:w-[30%] mb-8 sm:mb-0"
            style={{
              boxShadow:
                'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px, rgba(255, 255, 255, 0.1) 0px 3px 15px 0px',
            }}
          >
            <div className="h-[255px] ">
              <img src={social} className="w-80 mx-auto" alt="" />
            </div>
            <h1 className="text-white text-2xl pl-4 pt-4 font-bold">
              Engage, Influence, and Convert with Social Marketing
            </h1>
            <h1 className="text-white text-md pl-4 pt-2">
              We use proven SEO techniques to enhance your website’s search
              rankings, attract quality traffic, and increase online
              visibility—boosting your business's growth and conversions.
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="border border-[#89ac46] rounded-md p-4 shadow-lg w-full sm:w-[30%] h-[475px]"
            style={{
              boxShadow:
                'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px, rgba(255, 255, 255, 0.1) 0px 3px 15px 0px',
            }}
          >
            <div className="h-[255px] ">
              <img src={web} className="w-80 mx-auto" alt="" />
            </div>
            <h1 className="text-white text-2xl pl-4 pt-4 font-bold">
              Unlock Insights with Web Analytics
            </h1>
            <h1 className="text-white text-md pl-4 pt-2">
              With expert SEO strategies, we improve your search engine
              rankings, drive targeted traffic, and optimize your website for
              better user experience, ultimately increasing conversions and
              boosting your business's online presence.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
