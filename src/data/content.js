
export const COMPANY_INFO = {
  name: 'Conavo',
  tagline: 'Agroindustrial',
  phone: '+52 1 425 112 0437',
  whatsapp: 'https://wa.me/5214251120437?text=Hola!,%20Me%20gustaría%20más%20información%20sobre%20los%20aguacates.',
  email: 'contacto@conavoagro.com',
  address: 'Salvador Azuela #268 Central de Abastos Morelia',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Salvador%20Azuela%20268,%20Central%20de%20Abastos,%20Morelia,%20Michoac%C3%A1n&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export const NAVIGATION = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Producto', href: '#producto' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

export const HERO_CONTENT = {
  badge: 'Origen Michoacán, México',
  title: 'El aguacate en su estado más puro',
  subtitle: 'Llevamos la riqueza y consistencia del aguacate Hass directo desde nuestros huertos en Michoacán hacia mercados globales.',
  ctaPrimary: 'Iniciar contacto',
  ctaSecondary: 'Ver producto',
  features: [
    { title: 'Logística integrada', desc: 'Control de temperatura desde el origen.' },
    { title: 'Estándar internacional', desc: 'Cumplimiento estricto de normas de calidad.' },
    { title: 'Suministro constante', desc: 'Disponibilidad garantizada durante todo el año.' },
  ],
};

export const STATS = [
  { value: '+15k', label: 'Toneladas anuales' },
  { value: '18+', label: 'Países de destino' },
  { value: '100%', label: 'Origen certificado' },
  { value: '365', label: 'Días de suministro' },
];

export const PRODUCT_CONTENT = {
  title: 'Calidad que se nota',
  subtitle: 'Frutos seleccionados manualmente bajo estrictas normas de inocuidad alimentaria.',
  variety: {
    name: 'Aguacate Hass',
    origin: 'Ario de Rosales, Michoacán (Zonas de cultivo elevadas)',
    description: 'De piel rugosa y pulpa cremosa con excelente sabor. Su consistencia garantiza una larga vida en anaquel.',
    specs: [
      { name: 'Materia seca', value: 'Entre 21% y 24% (consistencia ideal)' },
      { name: 'Aceite natural', value: '12% a 15% promedio' },
      { name: 'Cosecha manual', value: 'Corte cuidadoso con tijeras de extensión' },
      { name: 'Preenfriamiento', value: 'Rápido descenso térmico post-cosecha' },
    ]
  },
  calibers: [
    { size: '32 - 36', weight: '300g - 350g', desc: 'Tamaño Jumbo' },
    { size: '40 - 48', weight: '230g - 299g', desc: 'Tamaño Grande' },
    { size: '60 - 70', weight: '170g - 229g', desc: 'Tamaño Mediano' },
    { size: '84', weight: '135g - 169g', desc: 'Tamaño Estándar' },
  ],
  packaging: [
    { type: 'Cartón 4 kg', use: 'Formatos óptimos para distribución directa.' },
    { type: 'Cartón 11.3 kg', use: 'Estándar tradicional de exportación.' },
    { type: 'Cajas plásticas', use: 'Logística limpia para cadenas comerciales.' },
  ]
};

export const ABOUT_CONTENT = {
  title: 'Pasión por la tierra',
  subtitle: 'Trabajamos con respeto al entorno, usando tecnología de selección avanzada.',
  history: 'Ubicados en la zona aguacatera de Michoacán, combinamos la riqueza natural del suelo volcánico con procesos eficientes. Nos enfocamos en mantener una cadena clara y confiable para que cada pieza conserve su frescura y calidad original.',
  values: [
    { title: 'Consistencia', desc: 'Selección fotométrica por tamaño y calidad en empaque.' },
    { title: 'Trato directo', desc: 'Relación cercana sin intermediarios innecesarios.' },
    { title: 'Sustentabilidad', desc: 'Uso eficiente de agua y cuidado del suelo.' },
  ],
  certifications: [
    { name: 'GLOBALG.A.P.', id: 'Estándar global' },
    { name: 'PrimusGFS', id: 'Inocuidad total' },
    { name: 'SENASICA', id: 'Sanidad vegetal' },
    { name: 'USDA Organic', id: 'Opciones orgánicas' },
  ]
};
