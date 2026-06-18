import { NAVIGATION } from '../data/content';
import imagotipo from '../assets/imagotipo.webp';

export default function Footer() {
  return (
    <footer className="bg-[#1A2614] text-crema-suave/80 border-t border-crema-suave/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          
          <div className="md:col-span-6 space-y-4 text-left">
            <a href="#inicio" className="flex items-center transition-transform hover:scale-[1.01]">
              <img
                src={imagotipo}
                alt="Cóncavo"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-xs text-crema-suave/60 leading-relaxed max-w-sm font-medium">
              Suministro constante y calidad controlada directo desde Uruapan, Michoacán hacia distribuidores nacionales y globales.
            </p>
          </div>

          <div className="md:col-span-3 text-left space-y-4">
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
              Michoacán, México 🇲🇽
            </div>
          </div>

        </div>

        <div className="border-t border-crema-suave/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-crema-suave/40 font-bold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Cóncavo. Todos los derechos reservados.</p>
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
