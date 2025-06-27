import { Helmet } from 'react-helmet';
import './App.css';
import { Experties } from './Components/Pages/Experties/Pexperties';
import { Banner } from './Components/Pages/Home/Banner/Banner';
import { Products } from './Components/Pages/Home/Products/Products';
import { Specialist } from './Components/Pages/Home/Specialist/Specialist';
import { Testimonial } from './Components/Pages/Home/Testimonial/Testimonial';
import { Trusted } from './Components/Pages/Home/Trusted/Trusted';
import { Footer } from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import { Whyus } from './Components/Shared/WhyUs/Whyus';
import FloatingContactButton from './Components/FloatingContactButton';

function App() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Pvashopzone | Best Products Online</title>
        <meta name="description" content="Buy the best products online at Pvashopzone. Great deals every day!" />
        <meta name="keywords" content="Pvashopzone, online shop, best products, deals" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Pvashopzone - Best Online Store" />
        <meta property="og:description" content="Buy everything you need from Pvashopzone." />
        <meta property="og:image" content="https://pvashopzone.com/cover.png" />
        <meta property="og:url" content="https://pvashopzone.com/" />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pvashopzone.com/" />
      </Helmet>
    {/* <Navbar /> */}
      <Banner></Banner>
      <Specialist />
      <Products />
      {/* <Cart /> */}
      <Experties />
      <Trusted />
      <Whyus />
      <Testimonial />
      {/* <Footer /> */}
            <FloatingContactButton />
    </div>
  );
}

export default App;
