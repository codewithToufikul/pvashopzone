import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import landing_star from '/landing_star_ic.png';
import double_star from '/double_star.png';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

export const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/review.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error('Failed to load reviews:', err));
  }, []);

  const getReviewsByCategory = (category) =>
    reviews.filter((review) => review.category === category);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Google':
        return (
          <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-2xl" />
        );
      case 'LinkedIn':
        return (
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-blue-500 text-3xl"
          />
        );
      case 'Facebook':
        return (
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-700 text-3xl"
          />
        );
      default:
        return null;
    }
  };

  const renderReviewCards = (filteredReviews) =>
    filteredReviews.map((review, index) => (
      <div
        key={review._id}
        className=" text-white rounded-lg border border-[#87970a] shadow-md p-6 max-w-sm relative"
      >
        <div className="flex gap-x-6 items-center">
          <img
            src={images[index % images.length]}
            alt={review.name}
            className="w-18 h-18 object-cover rounded-full mb-4"
          />
          <div>
            <Rating
              emptySymbol="fa fa-star-o fa-lg text-gray-400"
              fullSymbol="fa fa-star fa-lg text-yellow-500"
              initialRating={review.rating}
              readonly
            />
            <h3 className="font-bold text-xl mb-2">{review.name}</h3>
          </div>
        </div>
        <p className="text-sm mb-2">{review.testimonial}</p>
        <div className=" absolute top-2 right-3">
          <div>{getCategoryIcon(review.category)}</div>
        </div>
      </div>
    ));

  return (
    <div className="relative min-h-screen bg-black overflow-hidden py-12">
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
      <div className="max-w-[1700px] mx-auto flex flex-col items-center">
        <Tabs>
          <TabList className="text-white flex gap-8 mb-10 justify-center">
            <Tab
              className="cursor-pointer uppercase text-2xl focus:outline-none"
              selectedClassName="text-orange-500"
            >
              All
            </Tab>
            <Tab
              className="cursor-pointer uppercase text-2xl focus:outline-none"
              selectedClassName="text-orange-500"
            >
              LinkedIn
            </Tab>
            <Tab
              className="cursor-pointer uppercase text-2xl focus:outline-none"
              selectedClassName="text-orange-500"
            >
              Google
            </Tab>
            <Tab
              className="cursor-pointer uppercase text-2xl focus:outline-none"
              selectedClassName="text-orange-500"
            >
              Facebook
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderReviewCards(reviews)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderReviewCards(getReviewsByCategory('LinkedIn'))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderReviewCards(getReviewsByCategory('Google'))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderReviewCards(getReviewsByCategory('Facebook'))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
