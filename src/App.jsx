import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
        <Hero />
        <Product />
        <AboutUs />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
