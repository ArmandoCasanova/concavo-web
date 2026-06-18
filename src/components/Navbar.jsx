import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../data/content';
import imagotipo from '../assets/imagotipo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-crema-suave/80 backdrop-blur-lg border-b border-verde-brand/5 py-4'
          : 'bg-transparent py-7'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Logo / Brand Imagotipo */}
          <a href="#inicio" className="flex items-center transition-transform hover:scale-[1.01]">
            <img
              src={imagotipo}
              alt="Conavo"
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation - Minimalist spacing and typography */}
          <div className="hidden md:flex items-center gap-10">
            {NAVIGATION.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-sm font-medium text-verde-oscuro/80 hover:text-verde-aguacate transition-colors duration-300 relative py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Minimalist CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-crema-suave bg-verde-brand hover:bg-verde-aguacate rounded-full transition-all duration-300 hover:shadow-md hover:shadow-verde-aguacate/10"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-verde-oscuro hover:text-verde-aguacate transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Minimalist full height overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-crema-suave/95 backdrop-blur-xl border-l border-crema-hueso flex flex-col md:hidden transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '68px', height: 'calc(100vh - 68px)' }}
      >
        <div className="flex-1 px-8 py-12 space-y-6">
          <div className="flex flex-col gap-6">
            {NAVIGATION.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold text-verde-oscuro hover:text-verde-aguacate transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="p-8 border-t border-crema-hueso space-y-4 bg-crema-hueso/20">
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-4 rounded-full bg-verde-brand hover:bg-verde-aguacate text-crema-suave font-bold text-sm uppercase tracking-wider transition-all"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
