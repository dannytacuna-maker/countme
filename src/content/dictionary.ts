import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    why: string;
    services: string;
    contact: string;
    talk: string;
  };
  hero: {
    brand: string;
    eyebrow: string;
    headline: string;
    support: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    support: string;
    founded: string;
    foundedLabel: string;
    relations: string;
    relationsLabel: string;
    serveEyebrow: string;
    industries: string[];
  };
  why: {
    eyebrow: string;
    headline: string;
    support: string;
    inquire: string;
    points: { title: string; body: string }[];
  };
  services: {
    eyebrow: string;
    headline: string;
    support: string;
    inquire: string;
    items: {
      id: string;
      title: string;
      body: string;
      detail: string;
      bullets: string[];
    }[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    support: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    mapsLabel: string;
    mapsCta: string;
    wazeCta: string;
    callLabel: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    whatsappCta: string;
    whatsappMessage: string;
  };
  footer: {
    tagline: string;
    group: string;
    rights: string;
  };
};

const es: Dictionary = {
  meta: {
    title: "Countme | Contabilidad, impuestos, auditoría y planillas en Costa Rica",
    description:
      "Countme, fundada en 2007, ofrece outsourcing en contabilidad, cumplimiento tributario, planillas, auditoría, zona franca y administración para empresas en Costa Rica.",
  },
  nav: {
    about: "Sobre Countme",
    why: "Por qué Countme",
    services: "Servicios",
    contact: "Contacto",
    talk: "Contactar",
  },
  hero: {
    brand: "Countme",
    eyebrow: "Contabilidad, planillas e impuestos",
    headline: "Outsourcing contable y administrativo",
    support:
      "Profesionales de amplia trayectoria que operan la contabilidad, el cumplimiento tributario y la planilla de sus clientes en Costa Rica, desde 2007.",
    ctaPrimary: "Contactar",
    ctaSecondary: "Ver servicios",
    scrollHint: "Desplazar para explorar",
  },
  about: {
    eyebrow: "Sobre Countme",
    headline: "Outsourcing contable y administrativo desde 2007.",
    support:
      "Countme está formada por profesionales de amplia trayectoria que operan la contabilidad, el cumplimiento tributario y la planilla de sus clientes. Mantenemos relaciones de más de 20 años, con empresas locales e internacionales.",
    founded: "2007",
    foundedLabel: "Año de fundación",
    relations: "20+",
    relationsLabel: "Años de relación con clientes",
    serveEyebrow: "A quién servimos",
    industries: [
      "Bienes y servicios",
      "Hoteles y restaurantes",
      "Sociedades inactivas",
      "Propiedades de alquiler",
      "Industria",
      "Producción de eventos",
      "Construcción",
      "Gimnasios",
      "Transporte",
      "Empresas agrícolas",
      "Holdings",
      "Bienes raíces",
      "Administración de condóminos",
      "Property managers",
      "Escuelas de surf",
      "Escrow",
    ],
  },
  why: {
    eyebrow: "Por qué Countme",
    headline: "Atención personalizada y cumplimiento continuo.",
    support:
      "Diseñamos servicios integrales para reducir la estructura administrativa y devolver el foco a la actividad principal del negocio.",
    inquire: "Consultar",
    points: [
      {
        title: "Atención personalizada",
        body: "Una relación directa con el expediente de su empresa — no un mostrador genérico.",
      },
      {
        title: "Conocimiento y experiencia",
        body: "Profesionales con criterio para operar contabilidad, impuestos y planilla en Costa Rica.",
      },
      {
        title: "Confidencialidad",
        body: "La información financiera y laboral de su empresa se trata como un archivo cerrado.",
      },
      {
        title: "Cumplimiento y control",
        body: "Obligaciones, reportes y controles alineados para que el mes cierre en orden.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    headline: "Servicios contables integrales",
    support:
      "Servicios contables integrales, pensados para aligerar la administración y dejar el negocio en el centro.",
    inquire: "Consultar",
    items: [
      {
        id: "accounting",
        title: "Contabilidad",
        body: "Contabilidad integral para reducir la estructura administrativa y enfocar el negocio.",
        detail:
          "Operamos la contabilidad general, financiera, fiscal, de proyectos y de costos — para que el expediente sostenga la operación.",
        bullets: [
          "Contabilidad general",
          "Contabilidad financiera",
          "Contabilidad fiscal",
          "Proyectos contables",
          "Contabilidad de costos",
        ],
      },
      {
        id: "payroll",
        title: "Planillas",
        body: "Cálculo, banca electrónica y cumplimiento laboral de punta a punta.",
        detail:
          "Desde el contrato hasta la liquidación: planilla, archivos bancarios, CCSS, INS y contratación de personal.",
        bullets: [
          "Contratos laborales",
          "Cálculo de planilla",
          "Transacción electrónica de planilla",
          "Reportes CCSS e INS",
          "Preparación de liquidaciones",
          "Reclutamiento y contratación",
        ],
      },
      {
        id: "tax",
        title: "Cumplimiento tributario",
        body: "Impuestos en Costa Rica con una lectura de corto y largo plazo.",
        detail:
          "Los servicios tributarios se desarrollan a partir de las necesidades del cliente, integrando objetivos inmediatos y de horizonte.",
        bullets: [
          "Impuesto sobre la renta",
          "Ganancias de capital",
          "Impuesto de lujo",
          "Patente",
          "Impuestos municipales",
        ],
      },
      {
        id: "admin",
        title: "Administración",
        body: "Procesos administrativos, inscripciones y facturación electrónica.",
        detail:
          "Apoyo en el back-office: cuentas por pagar, reingeniería de procesos, registros y facturación electrónica.",
        bullets: [
          "Administración de cuentas por pagar",
          "Reingeniería de procesos administrativos",
          "Inscripciones: Hacienda, municipalidades, CCSS, INS",
          "Registro de beneficiarios finales",
          "Asistencia administrativa",
          "Registro PYME",
          "Facturación electrónica",
        ],
      },
      {
        id: "audit",
        title: "Auditoría",
        body: "Auditoría financiera y operativa con foco en áreas clave de riesgo.",
        detail:
          "Analizamos de forma profunda y objetiva la información financiera y operativa para identificar los riesgos más significativos.",
        bullets: [
          "Auditoría financiera",
          "Auditoría operativa",
          "Enfoque en áreas clave de riesgo",
        ],
      },
      {
        id: "freezone",
        title: "Régimen de zona franca",
        body: "Obligaciones formales, auxiliares de activos fijos y acompañamiento PROCOMER.",
        detail:
          "Cumplimiento mensual, levantamiento de auxiliares, informe anual de operaciones y acompañamiento en auditorías de PROCOMER.",
        bullets: [
          "Cumplimiento de obligaciones formales mensuales",
          "Levantamiento de auxiliares de activos fijos",
          "Preparación del informe anual de operaciones",
          "Acompañamiento de auditorías PROCOMER",
        ],
      },
      {
        id: "other",
        title: "Otros servicios",
        body: "Certificaciones, reconstrucción contable, inventarios y presupuestos.",
        detail:
          "Trabajos puntuales que cierran el expediente cuando la operación lo requiere.",
        bullets: [
          "Certificaciones de CPA",
          "Certificación de estados financieros",
          "Flujos de efectivo",
          "Reconstrucción contable",
          "Inventarios",
          "Presupuestos",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    headline: "Contacto",
    support:
      "Respondemos desde Santa Ana. WhatsApp, llamada, correo o este formulario.",
    addressLabel: "Dirección",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    mapsLabel: "Ubicación",
    mapsCta: "Abrir en Google Maps",
    wazeCta: "Ir con Waze",
    callLabel: "Llamar",
    form: {
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      message: "Mensaje",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      success:
        "Solicitud recibida. El equipo de Countme le responderá durante el día hábil.",
      error:
        "No fue posible enviar. Escríbanos por WhatsApp, correo o teléfono.",
    },
    whatsappCta: "Escribir por WhatsApp",
    whatsappMessage:
      "Hola, me gustaría información sobre los servicios de Countme.",
  },
  footer: {
    tagline: "Accounting, Tax, Auditing & Payroll",
    group: "Marca del grupo SSC",
    rights: "Countme. Todos los derechos reservados.",
  },
};

const en: Dictionary = {
  meta: {
    title: "Countme | Accounting, tax, audit, and payroll in Costa Rica",
    description:
      "Founded in 2007, Countme provides outsourcing in accounting, tax compliance, payroll, audit, free-zone, and administration for companies in Costa Rica.",
  },
  nav: {
    about: "About Countme",
    why: "Why Countme",
    services: "Services",
    contact: "Contact",
    talk: "Contact us",
  },
  hero: {
    brand: "Countme",
    eyebrow: "Accounting, payroll, and tax",
    headline: "Accounting and administrative outsourcing",
    support:
      "Experienced professionals who run accounting, tax compliance, and payroll for clients in Costa Rica, since 2007.",
    ctaPrimary: "Contact us",
    ctaSecondary: "View services",
    scrollHint: "Scroll to explore",
  },
  about: {
    eyebrow: "About Countme",
    headline: "Accounting and administrative outsourcing since 2007.",
    support:
      "Countme is made of experienced professionals who run accounting, tax compliance, and payroll for our clients. We keep relationships of more than 20 years, with local firms and large international corporations.",
    founded: "2007",
    foundedLabel: "Year founded",
    relations: "20+",
    relationsLabel: "Years of client relationships",
    serveEyebrow: "Who we serve",
    industries: [
      "Goods and services",
      "Hotels and restaurants",
      "Inactive companies",
      "Rental properties",
      "Industrial",
      "Event production",
      "Construction",
      "Gyms",
      "Transport",
      "Agricultural companies",
      "Holdings",
      "Real estate",
      "HOA management",
      "Property managers",
      "Surf schools",
      "Escrow",
    ],
  },
  why: {
    eyebrow: "Why Countme",
    headline: "Personal attention and continuous compliance.",
    support:
      "We design integrated services to reduce administrative structure and return attention to the core business.",
    inquire: "Inquire",
    points: [
      {
        title: "Personalized attention",
        body: "A direct relationship with your company’s file — not a generic counter.",
      },
      {
        title: "Knowledge and experience",
        body: "Professionals with judgment to run accounting, tax, and payroll in Costa Rica.",
      },
      {
        title: "Confidentiality",
        body: "Your financial and labor information is treated as a closed file.",
      },
      {
        title: "Compliance and control",
        body: "Obligations, reports, and controls aligned so the month closes in order.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    headline: "Integrated accounting services",
    support:
      "Integrated accounting services, designed to lighten administration and keep the business at the center.",
    inquire: "Inquire",
    items: [
      {
        id: "accounting",
        title: "Accounting",
        body: "Integrated accounting to reduce administrative structure and keep focus on the business.",
        detail:
          "We run general, financial, fiscal, project, and cost accounting — so the file can hold the operation.",
        bullets: [
          "General accounting",
          "Financial accounting",
          "Fiscal accounting",
          "Accounting projects",
          "Cost accounting",
        ],
      },
      {
        id: "payroll",
        title: "Payroll",
        body: "Calculation, electronic banking, and labor compliance end to end.",
        detail:
          "From contract to settlement: payroll, bank files, CCSS, INS, and personnel hiring.",
        bullets: [
          "Employment contracts",
          "Payroll calculation",
          "Electronic payroll bank transaction",
          "CCSS and INS reports",
          "Labor settlement preparation",
          "Recruitment and hiring",
        ],
      },
      {
        id: "tax",
        title: "Tax compliance",
        body: "Costa Rica tax with a short- and long-term reading.",
        detail:
          "Tax services built around the client’s needs, integrating immediate and longer-horizon objectives.",
        bullets: [
          "Income tax",
          "Capital gains",
          "Luxury tax",
          "Municipal patent",
          "Municipal taxes",
        ],
      },
      {
        id: "admin",
        title: "Administration",
        body: "Administrative processes, registrations, and electronic invoicing.",
        detail:
          "Back-office support: accounts payable, process redesign, registrations, and e-invoicing.",
        bullets: [
          "Accounts payable administration",
          "Administrative process redesign",
          "Registrations: Tax Authority, municipalities, CCSS, INS",
          "Ultimate beneficial owner registry",
          "Administrative assistance",
          "SME registration",
          "Electronic invoicing",
        ],
      },
      {
        id: "audit",
        title: "Audit",
        body: "Financial and operational audit focused on key risk areas.",
        detail:
          "We analyze financial and operational information thoroughly and objectively to identify the most significant risks.",
        bullets: [
          "Financial audit",
          "Operational audit",
          "Focus on key risk areas",
        ],
      },
      {
        id: "freezone",
        title: "Free-zone regime",
        body: "Formal obligations, fixed-asset ledgers, and PROCOMER support.",
        detail:
          "Monthly compliance, fixed-asset subsidiaries, the annual operations report, and support for PROCOMER audits.",
        bullets: [
          "Monthly formal obligations",
          "Fixed-asset subsidiary survey",
          "Annual operations report",
          "Support for PROCOMER audits",
        ],
      },
      {
        id: "other",
        title: "Other services",
        body: "Certifications, accounting reconstruction, inventories, and budgets.",
        detail:
          "Point work that closes the file when the operation requires it.",
        bullets: [
          "CPA certifications",
          "Financial statement certification",
          "Cash flows",
          "Accounting reconstruction",
          "Inventories",
          "Budgets",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    headline: "Contact",
    support:
      "We respond from Santa Ana. WhatsApp, call, email, or this form.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    mapsLabel: "Location",
    mapsCta: "Open in Google Maps",
    wazeCta: "Go with Waze",
    callLabel: "Call",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      success:
        "Request received. The Countme team will reply during the business day.",
      error:
        "We could not send your request. Contact us by WhatsApp, email, or phone.",
    },
    whatsappCta: "Message on WhatsApp",
    whatsappMessage:
      "Hello, I would like information about Countme services.",
  },
  footer: {
    tagline: "Accounting, Tax, Auditing & Payroll",
    group: "Brand of the SSC group",
    rights: "Countme. All rights reserved.",
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? en : es;
}
