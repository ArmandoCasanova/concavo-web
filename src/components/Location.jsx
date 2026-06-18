import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-crema-hueso/30 border-t border-crema-hueso/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Contact Info details (5 cols) */}
          <div className="lg:col-span-5 bg-crema-suave rounded-3xl p-6 sm:p-8 border border-crema-hueso shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-verde-brand uppercase tracking-widest bg-verde-claro/15 px-3 py-1 rounded-full">
                Instalaciones
              </span>
              <h2 className="text-3xl font-display text-verde-oscuro font-extrabold">
                Centro de Empaque
              </h2>
              <p className="text-xs sm:text-sm text-tierra-clara font-medium leading-relaxed">
                Nuestras oficinas generales y zona de paletizado en frío se encuentran ubicadas estratégicamente para agilizar el transporte hacia puertos marítimos y fronteras terrestres.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 text-left">
                <MapPin className="w-5 h-5 text-verde-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-verde-oscuro uppercase tracking-wider">Dirección Física</h4>
                  <p className="text-xs text-tierra-clara mt-0.5 font-medium leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <Phone className="w-5 h-5 text-verde-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-verde-oscuro uppercase tracking-wider">Teléfono de Oficina</h4>
                  <p className="text-xs text-tierra-clara mt-0.5 font-medium">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <Mail className="w-5 h-5 text-verde-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-verde-oscuro uppercase tracking-wider">Correo Corporativo</h4>
                  <p className="text-xs text-tierra-clara mt-0.5 font-medium">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-crema-hueso text-center lg:text-left">
              <span className="text-[10px] text-tierra-clara font-semibold">Horario de operación: Lunes a Sábado: 8:00 AM - 6:00 PM (CST)</span>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-sm border border-crema-hueso relative min-h-[350px] bg-crema-hueso">
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
