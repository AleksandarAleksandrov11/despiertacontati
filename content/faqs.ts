export type Faq = {
  question: string;
  answer: string;
};

const disclaimerFaq: Faq = {
  question: "¿Esto sustituye a la atención médica o psicológica?",
  answer:
    "No. Son prácticas de bienestar, complementarias, y no sustituyen la atención médica ni psicológica. Si estás en tratamiento, sigue con él; esto suma, no resta.",
};

const dondeFaq: Faq = {
  question: "¿Dónde son las sesiones?",
  answer: "Online, desde donde estés. Al reservar te paso todos los detalles.",
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

const lecturaFaq: Faq = {
  question: "¿Cómo recibo una lectura?",
  answer:
    "Las lecturas son en diferido. Eliges la tuya en la tienda, me escribes por WhatsApp y, tras confirmar el pago, te envío el vídeo y el PDF por WhatsApp.",
};

export const faqs = {
  inicio: [
    {
      question: "¿Por dónde empiezo?",
      answer:
        "Si llegas con estrés o ansiedad, por el Reiki: primero hay que bajar revoluciones. Si prefieres empezar por tu cuenta, descarga la guía gratuita Tu primera pausa.",
    },
    {
      question: "¿Cómo compro una meditación o una lectura?",
      answer:
        "En la tienda. Eliges, me escribes por WhatsApp desde la ficha del producto, te paso cómo pagar y, tras confirmar el pago, te lo envío.",
    },
    dondeFaq,
    disclaimerFaq,
  ],
  servicios: [
    {
      question: "¿Puedo combinar terapias?",
      answer:
        "Sí, y muchas veces es lo mejor: Reiki para calmar, meditación para mantener esa calma y tarot o autoconocimiento cuando toca decidir.",
    },
    {
      question: "¿Tengo que creer en algo para que funcione?",
      answer: "No. Solo necesitas venir con ganas de dedicarte un rato. Yo te explico todo lo que hago y por qué.",
    },
    {
      question: "¿Qué puedo hacer sin coincidir en agenda contigo?",
      answer:
        "Las meditaciones grabadas, las lecturas en diferido y el autoconocimiento. Los encuentras en la tienda y te llegan por enlace o por WhatsApp.",
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
    {
      question: "¿Qué es la sanación akáshica?",
      answer:
        "Un trabajo de sanación energética y acompañamiento para tomar conciencia de patrones personales, soltar y armonizar. No es una lectura de registros.",
    },
    reikiOnlineFaq,
    {
      question: "¿Cómo son los cursos de Reiki?",
      answer: "Escríbeme y te cuento las próximas fechas y cómo los organizo.",
    },
    disclaimerFaq,
  ],
  limpieza: [
    {
      question: "¿Tienes que venir a mi casa?",
      answer: "No. La limpieza la hago a distancia. Solo necesito la dirección del espacio y no hace falta que acordemos una hora.",
    },
    {
      question: "¿Cuánto cuesta?",
      answer: "30 € por espacio. Cuando termino, te envío el informe por WhatsApp.",
    },
    {
      question: "¿Sirve también para un espacio de trabajo?",
      answer: "Sí. Trabajo en casas y en espacios de trabajo: oficinas, consultas o locales.",
    },
    disclaimerFaq,
  ],
  meditacion: [
    {
      question: "Nunca he meditado. ¿Puedo empezar?",
      answer:
        "Claro. Si nunca has meditado, mejor: empiezas sin ideas raras sobre cómo tiene que ser. La guía gratuita Tu primera pausa es un buen primer paso.",
    },
    {
      question: "¿Cómo consigo las meditaciones grabadas?",
      answer:
        "En la tienda. Eliges el pack, me escribes por WhatsApp y, tras confirmar el pago, te envío un enlace privado para descargar los MP3.",
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
    lecturaFaq,
    {
      question: "¿Qué baraja usas?",
      answer: "El tarot Rider-Waite.",
    },
    {
      question: "¿Puedo hacer una sesión en directo?",
      answer:
        "Sí, de 30 o 50 minutos, online. La reservas en la tienda y la agendamos por WhatsApp.",
    },
    {
      question: "¿Por qué no hago tarot si llego con ansiedad?",
      answer: "Porque con la cabeza a mil todo se lee desde el miedo. Primero calma, después tarot.",
    },
    disclaimerFaq,
  ],
  autoconocimiento: [
    {
      question: "¿Qué necesito?",
      answer: "Solo tu fecha de nacimiento. Me la das por WhatsApp al hacer el pedido.",
    },
    {
      question: "¿La Matriz del Destino es tarot?",
      answer:
        "Se calcula con tu fecha de nacimiento y la energía de los 22 arcanos mayores. En la lectura la interpreto con cinco cartas, una para cada clave. El Código Personal y la Carta Personal son tarot numerológico.",
    },
    lecturaFaq,
    disclaimerFaq,
  ],
  contacto: [
    {
      question: "¿Quién me responde?",
      answer: "Yo misma. Leo cada mensaje y te contesto personalmente.",
    },
    {
      question: "No sé qué necesito. ¿Puedo escribirte igual?",
      answer: "Claro. Marca «Aún no lo sé» y lo vemos juntas.",
    },
    dondeFaq,
    disclaimerFaq,
  ],
  guia: [
    {
      question: "¿Es gratis de verdad?",
      answer: "Sí. Solo te pido tu nombre y tu email para enviártela.",
    },
    {
      question: "¿Me vas a llenar el correo?",
      answer:
        "No. Solo te escribiré con novedades, meditaciones y clases si marcas la casilla. Y puedes darte de baja cuando quieras.",
    },
    {
      question: "¿Necesito experiencia para meditar?",
      answer: "No. La guía está pensada justo para empezar desde cero.",
    },
  ],
} satisfies Record<string, Faq[]>;

export const faqHeading = {
  eyebrow: "Preguntas",
  title: "Antes de empezar.",
};
