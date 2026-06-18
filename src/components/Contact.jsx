import { useState } from 'react';
import { MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-20 md:py-20 bg-tierra-mate text-crema-suave relative overflow-hidden">
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-oro-aceite/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 reveal reveal-slide-up">
          <span className="text-xs font-bold uppercase tracking-widest text-verde-claro block">
            Contáctanos
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-crema-suave">
            Hablemos hoy mismo
          </h2>
          <p className="text-sm sm:text-base text-crema-suave/80 font-medium">
            Déjanos tus datos de contacto o escríbenos directamente por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">

          <div className="md:col-span-5 bg-[#1F1813] p-8 rounded-[2rem] border border-crema-suave/5 flex flex-col justify-between space-y-8 reveal reveal-slide-left">
            <div className="space-y-3">
              <h3 className="text-xl font-display font-bold text-verde-claro text-center">
                Whatsapp
              </h3>
              <p className="text-sm sm:text-base text-crema-suave/80 leading-relaxed font-semibold">
                Haz clic en el botón para abrir un chat directo con nosotros. Atendemos consultas de manera inmediata.
              </p>
            </div>

            <a
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] shadow-lg"
            >
              <svg className="w-5 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar por WhatsApp
            </a>

            <div className="border-t border-crema-suave/5 pt-4 text-sm sm:text-base text-crema-suave/80 font-semibold text-center ">
              <p>✉️ <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">{COMPANY_INFO.email}</a></p>
            </div>
          </div>

          <div className="md:col-span-7 bg-[#231A14] p-8 rounded-[2rem] border border-crema-suave/5 reveal reveal-slide-right delay-100">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-fade-in">
                <div className="inline-flex h-12 w-12 rounded-full bg-verde-claro/20 text-verde-claro items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold">¡Mensaje recibido!</h3>
                <p className="text-xs sm:text-sm text-crema-suave/70 max-w-xs mx-auto font-medium">
                  Gracias por escribirnos. Nos pondremos en contacto contigo en breve.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-bold text-verde-claro hover:underline pt-2 block mx-auto"
                > 
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <h3 className="text-xl font-display font-bold text-verde-claro text-center">
                  Enviar correo
                </h3>
                {/* Nombre */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-crema-suave/80">
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-crema-suave text-tierra-mate focus:outline-none focus:ring-2 focus:ring-verde-aguacate text-sm font-semibold"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                {/* Correo */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-crema-suave/80">
                    Correo electrónico
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-crema-suave text-tierra-mate focus:outline-none focus:ring-2 focus:ring-verde-aguacate text-sm font-semibold"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                {/* Teléfono */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-crema-suave/80">
                    Teléfono
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-crema-suave text-tierra-mate focus:outline-none focus:ring-2 focus:ring-verde-aguacate text-sm font-semibold"
                    placeholder="Número de contacto"
                  />
                </div>

                {/* Mensaje */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-crema-suave/80">
                    Mensaje
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-crema-suave text-tierra-mate focus:outline-none focus:ring-2 focus:ring-verde-aguacate text-sm font-semibold resize-none"
                    placeholder="¿En qué te podemos ayudar?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-verde-brand hover:bg-verde-aguacate disabled:bg-verde-brand/60 text-crema-suave font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-md"
                >
                  {isSubmitting ? (
                    <span className="h-4 w-4 border-2 border-crema-suave border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Enviar
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
