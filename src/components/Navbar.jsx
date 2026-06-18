import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../data/content';
import imagotipo from '../assets/imagotipo.webp';
import isotipo from '../assets/isotipo.webp';
import logotipo from '../assets/logotipo(nombre).webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  useEffect(() => {
    const sections = ['inicio', 'producto', 'nosotros', 'ubicacion', 'contacto'];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = '#inicio';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = `#${section}`;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-crema-suave/80 backdrop-blur-lg border-b border-verde-brand/5 py-4'
          : 'bg-transparent py-7'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5 md:gap-5">
              <a href="#inicio" className="flex items-center transition-transform hover:scale-[1.01]">
                <img
                  src={isotipo}
                  alt="Conavo Isotipo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </a>
              <a href="#inicio" className="flex items-center transition-transform hover:scale-[1.01]">
                <img
                  src={logotipo}
                  alt="Conavo Nombre"
                  className="h-6 md:h-9 w-auto object-contain"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center gap-10">
              {NAVIGATION.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-display text-base font-bold transition-colors duration-300 relative py-1 ${activeSection === item.href
                    ? 'text-verde-brand font-black'
                    : 'text-verde-oscuro/80 hover:text-verde-aguacate'
                    }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-verde-brand" />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-crema-suave bg-verde-brand hover:bg-verde-aguacate rounded-full transition-all duration-300 hover:shadow-md hover:shadow-verde-aguacate/10"
              >
                Contacto
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <a
                href="https://wa.me/5214251120437?text=Hola!,%20Me%20gustaría%20más%20información%20sobre%20los%20aguacates."
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-verde-oscuro hover:text-verde-brand transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@conavoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-verde-oscuro hover:text-verde-brand transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.63 4.13 1.09 1.15 2.6 1.83 4.19 1.95v3.91c-1.74-.07-3.42-.66-4.79-1.74-.15-.11-.29-.24-.43-.37v6.2c-.08 2.27-1.12 4.44-2.88 5.82-1.99 1.5-4.66 1.94-7.03 1.16-2.45-.75-4.41-2.73-5.11-5.19-.89-2.98.05-6.33 2.4-8.23 1.88-1.5 4.38-1.95 6.64-1.2v3.93c-1.39-.46-2.95-.12-4.01.88-1.07.97-1.45 2.53-.94 3.91.49 1.39 1.87 2.31 3.34 2.29 1.76.04 3.29-1.31 3.42-3.07.03-1.47.01-2.94.02-4.41l-.01-13.1z" />
                </svg>
              </a>
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
                  className={`text-2xl font-display font-bold transition-colors ${activeSection === item.href ? 'text-verde-brand font-black' : 'text-verde-oscuro/85'
                    }`}
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

      <div className="hidden md:flex flex-col gap-3 fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5214251120437?text=Hola!,%20Me%20gustaría%20más%20información%20sobre%20los%20aguacates."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@conavoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-black hover:bg-[#1a1a1a] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
          aria-label="TikTok"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.63 4.13 1.09 1.15 2.6 1.83 4.19 1.95v3.91c-1.74-.07-3.42-.66-4.79-1.74-.15-.11-.29-.24-.43-.37v6.2c-.08 2.27-1.12 4.44-2.88 5.82-1.99 1.5-4.66 1.94-7.03 1.16-2.45-.75-4.41-2.73-5.11-5.19-.89-2.98.05-6.33 2.4-8.23 1.88-1.5 4.38-1.95 6.64-1.2v3.93c-1.39-.46-2.95-.12-4.01.88-1.07.97-1.45 2.53-.94 3.91.49 1.39 1.87 2.31 3.34 2.29 1.76.04 3.29-1.31 3.42-3.07.03-1.47.01-2.94.02-4.41l-.01-13.1z" />
          </svg>
        </a>
      </div>
    </>
  );
}
