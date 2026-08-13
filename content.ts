/**
 * Contenido editable de la landing.
 * Todo lo que ves en la página sale de acá: textos, módulos, planes y contacto.
 * Cambiá lo que quieras sin tocar el resto del código.
 *
 * Para cambiar el NOMBRE del producto, editá `brand.name`.
 */

export const brand = {
  name: "Born ERP",
  tagline: "Industrial Business OS",
  description:
    "ERP industrial a medida para fabricantes que han superado Excel, pero para los que un gran ERP resulta demasiado complejo, rígido o costoso.",
};

export const nav = [
  { label: "Capacidades", href: "#modulos" },
  { label: "IA", href: "#ia" },
  { label: "Implantación", href: "#implantacion" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  eyebrow: "Industrial Business OS",
  title: "El ERP para fabricantes que han superado Excel",
  subtitle:
    "Presupuestos, costes, compras, fabricación, stock, logística y finanzas en una única plataforma diseñada alrededor de tu operación. Sin la complejidad de un gran ERP.",
  ctaPrimary: { label: "Solicitar demo", href: "#contacto" },
  ctaSecondary: { label: "Ver planes", href: "#planes" },
  microcopy: "Flexible como tus procesos · Integrado como un gran ERP",
};

// Chips de la barra de confianza (debajo del hero)
export const trustChips = [
  "Multiempresa",
  "Multimoneda",
  "En la nube",
  "Roles y permisos",
  "Bitácora de auditoría",
  "API e integraciones",
  "Español / Inglés",
];

// Cadena de proceso industrial (banda oscura debajo del hero).
// Representa el hilo que conecta toda la operación en una sola plataforma.
export const processChain = {
  title: "Del presupuesto al cobro, en un mismo flujo",
  subtitle:
    "Una sola plataforma conecta lo que hoy vive repartido entre Excel, email, WhatsApp y software desconectado.",
  steps: [
    { icon: "Calculator", label: "Presupuestos" },
    { icon: "KanbanSquare", label: "Proyectos" },
    { icon: "ShoppingCart", label: "Compras" },
    { icon: "Factory", label: "Fabricación" },
    { icon: "Boxes", label: "Stock" },
    { icon: "Truck", label: "Logística" },
    { icon: "LineChart", label: "Finanzas" },
  ],
};

// Sectores donde encaja (nicho industrial defendible)
export const sectors = {
  eyebrow: "Pensado para operaciones como la tuya",
  title: "Fabricantes de 10 a 100 personas que producen por proyecto, pedido o serie corta",
  items: [
    { icon: "Factory", label: "Estructuras metálicas" },
    { icon: "Wrench", label: "Mecanizado" },
    { icon: "HardHat", label: "Carpintería industrial" },
    { icon: "Boxes", label: "Aluminio y vidrio" },
    { icon: "KanbanSquare", label: "Ingeniería por proyecto" },
    { icon: "Building2", label: "Instalaciones y equipamiento" },
  ],
};

// Íconos: usar nombres de lucide-react (ver app/components/Icon.tsx)
// `tone` define el color del ícono (ver toneStyles en app/page.tsx)
export const modules = [
  {
    icon: "Users",
    tone: "blue",
    title: "Comercial y clientes",
    desc: "Clientes, presupuestos versionados, precios y márgenes, ligados a cada proyecto.",
  },
  {
    icon: "Calculator",
    tone: "sky",
    title: "Presupuestos y costes",
    desc: "Configurá productos a medida y cotizá con costos y márgenes siempre actualizados.",
  },
  {
    icon: "ShoppingCart",
    tone: "violet",
    title: "Compras y proveedores",
    desc: "Pedidos, cotización, recepción y reposición, con las cuentas por pagar siempre claras.",
  },
  {
    icon: "Factory",
    tone: "orange",
    title: "Fabricación / OF",
    desc: "Órdenes de fabricación, consumos y un monitor de planta en tiempo real.",
  },
  {
    icon: "Layers",
    tone: "emerald",
    title: "BOM y despieces",
    desc: "Listas de materiales y costes industriales reales para cada producto.",
  },
  {
    icon: "Boxes",
    tone: "teal",
    title: "Stock e inventario",
    desc: "Control por depósito, reservas, ingresos de material y trazabilidad completa.",
  },
  {
    icon: "Truck",
    tone: "amber",
    title: "Logística y envíos",
    desc: "Despachos y transportistas, con los costos de flete prorrateados solos.",
  },
  {
    icon: "LineChart",
    tone: "indigo",
    title: "Finanzas y tesorería",
    desc: "Cobros, gastos, tesorería e indicadores de gestión en tableros que se entienden.",
  },
  {
    icon: "Building2",
    tone: "lime",
    title: "Multiempresa y multimoneda",
    desc: "Varias razones sociales en un mismo login, aisladas y consolidables cuando quieras.",
  },
];

// Sección "todo conectado" — el argumento central del ERP
export const integration = {
  eyebrow: "Un solo sistema",
  title: "Un dato se carga una vez. El resto se actualiza solo.",
  desc: "En Born ERP los módulos no son islas: comparten una misma base. Cuando aprobás un presupuesto, la compra, la fabricación, el stock, la logística y las finanzas ya lo saben. Sin reescribir nada, sin planillas que no coinciden.",
  hub: "Base de datos única",
  spokes: [
    { icon: "Calculator", label: "Presupuestos" },
    { icon: "ShoppingCart", label: "Compras" },
    { icon: "Factory", label: "Fabricación" },
    { icon: "Boxes", label: "Stock" },
    { icon: "Truck", label: "Logística" },
    { icon: "LineChart", label: "Finanzas" },
  ],
};

// Cita / posicionamiento — banda destacada
export const quote = {
  text: "No adaptamos tu empresa al ERP. Adaptamos el ERP a tu empresa.",
  sub: "Una base sólida de ERP con capacidad real de adaptar workflows, datos e integraciones a la forma en que trabaja tu empresa.",
};

// Bloques de features alternados (imagen + texto)
export const features = [
  {
    tag: "Flujo integrado",
    title: "Del presupuesto a la factura, sin recargar datos",
    desc: "Una cotización aprobada se convierte en compra, orden de fabricación, albarán y factura sin volver a tipear nada. Todo queda enlazado y trazable.",
    bullets: [
      "Presupuesto → compra → producción → entrega → factura",
      "Cada documento hereda del anterior",
      "Historial completo por cliente, proyecto y pedido",
    ],
    mockup: "flow",
  },
  {
    tag: "Producción",
    title: "Tu planta, en tiempo real",
    desc: "Seguí cada orden de fabricación mientras avanza. Consumo de materiales, parte diario y un monitor que te dice dónde está cada cosa.",
    bullets: [
      "Monitor de producción en vivo",
      "Consumo de materiales al instante",
      "Alertas de faltantes antes de lanzar una OF",
    ],
    mockup: "production",
  },
  {
    tag: "Costes y finanzas",
    title: "Costes reales, finanzas bajo control",
    desc: "Del coste industrial de cada producto a la proyección de caja. Y una regla de oro: el sistema nunca inventa un número que no conoce.",
    bullets: [
      "Coste real por producto y proyecto",
      "Cobros, pagos y proyección de flujo de caja",
      "Tableros configurables por rol",
    ],
    mockup: "finance",
  },
  {
    tag: "Multiempresa",
    title: "Varias empresas, un solo login",
    desc: "Gestioná todas tus razones sociales desde una misma cuenta, con los datos de cada una perfectamente aislados y consolidables cuando lo necesites.",
    bullets: [
      "Datos aislados por empresa",
      "Vista consolidada para dirección",
      "Permisos finos por usuario y módulo",
    ],
    mockup: "company",
  },
];

// IA aplicada — el segundo gran diferencial
export const ai = {
  eyebrow: "Preparado para IA",
  title: "IA aplicada donde realmente aporta valor",
  desc: "No es “un ERP con IA” más. La automatización y los agentes se incorporan en los puntos donde ahorran tiempo y evitan errores.",
  items: [
    {
      icon: "ShoppingCart",
      title: "Compras",
      desc: "Analiza cotizaciones de proveedores y recomienda alternativas.",
    },
    {
      icon: "Calculator",
      title: "Presupuestos",
      desc: "Detecta anomalías de costes o márgenes antes de enviar.",
    },
    {
      icon: "Boxes",
      title: "Stock",
      desc: "Sugerencias de reposición según consumo y demanda.",
    },
    {
      icon: "Factory",
      title: "Producción",
      desc: "Alertas de materiales faltantes antes de lanzar una OF.",
    },
    {
      icon: "FileText",
      title: "Documentos",
      desc: "Lee albaranes, facturas, pedidos y ofertas en PDF.",
    },
    {
      icon: "Sparkles",
      title: "Dirección",
      desc: "Preguntá: “¿Qué proyectos tienen margen inferior al 20%?”",
    },
  ],
};

// Implantación — "la implantación forma parte del producto"
export const implementation = {
  eyebrow: "Implantación",
  title: "La implantación forma parte del producto",
  desc: "Un ERP industrial no se instala como una app genérica. Lo configuramos alrededor de tus procesos reales y migramos tu información para que genere valor desde el primer día.",
  steps: [
    {
      n: "01",
      title: "Discovery",
      desc: "Mapeo de procesos, responsables, datos, sistemas actuales y prioridades.",
    },
    {
      n: "02",
      title: "Configuración",
      desc: "Maestros, permisos, módulos, workflows y reglas de negocio.",
    },
    {
      n: "03",
      title: "Migración",
      desc: "Importación y depuración de artículos, clientes, proveedores y datos.",
    },
    {
      n: "04",
      title: "Puesta en marcha",
      desc: "Pruebas, formación, acompañamiento y transición progresiva.",
    },
    {
      n: "05",
      title: "Evolución",
      desc: "Nuevos módulos, automatizaciones, integraciones, dashboards e IA.",
    },
  ],
  model: [
    {
      title: "Implementación",
      desc: "Proyecto inicial según alcance.",
      value: "Desde €4.900",
    },
    {
      title: "Suscripción ERP",
      desc: "Licencia, hosting, actualizaciones y soporte.",
      value: "Desde €390 / mes",
    },
    {
      title: "Desarrollo & IA",
      desc: "Integraciones, automatizaciones y desarrollos específicos.",
      value: "Bajo presupuesto",
    },
  ],
};

// Diferenciales — "¿Por qué Born ERP?"
export const benefits = [
  {
    icon: "Factory",
    title: "Diseñado para industria",
    desc: "BOM, fabricación, compras, stock, logística y costes forman parte del ADN del producto.",
  },
  {
    icon: "Wrench",
    title: "A medida sin empezar de cero",
    desc: "Una base sólida de ERP con capacidad real de adaptar workflows, datos e integraciones.",
  },
  {
    icon: "LayoutGrid",
    title: "Menos complejidad",
    desc: "La potencia para operar una empresa industrial sin una implantación interminable.",
  },
  {
    icon: "Database",
    title: "Datos conectados",
    desc: "Una misma información acompaña desde el presupuesto hasta fabricación, entrega y finanzas.",
  },
  {
    icon: "Sparkles",
    title: "Preparado para IA",
    desc: "Automatizaciones y agentes donde aportan valor real: documentos, compras, análisis y alertas.",
  },
  {
    icon: "Users",
    title: "Acompañamiento directo",
    desc: "Un equipo que entiende tanto el software como el día a día de una empresa industrial.",
  },
];

// Tabla comparativa — el "antes y después"
export const comparison = {
  eyebrow: "Por qué cambiar",
  title: "Excel ya no alcanza. Un gran ERP te queda grande.",
  subtitle:
    "El salto de las planillas sueltas a una operación conectada, sin implantar un ERP sobredimensionado.",
  before: "Planillas sueltas",
  after: "Born ERP",
  rows: [
    {
      label: "Fuente de datos",
      before: "Diez Excel que no coinciden",
      after: "Una sola base compartida por todos",
    },
    {
      label: "Trazabilidad",
      before: "“¿Quién cambió esto?”",
      after: "Bitácora con usuario, fecha y detalle",
    },
    {
      label: "Precios y costes",
      before: "A mano y propensos a error",
      after: "Cálculo automático con márgenes reales",
    },
    {
      label: "Producción",
      before: "Faltantes que se descubren tarde",
      after: "OF, BOM y consumos conectados al stock",
    },
    {
      label: "Multiempresa",
      before: "Una carpeta por empresa",
      after: "Un login, aislado y consolidable",
    },
    {
      label: "Escalar",
      before: "Se rompe al crecer",
      after: "Sumás módulos cuando querés",
    },
  ],
};

// Testimonios — ILUSTRATIVOS (contenido de ejemplo para el boceto)
export const testimonials = {
  note: "Testimonios de ejemplo",
  items: [
    {
      quote:
        "Dejamos de perseguir versiones de planillas. Ahora todos miran el mismo número.",
      author: "Dirección de Operaciones",
      role: "Fabricante de estructuras metálicas",
    },
    {
      quote: "Cotizar pasó de horas a minutos, y con márgenes que sí cierran.",
      author: "Responsable Comercial",
      role: "Ingeniería por proyecto",
    },
    {
      quote:
        "Ver los costes reales y la caja proyectada cambió cómo tomamos decisiones.",
      author: "Administración",
      role: "Grupo industrial multiempresa",
    },
  ],
};

// Planes comerciales — Propuesta comercial 2026
export const pricing = {
  note: "Precios orientativos para lanzamiento",
  subnote:
    "Tres niveles claros. El producto evoluciona con la complejidad de tu empresa: no pagás desde el primer día por capacidades que todavía no necesitás.",
  disclaimer:
    "La propuesta final depende del alcance, migración, integraciones y necesidades de implantación.",
  plans: [
    {
      name: "Core",
      price: "€390",
      period: "/ mes",
      users: "Hasta 10 usuarios",
      desc: "Centraliza tu empresa.",
      features: [
        "Clientes y proveedores",
        "Artículos y tarifas",
        "Presupuestos y compras",
        "Proyectos",
        "Gastos y cobros",
        "Dashboard operativo",
        "Soporte estándar",
      ],
      impl: "Implantación desde €4.900",
      cta: "Solicitar demo",
      highlighted: false,
    },
    {
      name: "Industrial",
      price: "€690",
      period: "/ mes",
      users: "Hasta 25 usuarios",
      desc: "Conecta toda tu operación industrial.",
      features: [
        "Todo lo de Core",
        "Fabricación / OF",
        "BOM y costes industriales",
        "Stock y reservas",
        "Ingreso de materiales",
        "Logística",
        "Multiempresa y multimoneda",
        "Soporte prioritario",
      ],
      impl: "Implantación desde €8.900",
      cta: "Solicitar demo",
      highlighted: true,
    },
    {
      name: "Scale",
      price: "Desde €1.290",
      period: "/ mes",
      users: "Hasta 50 usuarios",
      desc: "Automatiza y escala.",
      features: [
        "Todo lo de Industrial",
        "Multiempresa avanzada",
        "Múltiples almacenes",
        "API e integraciones",
        "Automatizaciones personalizadas",
        "IA aplicada a procesos",
        "SLA y soporte dedicado",
      ],
      impl: "Implantación desde €15.000",
      cta: "Hablar con ventas",
      highlighted: false,
    },
  ],
};

// Preguntas frecuentes
export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que solés preguntar",
  items: [
    {
      q: "¿Sirve si fabrico por proyecto, pedido o serie corta?",
      a: "Sí. Born ERP está pensado para fabricantes con presupuestos complejos, BOM, órdenes de fabricación, compras a múltiples proveedores y costes reales por proyecto.",
    },
    {
      q: "¿Puedo empezar con lo básico y crecer después?",
      a: "Sí. Arrancás con Core y subís a Industrial o Scale cuando tu operación lo pide, sin migrar de sistema ni perder datos.",
    },
    {
      q: "¿Cobran por usuario?",
      a: "No. El precio es por empresa y nivel de producto, con un número generoso de usuarios incluido. Así podés dar acceso a todo tu equipo sin pensar en licencias.",
    },
    {
      q: "¿Cómo migro mi información de Excel?",
      a: "La migración forma parte de la implantación: importamos y depuramos artículos, clientes, proveedores y los datos necesarios para que arranques con todo cargado.",
    },
    {
      q: "¿Es en la nube o hay que instalar algo?",
      a: "Es 100% en la nube: accedés desde el navegador, sin instalar nada y desde cualquier dispositivo.",
    },
    {
      q: "¿Está disponible en español e inglés?",
      a: "Sí, la interfaz está en español e inglés, ideal para equipos y grupos con operación regional.",
    },
  ],
};

// Llamado a la acción final
export const finalCta = {
  title: "¿Tu empresa ha superado Excel?",
  subtitle:
    "Analicemos tu operación y definamos el nivel de Born ERP que mejor encaja con tus procesos. Demo sin compromiso.",
  cta: { label: "Solicitar demo", href: "#contacto" },
};

export const contact = {
  title: "¿Lo vemos en acción?",
  subtitle:
    "Contanos sobre tu operación industrial y coordinamos una demo sin compromiso. Te mostramos cómo se vería tu negocio dentro de Born ERP.",
  email: "info@borncapitalsa.com",
  phone: "+54 9 263 479 3912",
  website: "www.borncapitalsa.com",
};

export const footer = {
  disclaimer: "Boceto de demostración · contenido y datos de ejemplo.",
  columns: [
    {
      title: "Producto",
      links: [
        { label: "Capacidades", href: "#modulos" },
        { label: "IA aplicada", href: "#ia" },
        { label: "Implantación", href: "#implantacion" },
        { label: "Planes", href: "#planes" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Preguntas frecuentes", href: "#faq" },
        { label: "Por qué cambiar", href: "#comparativa" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Contacto", href: "#contacto" },
        { label: "Solicitar demo", href: "#contacto" },
      ],
    },
  ],
};
