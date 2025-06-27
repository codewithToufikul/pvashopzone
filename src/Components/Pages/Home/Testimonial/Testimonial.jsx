import { useEffect, useState } from 'react';
import { Star, Linkedin, Chrome, Facebook } from 'lucide-react';
import image1 from './images/1.webp';
import image2 from './images/2.webp';
import image3 from './images/3.webp';
import image4 from './images/4.webp';
import image5 from './images/5.webp';
import image6 from './images/6.webp';
import image7 from './images/7.webp';
import image8 from './images/8.webp';
import image9 from './images/9.webp';

const avatarImages = [
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
  const [activeTab, setActiveTab] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/review.json')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load reviews:', err);
        setIsLoading(false);
      });
  }, []);

  const getReviewsByCategory = (category) => {
    if (category === 'All') return reviews;
    return reviews.filter((review) => review.category === category);
  };

  const getCategoryIcon = (category) => {
    const iconClass = "w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300";
    switch (category) {
      case 'Google':
        return <Chrome className={`${iconClass} text-red-500`} />;
      case 'LinkedIn':
        return <Linkedin className={`${iconClass} text-blue-500`} />;
      case 'Facebook':
        return <Facebook className={`${iconClass} text-blue-600`} />;
      default:
        return null;
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        } transition-colors duration-200`}
      />
    ));
  };

  const renderReviewCards = (filteredReviews) => {
    if (isLoading) {
      return Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-56 sm:h-64 flex flex-col justify-between">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="h-3 sm:h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-2 sm:h-3 bg-gray-700 rounded w-16 sm:w-20"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 sm:h-3 bg-gray-700 rounded"></div>
              <div className="h-2 sm:h-3 bg-gray-700 rounded"></div>
              <div className="h-2 sm:h-3 bg-gray-700 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      ));
    }

    return filteredReviews.map((review, index) => (
      <div
        key={review._id}
        className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl border border-yellow-500/20 shadow-xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 hover:border-yellow-500/40"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Platform icon */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {getCategoryIcon(review.category)}
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 relative z-10 pr-8 sm:pr-10">
          <div className="relative flex-shrink-0">
            <img
              src={avatarImages[index % avatarImages.length]}
              alt={review.name}
              className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full ring-2 ring-yellow-500/30 group-hover:ring-yellow-500/60 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm sm:text-lg text-white mb-1 truncate group-hover:text-yellow-300 transition-colors duration-300">
              {review.name}
            </h3>
            <div className="flex items-center gap-1">
              {renderStars(review.rating)}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10">
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-4">
            "{review.testimonial}"
          </p>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-br-xl sm:rounded-br-2xl">
          <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-tl from-yellow-500/20 to-transparent rotate-45 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:from-yellow-500/40 transition-colors duration-300"></div>
        </div>
      </div>
    ));
  };

  const tabs = ['All', 'LinkedIn', 'Google', 'Facebook'];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Main glow effects */}
        <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-60 sm:w-[500px] sm:h-80 bg-yellow-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 sm:left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-orange-600/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Floating stars - hidden on mobile for cleaner look */}
        <div className="hidden sm:block absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60 delay-500"></div>
        <div className="hidden sm:block absolute top-40 right-20 w-3 h-3 bg-yellow-300 rounded-full animate-bounce opacity-40 delay-1000"></div>
        <div className="hidden sm:block absolute bottom-32 left-20 w-5 h-5 bg-orange-400 rounded-full animate-bounce opacity-50 delay-1500"></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-4 h-4 bg-yellow-500 rounded-full animate-bounce opacity-70 delay-2000"></div>
        
        {/* Animated rotating elements */}
        <div className="hidden sm:block absolute top-16 right-16 w-8 h-8 border-2 border-yellow-400/30 rounded-full animate-spin"></div>
        <div className="hidden sm:block absolute bottom-16 left-16 w-6 h-6 border-2 border-orange-400/40 rounded-full animate-spin"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-12 sm:pt-20 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
              What Our{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
              Discover why thousands of satisfied customers choose us for their success
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 relative overflow-hidden group ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg shadow-yellow-500/30'
                    : 'text-white hover:text-yellow-300 border border-gray-700 hover:border-yellow-500/50'
                }`}
              >
                <span className="relative z-10">{tab}</span>
                {activeTab !== tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {renderReviewCards(getReviewsByCategory(activeTab))}
          </div>

          {/* Show message if no reviews */}
          {!isLoading && getReviewsByCategory(activeTab).length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="text-gray-500 text-lg sm:text-xl">No reviews found for {activeTab}</div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-20 sm:h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};