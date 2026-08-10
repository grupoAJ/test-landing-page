/**
 * Contenido editable de la landing.
 * Todo lo que ves en la página sale de acá: textos, módulos, planes y contacto.
 * Cambiá lo que quieras sin tocar el resto del código.
 *
 * Para cambiar el NOMBRE del producto, editá `brand.name`.
 */

export const brand = {
  name: "Born ERP",
  tagline: "El ERP que conecta todo tu negocio",
};

export const nav = [
  { label: "Módulos", href: "#modulos" },
  { label: "Cómo funciona", href: "#flujo" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  eyebrow: "Plataforma de gestión integral",
  title: "Toda tu operación en un solo sistema",
  subtitle:
    "Presupuestos, producción, stock, ventas, finanzas y equipo — conectados de punta a punta. Menos planillas sueltas, más decisiones con datos reales.",
  ctaPrimary: { label: "Solicitar demo", href: "#contacto" },
  ctaSecondary: { label: "Ver módulos", href: "#modulos" },
  microcopy: "Demo sin compromiso · En la nube · Español / Inglés",
};

// Barra de datos rápidos debajo del hero (cifras ilustrativas del producto)
export const stats = [
  { value: "12", label: "módulos que trabajan como uno" },
  { value: "1", label: "única fuente de verdad" },
  { value: "∞", label: "empresas en una sola cuenta" },
  { value: "24/7", label: "en la nube, desde donde estés" },
];

// Chips de la barra de confianza (debajo del hero)
export const trustChips = [
  "Multiempresa",
  "Multimoneda",
  "En la nube",
  "Roles y permisos",
  "Bitácora de auditoría",
  "Español / Inglés",
];

// Sectores donde encaja (reemplaza a los logos genéricos de otras landings)
export const sectors = [
  { icon: "Factory", label: "Manufactura" },
  { icon: "Truck", label: "Distribución" },
  { icon: "ShoppingCart", label: "Retail y mayorista" },
  { icon: "Wrench", label: "Servicios" },
  { icon: "HardHat", label: "Construcción" },
  { icon: "Sprout", label: "Agro" },
];

// Íconos: usar nombres de lucide-react (ver app/components/Icon.tsx)
// `tone` define el color del ícono (ver toneStyles en app/page.tsx)
export const modules = [
  {
    icon: "Calculator",
    tone: "sky",
    title: "Presupuestos y tarificación",
    desc: "Configurá productos a medida y cotizá en segundos, con costos y márgenes siempre actualizados.",
  },
  {
    icon: "Factory",
    tone: "orange",
    title: "Fabricación y producción",
    desc: "Órdenes de fabricación, listas de materiales y un monitor de planta en tiempo real.",
  },
  {
    icon: "Boxes",
    tone: "emerald",
    title: "Inventario y stock",
    desc: "Control por depósito, reservas y alertas de mínimos. Sin sorpresas en el conteo.",
  },
  {
    icon: "ShoppingCart",
    tone: "violet",
    title: "Compras y proveedores",
    desc: "Órdenes de compra, recepciones y pagos, con las cuentas por pagar siempre claras.",
  },
  {
    icon: "Users",
    tone: "blue",
    title: "Ventas y clientes",
    desc: "Ficha de cliente 360°, ventas de mostrador, albaranes y facturación con PDF.",
  },
  {
    icon: "Truck",
    tone: "amber",
    title: "Logística y envíos",
    desc: "Planificá despachos y transportistas, con los costos de flete prorrateados solos.",
  },
  {
    icon: "LineChart",
    tone: "teal",
    title: "Tesorería y finanzas",
    desc: "Cobros, cuentas por cobrar y proyección de caja en tableros que se entienden.",
  },
  {
    icon: "Clock",
    tone: "rose",
    title: "Recursos humanos",
    desc: "Fichajes, control de horas y vacaciones, integrados con el resto del sistema.",
  },
  {
    icon: "BarChart3",
    tone: "indigo",
    title: "Informes y BI",
    desc: "Tableros y reportes que se arman solos, filtrables por empresa, período y rol.",
  },
  {
    icon: "FileText",
    tone: "cyan",
    title: "Documentos",
    desc: "Presupuestos, albaranes y facturas en PDF, con numeración y plantillas propias.",
  },
  {
    icon: "KanbanSquare",
    tone: "fuchsia",
    title: "Proyectos y tareas",
    desc: "Organizá el trabajo por tablero, asigná responsables y seguí cada avance.",
  },
  {
    icon: "Building2",
    tone: "lime",
    title: "Multiempresa",
    desc: "Varias razones sociales en un mismo login, aisladas y consolidables cuando lo necesites.",
  },
];

// Sección "todo conectado" — el argumento central del ERP
export const integration = {
  eyebrow: "Un solo sistema",
  title: "Un dato se carga una vez. El resto se actualiza solo.",
  desc: "En Born ERP los módulos no son islas: comparten una misma base. Cuando aprobás un presupuesto, la producción, el stock, la logística y las finanzas ya lo saben. Sin reescribir nada, sin planillas que no coinciden.",
  hub: "Base de datos única",
  spokes: [
    { icon: "Calculator", label: "Presupuestos" },
    { icon: "Factory", label: "Producción" },
    { icon: "Boxes", label: "Stock" },
    { icon: "Truck", label: "Logística" },
    { icon: "LineChart", label: "Finanzas" },
    { icon: "Users", label: "Ventas" },
  ],
};

// Bloques de features alternados (imagen + texto)
export const features = [
  {
    tag: "Flujo integrado",
    title: "Del presupuesto a la factura, sin recargar datos",
    desc: "Una cotización aprobada se convierte en orden de fabricación, albarán y factura sin volver a tipear nada. Todo queda enlazado y trazable.",
    bullets: [
      "Cotización → producción → entrega → factura",
      "Cada documento hereda del anterior",
      "Historial completo por cliente y por pedido",
    ],
    mockup: "flow",
  },
  {
    tag: "Producción",
    title: "Tu planta, en tiempo real",
    desc: "Seguí cada orden de fabricación mientras avanza. Cronómetro de tareas, parte diario y un monitor que te dice dónde está cada cosa.",
    bullets: [
      "Monitor de producción en vivo",
      "Cronómetro por tarea y operario",
      "Consumo de materiales al instante",
    ],
    mockup: "production",
  },
  {
    tag: "Finanzas",
    title: "Las finanzas, siempre bajo control",
    desc: "Cobros, pagos y proyección de caja en un mismo lugar. Y una regla de oro: el sistema nunca inventa un número que no conoce.",
    bullets: [
      "Proyección de flujo de caja",
      "Cuentas por cobrar y por pagar",
      "Tableros configurables por rol",
    ],
    mockup: "finance",
  },
  {
    tag: "Multiempresa",
    title: "Varias empresas, un solo login",
    desc: "Gestioná todas tus razones sociales desde una misma cuenta, con los datos de cada una perfectamente aislados y consolidables cuando lo necesités.",
    bullets: [
      "Datos aislados por empresa",
      "Vista consolidada para dirección",
      "Permisos finos por usuario y módulo",
    ],
    mockup: "company",
  },
];

// Cómo funciona — pasos numerados de la cadena comercial
export const workflow = {
  eyebrow: "Cómo funciona",
  title: "Un flujo, del pedido al cobro",
  desc: "Cada paso alimenta al siguiente. Cargás una vez y el sistema se encarga de que todo lo demás quede al día.",
  steps: [
    {
      icon: "Calculator",
      title: "Cotizás",
      desc: "Armás el presupuesto con costos y márgenes al día, en minutos.",
    },
    {
      icon: "Factory",
      title: "Producís",
      desc: "Se genera la orden de fabricación y se descuentan los materiales.",
    },
    {
      icon: "Truck",
      title: "Entregás",
      desc: "Albarán y logística, con los costos de flete prorrateados solos.",
    },
    {
      icon: "LineChart",
      title: "Cobrás",
      desc: "Factura, cuenta corriente y proyección de caja, todo enlazado.",
    },
  ],
};

export const benefits = [
  {
    icon: "LayoutGrid",
    title: "Todo en un solo lugar",
    desc: "Se acabaron las diez planillas que no coinciden. Una sola fuente de verdad para todo el negocio.",
  },
  {
    icon: "ShieldCheck",
    title: "Datos en los que confiás",
    desc: "Nunca supone precios ni valores: lo que no se conoce se informa aparte, jamás como cero.",
  },
  {
    icon: "Building2",
    title: "Multiempresa y multimoneda",
    desc: "Pensado desde el día uno para operar varias empresas y monedas sin malabares.",
  },
  {
    icon: "History",
    title: "Seguro y auditable",
    desc: "Roles y permisos por módulo, más una bitácora que registra quién cambió qué y cuándo.",
  },
];

// Tabla comparativa — el "antes y después"
export const comparison = {
  eyebrow: "Por qué cambiar",
  title: "Planillas sueltas vs. Born ERP",
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
      label: "Precios y costos",
      before: "A mano y propensos a error",
      after: "Cálculo automático con márgenes",
    },
    {
      label: "Multiempresa",
      before: "Una carpeta por empresa",
      after: "Un login, aislado y consolidable",
    },
    {
      label: "Reportes",
      before: "Copiar y pegar cada viernes",
      after: "Tableros en vivo por rol",
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
      role: "Pyme industrial",
    },
    {
      quote:
        "Cotizar pasó de horas a minutos, y con márgenes que sí cierran.",
      author: "Responsable Comercial",
      role: "Distribuidora",
    },
    {
      quote:
        "Ver la caja proyectada cambió por completo cómo tomamos decisiones.",
      author: "Administración",
      role: "Grupo multiempresa",
    },
  ],
};

// Sección de planes — SOLO A MODO DE EJEMPLO
// El pricing final está por definir. Todos los planes son para empresas
// (multiempresa incluido) y el precio base contempla 15 usuarios.
// Lo que cambia entre planes es el nivel de mantenimiento mensual.
export const pricing = {
  note: "Dato de prueba",
  subnote:
    "El pricing final está por definir. Todos los planes incluyen el sistema completo para empresas y una base de 15 usuarios; lo que cambia es el mantenimiento mensual.",
  plans: [
    {
      name: "Starter",
      price: "—",
      period: "mantenimiento básico",
      desc: "El sistema completo, con el mantenimiento mensual esencial.",
      features: [
        "Sistema completo para empresas",
        "Multiempresa y multimoneda",
        "Base para 15 usuarios",
        "Mantenimiento mensual básico",
      ],
      cta: "Solicitar demo",
      highlighted: false,
    },
    {
      name: "Profesional",
      price: "—",
      period: "mantenimiento prioritario",
      desc: "Todo lo del sistema, con mantenimiento y soporte prioritarios.",
      features: [
        "Sistema completo para empresas",
        "Multiempresa y multimoneda",
        "Base para 15 usuarios",
        "Mantenimiento mensual prioritario",
        "Soporte con tiempos de respuesta acordados",
      ],
      cta: "Solicitar demo",
      highlighted: true,
    },
    {
      name: "Empresa",
      price: "—",
      period: "mantenimiento dedicado",
      desc: "Para operaciones que necesitan acompañamiento dedicado.",
      features: [
        "Sistema completo para empresas",
        "Multiempresa y multimoneda",
        "Base para 15 usuarios (ampliable)",
        "Mantenimiento mensual dedicado",
        "Onboarding y soporte dedicado",
      ],
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
      q: "¿Es en la nube o hay que instalar algo?",
      a: "Es 100% en la nube: accedés desde el navegador, sin instalar nada y desde cualquier dispositivo.",
    },
    {
      q: "¿Puedo empezar con pocos módulos?",
      a: "Sí. Activás lo que necesitás hoy y sumás el resto cuando quieras, sin migrar de sistema.",
    },
    {
      q: "¿Maneja varias empresas y monedas?",
      a: "Sí, es multiempresa y multimoneda desde el día uno, con datos aislados y vista consolidada para dirección.",
    },
    {
      q: "¿Qué pasa con los datos que no se conocen?",
      a: "Nunca se inventan. Lo que el sistema no conoce se informa aparte, jamás como cero, para que confíes en cada número.",
    },
    {
      q: "¿Está disponible en español e inglés?",
      a: "Sí, la interfaz está en español e inglés, ideal para equipos y grupos con operación regional.",
    },
    {
      q: "¿Cómo migro mi información actual?",
      a: "Te acompañamos en el onboarding para cargar y migrar tus datos desde planillas u otros sistemas.",
    },
  ],
};

// Llamado a la acción final
export const finalCta = {
  title: "¿Listos para operar con datos reales?",
  subtitle:
    "Coordinamos una demo sin compromiso y te mostramos cómo se vería tu negocio dentro de Born ERP.",
  cta: { label: "Solicitar demo", href: "#contacto" },
};

export const contact = {
  title: "¿Lo vemos en acción?",
  subtitle:
    "Contanos sobre tu operación y coordinamos una demo sin compromiso. Te mostramos cómo se vería tu negocio dentro del sistema.",
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
        { label: "Módulos", href: "#modulos" },
        { label: "Cómo funciona", href: "#flujo" },
        { label: "Beneficios", href: "#beneficios" },
        { label: "Planes", href: "#planes" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Preguntas frecuentes", href: "#faq" },
        { label: "Comparativa", href: "#comparativa" },
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
