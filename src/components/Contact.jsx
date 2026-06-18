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
    <section id="contacto" className="py-20 md:py-28 bg-tierra-mate text-crema-suave relative overflow-hidden">
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-oro-aceite/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-verde-claro block">
            Contacto directo
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-crema-suave">
            Hablemos hoy mismo
          </h2>
          <p className="text-sm sm:text-base text-crema-suave/80 font-medium">
            Déjanos tus datos de contacto o escríbenos directamente por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          
          <div className="md:col-span-5 bg-[#1F1813] p-8 rounded-[2rem] border border-crema-suave/5 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-display font-bold text-verde-claro">
                ¿Buscas una respuesta inmediata?
              </h3>
              <p className="text-xs sm:text-sm text-crema-suave/70 leading-relaxed font-medium">
                Haz clic en el enlace para abrir un chat directo con nosotros. Atendemos consultas de manera inmediata.
              </p>
            </div>

            <a
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] shadow-lg"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-white" />
              Escribir por WhatsApp
            </a>

            <div className="border-t border-crema-suave/5 pt-4 text-[11px] text-crema-suave/50 font-medium space-y-1">
              <p>📍 {COMPANY_INFO.address}</p>
              <p>✉️ {COMPANY_INFO.email}</p>
            </div>
          </div>

          <div className="md:col-span-7 bg-[#231A14] p-8 rounded-[2rem] border border-crema-suave/5">
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
