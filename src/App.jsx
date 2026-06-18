import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import Separator from './components/Separator';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-crema-suave text-tierra-mate selection:bg-verde-aguacate/20">
      <Navbar />
      <main className="flex-grow">
        <Carousel />
        <Hero />
        <Separator bgPattern="slices" message="Sabor Natural en Cada Cosecha" />
        <Product />
        <AboutUs />
        <Separator bgPattern="leaves" message="Compromiso con la Tierra y Nuestra Gente" />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
