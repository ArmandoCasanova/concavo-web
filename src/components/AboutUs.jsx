import { Check } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/content';
import orchardImg from '../assets/orchard_landscape.png';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-[#1A2614] text-crema-suave relative overflow-hidden">
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-verde-claro/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[3rem] rounded-tr-[9rem] overflow-hidden shadow-2xl border border-crema-suave/10">
              <img
                src={orchardImg}
                alt="Huertos en Ario de Rosales, Michoacán"
                className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-1000"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-verde-claro block">
                Origen y Compromiso
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-tight text-crema-suave">
                {ABOUT_CONTENT.title}
              </h2>
              <p className="text-base sm:text-lg text-crema-suave/80 font-medium leading-relaxed">
                {ABOUT_CONTENT.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-crema-suave/70 leading-relaxed font-medium">
              {ABOUT_CONTENT.history}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-crema-suave/10">
              {ABOUT_CONTENT.values.map((val, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-xs font-bold text-verde-claro uppercase tracking-widest block">
                    0{idx + 1} / {val.title}
                  </span>
                  <p className="text-xs sm:text-sm text-crema-suave/60 leading-relaxed font-medium">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-crema-suave/10 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-verde-claro block mb-6">
            Acreditaciones internacionales
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {ABOUT_CONTENT.certifications.map((cert, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-crema-suave font-bold">
                  <Check className="w-4 h-4 text-verde-claro shrink-0" />
                  <span className="text-sm tracking-tight">{cert.name}</span>
                </div>
                <p className="text-xs text-crema-suave/50 font-medium ml-6">
                  {cert.id}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
