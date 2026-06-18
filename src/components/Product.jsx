import React from 'react';
import { Sprout, BadgeCheck, CircleDollarSign } from 'lucide-react';
import aguacateMano from '../assets/aguacate_mano.webp';

export default function Product() {
  return (
    <section id="producto" className="py-20 md:py-28 bg-[#E6ECE2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={aguacateMano}
                alt="Aguacate fresco en mano"
                className="w-full h-full max-h-[450px] lg:max-h-none object-contain"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-display text-verde-oscuro font-black tracking-tight uppercase">
                Hass
              </h2>
              <p className="text-lg sm:text-xl text-tierra-clara leading-relaxed font-semibold">
                El aguacate Hass destaca por su pulpa increíblemente cremosa, su sabor sutil a nuez y su gran aporte nutricional, siendo el preferido en mesas de todo el mundo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="animate-gentle-float">
                  <div className="w-16 h-16 rounded-full border-2 border-[#5A8745] flex items-center justify-center bg-[#5A8745]/10 p-0.5 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-full rounded-full bg-[#5A8745] flex items-center justify-center text-white">
                      <Sprout className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-display text-verde-oscuro font-bold uppercase tracking-wider">
                    Producción
                  </h3>
                  <p className="text-xs text-tierra-clara leading-relaxed font-medium mt-1">
                    Cultivos gestionados de manera sostenible bajo estrictos estándares agrícolas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="animate-gentle-float [animation-delay:0.5s]">
                  <div className="w-16 h-16 rounded-full border-2 border-[#5A8745] flex items-center justify-center bg-[#5A8745]/10 p-0.5 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-full rounded-full bg-[#5A8745] flex items-center justify-center text-white">
                      <BadgeCheck className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-display text-verde-oscuro font-bold uppercase tracking-wider">
                    Selección
                  </h3>
                  <p className="text-xs text-tierra-clara leading-relaxed font-medium mt-1">
                    Clasificación manual rigurosa asegurando categoría de exportación global.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="animate-gentle-float [animation-delay:1s]">
                  <div className="w-16 h-16 rounded-full border-2 border-[#5A8745] flex items-center justify-center bg-[#5A8745]/10 p-0.5 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-full rounded-full bg-[#5A8745] flex items-center justify-center text-white">
                      <CircleDollarSign className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-display text-verde-oscuro font-bold uppercase tracking-wider">
                    Precio
                  </h3>
                  <p className="text-xs text-tierra-clara leading-relaxed font-medium mt-1">
                    Esquemas competitivos y cotizaciones directas que se adaptan a tu negocio.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-crema-suave bg-[#324331] hover:bg-verde-brand rounded-full transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-[#324331]/10"
              >
                Ver Productos
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
