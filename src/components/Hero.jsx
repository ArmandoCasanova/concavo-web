import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT, STATS } from '../data/content';
import heroImg from '../assets/avocado_hero.png';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-10 pb-20 md:py-28 overflow-hidden bg-crema-suave">
      <div className="absolute top-0 right-0 w-[50%] h-[90%] bg-verde-claro/10 rounded-bl-[10rem] md:rounded-bl-[20rem] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-[-10%] w-[400px] h-[400px] bg-oro-aceite/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left space-y-8 animate-slide-up">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-verde-aguacate block">
                {HERO_CONTENT.badge}
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7.5xl font-display font-black text-verde-oscuro leading-[1.05] tracking-tight">
                El aguacate <br />
                en su estado <br />
                <span className="text-verde-brand font-semibold italic">más puro</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-tierra-clara font-medium max-w-xl leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-crema-suave bg-verde-brand hover:bg-verde-aguacate rounded-full transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-verde-brand/10"
              >
                {HERO_CONTENT.ctaPrimary}
                <ArrowRight className="w-4 h-4 ml-2.5" />
              </a>
              <a
                href="#producto"
                className="font-display text-sm font-bold uppercase tracking-wider text-verde-oscuro hover:text-verde-aguacate transition-colors py-2 relative group"
              >
                {HERO_CONTENT.ctaSecondary}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-verde-aguacate transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-md lg:max-w-none aspect-square">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-verde-claro/20 via-verde-aguacate/10 to-transparent rounded-[4rem] rounded-tl-[8rem] rotate-3 scale-105 -z-10"></div>
              
              <div className="w-full h-full rounded-[4rem] rounded-br-[10rem] overflow-hidden shadow-2xl bg-crema-hueso/50 border border-crema-hueso relative">
                <img
                  src={heroImg}
                  alt="Aguacate Hass seleccionado de exportación"
                  className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-1000"
                  loading="eager"
                />
              </div>

              <div className="absolute -top-6 -left-6 w-12 h-12 bg-verde-claro/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-oro-aceite/15 rounded-full blur-2xl"></div>

            </div>
          </div>

        </div>

        <div className="mt-20 md:mt-28 bg-[#1A2614] text-crema-suave px-8 py-8 md:py-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="text-center space-y-1 md:border-r last:border-0 border-crema-suave/10 last:pr-0"
              >
                <span className="block text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-verde-claro tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-[10px] sm:text-xs text-crema-suave/70 font-bold uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
