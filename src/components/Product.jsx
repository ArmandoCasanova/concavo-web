import React from 'react';
import { Sprout, BadgeCheck, CircleDollarSign } from 'lucide-react';
import aguacateMano from '../assets/aguacate_mano.webp';
import avocadoVecBg from '../assets/avocadovec.svg';

export default function Product() {
  return (
    <section className="relative py-12 md:py-20 lg:pb-0 overflow-hidden bg-[#bc5b27]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={avocadoVecBg}
          className="absolute left-[-35%] lg:left-[-52%] top-1/2 -translate-y-1/2 w-[170%] lg:w-[220%] h-[130%] lg:h-[160%] max-w-none object-cover"
          alt=""
        />
      </div>

      <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          <div className="lg:col-span-5 flex items-center lg:items-end justify-center lg:justify-start reveal reveal-slide-left">
            <div className="w-full flex items-center lg:items-end justify-center lg:justify-start">
              <img
                src={aguacateMano}
                alt="Aguacate fresco en mano"
                className="w-full h-auto max-h-[400px] lg:max-h-[1500px] lg:scale-[1.35] origin-bottom-left object-contain block lg:align-bottom"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-8 pb-12 lg:pb-20 reveal reveal-slide-right">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-[#bc5b27] font-black tracking-tight uppercase">
                Aguacate&nbsp;&nbsp;&nbsp;&nbsp;Hass
              </h2>
              <p className="text-lg sm:text-xl text-tierra-clara leading-relaxed font-semibold">
                Nuestro aguacate Hass destaca por su pulpa increíblemente cremosa, su sabor y su gran aporte nutricional, siendo el preferido de todas las familias.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="flex flex-col items-center text-center space-y-3 reveal reveal-slide-up delay-75">
                <div className="animate-gentle-float">
                  <div className="w-16 h-16 rounded-full border-2 border-[#bc5b27] flex items-center justify-center bg-[#bc5b27]/10 p-0.5 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-full rounded-full bg-[#bc5b27] flex items-center justify-center text-white">
                      <Sprout className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-display text-verde-oscuro font-bold uppercase tracking-wider">
                    Producción
                  </h3>
                  <p className="text-sm text-tierra-clara leading-relaxed font-semibold mt-1.5">
                    Cultivos gestionados de manera sostenible bajo estrictos estándares agrícolas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 reveal reveal-slide-up delay-150">
                <div className="animate-gentle-float [animation-delay:0.5s]">
                  <div className="w-16 h-16 rounded-full border-2 border-[#bc5b27] flex items-center justify-center bg-[#bc5b27]/10 p-0.5 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-full rounded-full bg-[#bc5b27] flex items-center justify-center text-white">
                      <BadgeCheck className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-display text-verde-oscuro font-bold uppercase tracking-wider">
                    Selección
                  </h3>
                  <p className="text-sm text-tierra-clara leading-relaxed font-semibold mt-1.5">
                    Clasificación manual rigurosa asegurando categoría de exportación global.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 reveal reveal-slide-up delay-300">
                <div className="animate-gentle-float [animation-delay:1s]">
                  <div className="w-16 h-16 rounded-full border-2 border-[#bc5b27] flex items-center justify-center bg-[#bc5b27]/10 p-0.5 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-full rounded-full bg-[#bc5b27] flex items-center justify-center text-white">
                      <CircleDollarSign className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-display text-verde-oscuro font-bold uppercase tracking-wider">
                    Precio
                  </h3>
                  <p className="text-sm text-tierra-clara leading-relaxed font-semibold mt-1.5">
                    Esquemas competitivos y cotizaciones directas que se adaptan a tu negocio.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-crema-suave bg-[#324331] hover:bg-verde-brand rounded-full transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-[#324331]/10"
              >
                Contáctanos
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
