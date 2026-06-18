import { Check } from 'lucide-react';
import { PRODUCT_CONTENT } from '../data/content';

export default function Product() {
  return (
    <section id="producto" className="py-20 md:py-28 bg-[#FAF9F5] border-t border-crema-hueso">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-3xl mb-20 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-verde-aguacate block">
            Ficha Técnica
          </span>
          <h2 className="text-4xl sm:text-5xl font-display text-verde-oscuro font-extrabold leading-tight tracking-tight">
            {PRODUCT_CONTENT.title}
          </h2>
          <p className="text-base sm:text-lg text-tierra-clara font-medium">
            {PRODUCT_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-[10px] font-bold text-oro-aceite uppercase tracking-widest block mb-2">Variedad Estrella</span>
              <h3 className="text-2xl sm:text-3xl font-display text-verde-oscuro font-bold tracking-tight">
                {PRODUCT_CONTENT.variety.name}
              </h3>
              <p className="text-xs text-tierra-clara mt-1 font-semibold italic">
                {PRODUCT_CONTENT.variety.origin}
              </p>
            </div>
            
            <p className="text-base text-tierra-clara leading-relaxed font-medium">
              {PRODUCT_CONTENT.variety.description}
            </p>

            <div className="pt-6 border-t border-crema-hueso space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-verde-brand">
                Detalles del Fruto
              </h4>
              <ul className="space-y-4">
                {PRODUCT_CONTENT.variety.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-verde-aguacate shrink-0 mt-1" />
                    <div>
                      <span className="block text-sm font-extrabold text-verde-oscuro">{spec.name}</span>
                      <span className="block text-xs sm:text-sm text-tierra-clara font-medium mt-0.5">{spec.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12 text-left">
            
            <div className="space-y-6">
              <h3 className="text-lg font-display text-verde-oscuro font-bold uppercase tracking-wider">
                📏 Calibres y Peso Promedio
              </h3>
              <div className="divide-y divide-crema-hueso/80 border-t border-b border-crema-hueso">
                {PRODUCT_CONTENT.calibers.map((cal, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 py-4 items-center hover:bg-crema-hueso/20 transition-colors px-2"
                  >
                    <div className="col-span-3 font-display font-extrabold text-base text-verde-oscuro">
                      Calibre {cal.size}
                    </div>
                    <div className="col-span-4 text-sm text-tierra-clara font-medium">
                      {cal.weight}
                    </div>
                    <div className="col-span-5 text-sm text-tierra-clara font-medium text-right italic">
                      {cal.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-display text-verde-oscuro font-bold uppercase tracking-wider">
                📦 Formatos de Embalaje
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {PRODUCT_CONTENT.packaging.map((pack, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <span className="text-xs font-bold text-verde-brand uppercase tracking-wider block border-b border-verde-brand/10 pb-1.5">
                      {pack.type}
                    </span>
                    <p className="text-xs sm:text-sm text-tierra-clara font-medium leading-relaxed">
                      {pack.use}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
