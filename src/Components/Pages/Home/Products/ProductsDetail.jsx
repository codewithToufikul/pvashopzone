import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import imageMap from "../../../../Hooks/imageMap";
import { Helmet } from "react-helmet";

export const ProductsDetails = () => {
  const { title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.services.find(
          (item) => item.title === decodeURIComponent(title)
        );
        setProduct(found);
      })
      .catch((err) => console.error("Failed to fetch product details:", err));

    window.scrollTo(0, 0); // Scroll to top when page loads
  }, [title]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-opacity-75 mx-auto mb-4"></div>
          <div className="text-white text-xl font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  console.log(product);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <Helmet>
        <title>{product.title} | Pvashopzone</title>
        <meta name="keywords" content={`${product.title}, buy online, Pvashopzone`} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={product.title} />
        <meta property="og:url" content={`https://pvashopzone.com/product/${product.title}`} />
        <meta property="og:type" content="product" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://pvashopzone.com/product/${product.title}`} />
      </Helmet>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[500px] bg-gradient-to-r from-yellow-600/20 to-amber-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-1/4 w-80 h-80 md:w-[500px] md:h-[350px] lg:w-[700px] lg:h-[450px] bg-gradient-to-l from-yellow-500/15 to-orange-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-[400px] md:h-[300px] bg-gradient-to-t from-amber-600/10 to-yellow-700/10 rounded-full blur-2xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 lg:mb-20">
            {/* Product Image */}
            <div className="order-2 xl:order-1 w-full">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/50 to-amber-600/50 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src={imageMap[product.title] || "/products/reviews.jpg"}
                  alt={product.title}
                  className="relative rounded-2xl lg:rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transform transition duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 xl:order-2 space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                  {product.title}
                </h1>
                
                {/* Price Section */}
                {product.price && (
                  <div className="bg-gradient-to-r from-yellow-500/20 to-amber-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-4 lg:p-6">
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                      </svg>
                      <div>
                        <div className="text-sm text-yellow-300 font-medium">Price</div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Intro or Overview */}
                {product.intro && (
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    {product.intro}
                  </p>
                )}
                {product.overview?.description && (
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    {product.overview.description}
                  </p>
                )}
              </div>

              {/* Premium Service or Features */}
              {product.premium_service?.title && (
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-yellow-400">
                    {product.premium_service.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    {product.premium_service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base lg:text-lg text-gray-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {Array.isArray(product.features) && (
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-yellow-400">
                    Top Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base lg:text-lg text-gray-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              {product.call_to_action && (
                <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold px-8 py-4 lg:py-5 rounded-xl text-lg lg:text-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
                  {product.call_to_action}
                </button>
              )}

              {/* Contact Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                <a
                  href="https://wa.me/01559634929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-400 hover:text-green-300 font-medium px-4 py-3 lg:py-4 rounded-xl transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-sm lg:text-base">WhatsApp</span>
                </a>
                <a
                  href="https://t.me/01559634929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 hover:text-blue-300 font-medium px-4 py-3 lg:py-4 rounded-xl transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span className="text-sm lg:text-base">Telegram</span>
                </a>
                <a
                  href="mailto:info@pvashopzone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 hover:text-red-300 font-medium px-4 py-3 lg:py-4 rounded-xl transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-sm lg:text-base">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
          <div className="space-y-8 lg:space-y-12">
            {/* Sections for original format */}
            {product.sections &&
              product.sections.map((section, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/30">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-yellow-400">
                    {section.title}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
                    {section.content}
                  </p>
                </div>
              ))}

            {/* Fallback sections for other format */}
            {product.overview?.benefits && (
              <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/30">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-yellow-400">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {product.overview.benefits.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg text-gray-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.business_benefits && (
              <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/30">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-yellow-400">
                  Business Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {product.business_benefits.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg text-gray-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.security_tips && (
              <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/30">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-red-400">
                  Security Tips
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  {product.security_tips.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3 lg:p-4 bg-red-900/20 rounded-xl border border-red-700/30">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg text-gray-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.purchase_guide && (
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/30">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-purple-400">
                    Things to Consider
                  </h3>
                  <div className="space-y-3 lg:space-y-4">
                    {product.purchase_guide.considerations.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg text-gray-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/30">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-green-400">
                    How to Purchase
                  </h3>
                  <div className="space-y-4 lg:space-y-6">
                    {product.purchase_guide.steps.map((item, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                        <span className="text-base sm:text-lg text-gray-200 pt-1">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};