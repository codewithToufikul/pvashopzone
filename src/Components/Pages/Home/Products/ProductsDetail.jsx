import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import imageMap from '../../../../Hooks/imageMap';

export const ProductsDetails = () => {
  const { title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.services.find(
          (item) => item.title === decodeURIComponent(title)
        );
        setProduct(found);
      })
      .catch((err) => console.error('Failed to fetch product details:', err));

    window.scrollTo(0, 0); // Scroll to top when page loads
  }, [title]);

  if (!product) {
    return (
      <div className="text-center mt-20 text-white text-3xl">Loading...</div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[700px] h-[300px] -rotate-45 bg-yellow-700 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/3 right-0 w-[800px] h-[300px] bg-yellow-800 rounded-full blur-3xl opacity-30" />

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 max-w-[1600px] mx-auto p-4">
        {/* Image */}
        <div className="w-full">
          <img
            src={imageMap[product.title] || '/products/reviews.jpg'}
            alt={product.title}
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        {/* Main Info */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">{product.title}</h1>

          {/* Intro or Overview */}
          {product.intro && (
            <p className="text-lg opacity-80">{product.intro}</p>
          )}
          {product.overview?.description && (
            <p className="text-lg opacity-80">{product.overview.description}</p>
          )}

          {/* Premium Service or Features */}
          {product.premium_service?.title && (
            <>
              <h2 className="text-2xl font-bold mt-6">
                {product.premium_service.title}
              </h2>
              <ul className="grid grid-cols-2 gap-3 mt-4">
                {product.premium_service.features.map((feature, idx) => (
                  <li key={idx} className="text-lg">
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}

          {product.features && (
            <>
              <h2 className="text-2xl font-bold mt-6">Top Features</h2>
              <ul className="grid grid-cols-2 gap-3 mt-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-lg">
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Call to Action */}
          {product.call_to_action && (
            <button className="mt-8 bg-yellow-500 w-full hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg text-xl transition">
              {product.call_to_action}
            </button>
          )}

          {/* Contact Links */}
          <div className="flex flex-col gap-2 justify-center text-2xl pt-4">
            <a
              href="https://wa.me/01559634929"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Chat on WhatsApp
            </a>
            <a
              href="https://t.me/01559634929"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Chat on Telegram
            </a>
            <a
              href="mailto:info@pvashopzone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="space-y-12 max-w-[1600px] mx-auto px-4 pb-10">
        {/* Sections for original format */}
        {product.sections &&
          product.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
              <p className="text-lg leading-relaxed opacity-90">
                {section.content}
              </p>
            </div>
          ))}

        {/* Fallback sections for other format (e.g., overview benefits, functionality, etc.) */}
        {product.overview?.benefits && (
          <div>
            <h3 className="text-3xl font-bold mb-4">Key Benefits</h3>
            <ul className="list-disc ml-6 space-y-2">
              {product.overview.benefits.map((item, i) => (
                <li key={i} className="text-lg opacity-90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.business_benefits && (
          <div>
            <h3 className="text-3xl font-bold mb-4">Business Benefits</h3>
            <ul className="list-disc ml-6 space-y-2">
              {product.business_benefits.map((item, i) => (
                <li key={i} className="text-lg opacity-90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.security_tips && (
          <div>
            <h3 className="text-3xl font-bold mb-4">Security Tips</h3>
            <ul className="list-disc ml-6 space-y-2">
              {product.security_tips.map((item, i) => (
                <li key={i} className="text-lg opacity-90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.purchase_guide && (
          <>
            <div>
              <h3 className="text-3xl font-bold mb-4">Things to Consider</h3>
              <ul className="list-disc ml-6 space-y-2">
                {product.purchase_guide.considerations.map((item, i) => (
                  <li key={i} className="text-lg opacity-90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">How to Purchase</h3>
              <ol className="list-decimal ml-6 space-y-2">
                {product.purchase_guide.steps.map((item, i) => (
                  <li key={i} className="text-lg opacity-90">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
