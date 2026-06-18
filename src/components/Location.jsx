import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import outsideImg from '../assets/Outside.png';

export default function Location() {
  return (
    <section id="ubicacion" className="py-10 md:py-16 bg-crema-hueso/30 border-t border-crema-hueso/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-display text-verde-oscuro font-black uppercase">
            CENTRAL DE ABASTOS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          <div className="bg-crema-suave border border-crema-hueso rounded-2xl p-3 sm:p-6 flex flex-col items-center text-center space-y-2 sm:space-y-3 shadow-sm">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-verde-brand/10 flex items-center justify-center text-verde-brand">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-verde-oscuro uppercase tracking-wider">Dirección</h3>
              <p className="text-xs sm:text-lg text-tierra-clara font-semibold mt-1 sm:mt-2 leading-snug">
                Salvador Azuela #268<br className="hidden sm:inline" /> Central de Abastos Morelia
              </p>
            </div>
          </div>

          <div className="bg-crema-suave border border-crema-hueso rounded-2xl p-3 sm:p-6 flex flex-col items-center text-center space-y-2 sm:space-y-3 shadow-sm">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-verde-brand/10 flex items-center justify-center text-verde-brand">
              <Clock className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-verde-oscuro uppercase tracking-wider">Horario</h3>
              <p className="text-xs sm:text-lg text-tierra-clara font-semibold mt-1 sm:mt-2 leading-snug">
                Lunes a Sábado<br className="hidden sm:inline" /> 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          <div className="bg-crema-suave border border-crema-hueso rounded-2xl p-3 sm:p-6 flex flex-col items-center text-center space-y-2 sm:space-y-3 shadow-sm">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-verde-brand/10 flex items-center justify-center text-verde-brand">
              <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-verde-oscuro uppercase tracking-wider">Teléfono</h3>
              <p className="text-xs sm:text-lg text-tierra-clara font-semibold mt-1 sm:mt-2 break-all">
                {COMPANY_INFO.phone}
              </p>
            </div>
          </div>

          <div className="bg-crema-suave border border-crema-hueso rounded-2xl p-3 sm:p-6 flex flex-col items-center text-center space-y-2 sm:space-y-3 shadow-sm">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-verde-brand/10 flex items-center justify-center text-verde-brand">
              <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-verde-oscuro uppercase tracking-wider">Correo</h3>
              <p className="text-xs sm:text-lg text-tierra-clara font-semibold mt-1 sm:mt-2 break-all">
                {COMPANY_INFO.email}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden shadow-sm border border-crema-hueso min-h-[350px] lg:h-[450px] order-2 lg:order-1">
            <img
              src={outsideImg}
              alt="Instalaciones de Conavo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border border-crema-hueso relative min-h-[350px] lg:h-[450px] bg-crema-hueso order-1 lg:order-2">
            <iframe
              src={COMPANY_INFO.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Conavo Agroindustrial"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
