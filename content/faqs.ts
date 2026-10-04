export type Faq = {
  question: string;
  answer: string;
};

const disclaimerFaq: Faq = {
  question: "¿Esto sustituye a la atención médica o psicológica?",
  answer:
    "No. Las terapias naturales son complementarias y no sustituyen la atención médica ni psicológica. Si estás en tratamiento, sigue con él; esto suma, no resta.",
};

const dondeFaq: Faq = {
  question: "¿Dónde son las sesiones?",
  answer: "En Valencia, de forma presencial, y online desde donde estés. Al reservar te paso todos los detalles.",
};

const reikiOnlineFaq: Faq = {
  question: "¿El Reiki funciona online?",
  answer:
    "Sí. Tú te tumbas en casa, tranquila, y yo te envío el Reiki a distancia. Solo necesitas un sitio cómodo donde nadie te interrumpa.",
};

const reservarFaq: Faq = {
  question: "¿Cómo reservo?",
  answer:
    "Escríbeme por el formulario o por WhatsApp, cuéntame qué necesitas y buscamos el día que mejor te venga.",
};

export const faqs = {
  inicio: [
    dondeFaq,
    {
      question: "Tengo ansiedad. ¿Por dónde empiezo?",
      answer: "Por el Reiki. Primero hay que bajar revoluciones; la meditación y el tarot llegan después.",
    },
    reikiOnlineFaq,
    disclaimerFaq,
  ],
  servicios: [
    {
      question: "¿Puedo combinar terapias?",
      answer:
        "Sí, y muchas veces es lo mejor: Reiki para calmar, meditación para mantener esa calma y tarot cuando toca decidir.",
    },
    {
      question: "¿Tengo que creer en algo para que funcione?",
      answer: "No. Solo necesitas venir con ganas de dedicarte un rato. Yo te explico todo lo que hago y por qué.",
    },
    reservarFaq,
    disclaimerFaq,
  ],
  reiki: [
    {
      question: "¿Qué tengo que llevar?",
      answer: "Ropa cómoda. Te tumbas vestida y solo tienes que dejarte llevar.",
    },
    {
      question: "¿Qué se siente durante una sesión?",
      answer:
        "Cada persona lo vive a su manera. Hay quien nota calor en las manos, hormigueo o simplemente una relajación muy profunda.",
    },
    reikiOnlineFaq,
    {
      question: "¿Cómo son los cursos de Reiki?",
      answer: "Los imparto en Valencia y online. Escríbeme y te cuento las próximas fechas y cómo los organizo.",
    },
    disclaimerFaq,
  ],
  meditacion: [
    {
      question: "Nunca he meditado. ¿Puedo empezar?",
      answer: "Claro. Si nunca has meditado, mejor: empiezas sin ideas raras sobre cómo tiene que ser.",
    },
    {
      question: "¿Cómo recibo una meditación grabada?",
      answer: "Escríbeme por WhatsApp diciendo cuál quieres y te la envío.",
    },
    {
      question: "¿Puedo meditar si tengo ansiedad?",
      answer:
        "Puedes, aunque con ansiedad cuesta más. Por eso a veces conviene empezar con Reiki para bajar revoluciones.",
    },
    {
      question: "¿Cuándo empiezan los grupos?",
      answer: "Estoy a punto de abrir grupo online y en Valencia. Escríbeme y te aviso de las fechas.",
    },
    disclaimerFaq,
  ],
  tarot: [
    {
      question: "¿El tarot predice el futuro?",
      answer:
        "No lo uso así. El tarot terapéutico es un espejo: te ayuda a ver tu situación con claridad para que decidas tú.",
    },
    {
      question: "¿Por qué no hago tarot si llego con ansiedad?",
      answer: "Porque con la cabeza a mil todo se lee desde el miedo. Primero calma, después tarot.",
    },
    {
      question: "¿Puedo hacer la sesión online?",
      answer: "Sí. Hacemos la tirada por videollamada y lo ves todo en directo.",
    },
    disclaimerFaq,
  ],
  contacto: [
    {
      question: "¿Quién me responde?",
      answer: "Yo misma. Leo cada mensaje y te contesto personalmente.",
    },
    {
      question: "No sé qué necesito. ¿Puedo escribirte igual?",
      answer: "Claro. Marca \"Aún no lo sé\" y lo vemos juntas.",
    },
    dondeFaq,
    disclaimerFaq,
  ],
} satisfies Record<string, Faq[]>;

export const faqHeading = {
  eyebrow: "Preguntas",
  title: "Antes de empezar.",
};
