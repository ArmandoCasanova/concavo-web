import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import obrerosImg from '../assets/aguacates_obrerosfondo.webp';
import huertaImg from '../assets/huertaaguacates.webp';
import bgMichoacanImg from '../assets/backgroundMichoacanAvocado.webp';

const SLIDES = [
  {
    image: obrerosImg,
    tag: "COSECHA ARTESANAL",
    title: "Manos expertas que cuidan cada detalle",
    description: "Seleccionamos minuciosamente cada aguacate para asegurar una calidad de exportación insuperable.",
  },
  {
    image: huertaImg,
    tag: "ORIGEN SELECTO",
    title: "El clima y la tierra ideal de Michoacán",
    description: "Nuestros huertos florecen en el suelo volcánico más fértil del mundo, garantizando sabor y nutrición.",
  },
  {
    image: bgMichoacanImg,
    tag: "ALCANCE GLOBAL",
    title: "Llevando la frescura de México al mundo",
    description: "Exportamos con altos estándares de inocuidad y logística eficiente para llegar perfectos a tu mesa.",
  }
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeIndex]);


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative w-full h-[55vh] min-h-[400px] md:h-[75vh] md:min-h-[600px] bg-verde-oscuro overflow-hidden select-none">

      {SLIDES.map((slide, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-[#0c1408]">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover opacity-65 transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-verde-oscuro/90 via-verde-oscuro/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
                <div className="max-w-2xl text-left text-crema-suave space-y-6">

                  
                  

                  <h2
                    className={`text-3xl sm:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight text-white transition-all duration-700 delay-300 transform ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h2>

                  <p
                    className={`text-base sm:text-lg text-crema-suave/80 font-medium leading-relaxed max-w-xl transition-all duration-700 delay-500 transform ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-300 active:scale-95 group focus:outline-none"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-300 active:scale-95 group focus:outline-none"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 sm:gap-6">
        <button
          onClick={handlePrev}
          className="flex md:hidden w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-300 active:scale-95 focus:outline-none"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2.5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveIndex(idx);
              }}
              className="group relative h-1.5 focus:outline-none"
              style={{ width: '36px' }}
            >
              <span className="absolute inset-0 bg-white/20 rounded-full transition-colors group-hover:bg-white/30"></span>
              <span
                className={`absolute inset-y-0 left-0 bg-verde-claro rounded-full transition-all ease-out ${
                  idx === activeIndex ? 'w-full duration-[6000ms]' : 'w-0 duration-0'
                }`}
              ></span>
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex md:hidden w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-300 active:scale-95 focus:outline-none"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
