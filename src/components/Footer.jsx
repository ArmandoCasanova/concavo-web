import { COMPANY_INFO, NAVIGATION } from '../data/content';
import imagotipo from '../assets/imagotipo.webp';

export default function Footer() {
  return (
    <footer className="bg-[#1A2614] text-crema-suave/80 border-t border-crema-suave/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">

          <div className="md:col-span-4 space-y-4 text-left">
            <a href="#inicio" className="flex items-center transition-transform hover:scale-[1.01]">
              <img
                src={imagotipo}
                alt="Conavo"
                className="h-20 md:h-20 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-xs text-crema-suave/60 leading-relaxed max-w-sm font-medium">
              Suministro constante y calidad controlada directo desde Ario de Rosales, Michoacán hacia distribuidores nacionales y globales.
            </p>
          </div>

          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-verde-claro">Navegación</h4>
            <ul className="space-y-2.5">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-crema-suave/70 hover:text-verde-claro transition-colors font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-verde-claro">Sanidad y Calidad</h4>
            <p className="text-xs text-crema-suave/60 leading-relaxed font-medium">
              Nuestros procesos cumplen con las normas internacionales y nacionales para la movilización segura y libre de plagas.
            </p>
            <div className="text-[10px] text-verde-claro/50 font-bold uppercase tracking-wider">
              Michoacán, México
            </div>
          </div>

          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-verde-claro">Contacto</h4>
            <ul className="space-y-2.5 text-xs text-crema-suave/70 font-semibold">
              <li>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-verde-claro transition-colors flex items-center gap-2">
                  <span>Telefono:</span> {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-verde-claro transition-colors flex items-center gap-2">
                  <span>Correo: </span> {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-4 pt-1.5">
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-verde-claro transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@crescenciano.tino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-verde-claro transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.63 4.13 1.09 1.15 2.6 1.83 4.19 1.95v3.91c-1.74-.07-3.42-.66-4.79-1.74-.15-.11-.29-.24-.43-.37v6.2c-.08 2.27-1.12 4.44-2.88 5.82-1.99 1.5-4.66 1.94-7.03 1.16-2.45-.75-4.41-2.73-5.11-5.19-.89-2.98.05-6.33 2.4-8.23 1.88-1.5 4.38-1.95 6.64-1.2v3.93c-1.39-.46-2.95-.12-4.01.88-1.07.97-1.45 2.53-.94 3.91.49 1.39 1.87 2.31 3.34 2.29 1.76.04 3.29-1.31 3.42-3.07.03-1.47.01-2.94.02-4.41l-.01-13.1z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-crema-suave/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-crema-suave/40 font-bold uppercase tracking-wider">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Conavo. Todos los derechos reservados.</p>
            <p className="text-[9px] text-crema-suave/30 normal-case font-medium">
              Desarrollado por{' '}
              <a
                href="mailto:armandocasanova005@gmail.com"
                className="hover:text-verde-claro transition-colors font-bold"
              >
                Armando Casanova
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#contacto" className="hover:underline">Políticas</a>
            <span>•</span>
            <a href="#contacto" className="hover:underline">Aviso de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
