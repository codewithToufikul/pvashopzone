import './App.css';
import { Experties } from './Components/Pages/Experties/Pexperties';
import { Banner } from './Components/Pages/Home/Banner/Banner';
import { Products } from './Components/Pages/Home/Products/Products';
import { Specialist } from './Components/Pages/Home/Specialist/Specialist';
import { Testimonial } from './Components/Pages/Home/Testimonial/Testimonial';
import { Trusted } from './Components/Pages/Home/Trusted/Trusted';
import { Cart } from './Components/Shared/Cart/Cart';
import { Footer } from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import { Whyus } from './Components/Shared/WhyUs/Whyus';

function App() {
  return (
    <div className="bg-white">
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
    </div>
  );
}

export default App;
