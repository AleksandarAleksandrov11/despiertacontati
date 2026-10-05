import { site } from "./site";

export type LegalBlock = string | { list: string[] } | { cookiesTable: true } | { cookieSettings: string };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  sections: LegalSection[];
};

const holder = site.legal.holder;
const email = site.contact.email;
const phone = site.contact.phoneDisplay;
const nifLine = site.legal.nif ? [`NIF: ${site.legal.nif}`] : [];

export const legalToc = "En esta página";

export const avisoLegal: LegalDocument = {
  slug: "aviso-legal",
  eyebrow: "Legal",
  title: "Aviso legal",
  intro: "Información sobre quién está detrás de esta web y las condiciones para usarla.",
  metaTitle: "Aviso legal | Despierta con Tati",
  metaDescription:
    "Aviso legal de despiertacontati.com: datos de la titular, condiciones de uso, propiedad intelectual y responsabilidad conforme a la LSSI-CE.",
  sections: [
    {
      id: "titular",
      title: "Datos de la titular",
      blocks: [
        "En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), estos son los datos de la titular de la web:",
        {
          list: [
            `Titular: ${holder}`,
            ...nifLine,
            `Nombre comercial: ${site.name}`,
            `Domicilio: ${site.legal.city}, España`,
            `Email: ${email}`,
            `Teléfono: ${phone}`,
            `Web: ${site.url.replace("https://", "")}`,
          ],
        },
      ],
    },
    {
      id: "objeto",
      title: "Objeto de la web",
      blocks: [
        "Esta web da a conocer los servicios de terapia holística de Despierta con Tati: sesiones de Reiki, meditación, tarot terapéutico, registros akáshicos, Matriz del Destino y formaciones de Reiki, en Valencia y online, y facilita el contacto para reservar o pedir información.",
      ],
    },
    {
      id: "condiciones",
      title: "Condiciones de uso",
      blocks: [
        "Al navegar por esta web aceptas usarla de buena fe y conforme a la ley. No está permitido usarla para fines ilícitos, introducir virus o cualquier código que pueda dañar los sistemas, ni enviar información falsa a través de los formularios.",
        "La titular puede modificar el contenido y el diseño de la web en cualquier momento, sin previo aviso.",
      ],
    },
    {
      id: "salud",
      title: "Sobre las terapias",
      blocks: [
        `${site.disclaimer} La información de esta web es divulgativa y no constituye diagnóstico ni tratamiento. Si tienes un problema de salud, consulta con un profesional sanitario.`,
      ],
    },
    {
      id: "propiedad",
      title: "Propiedad intelectual e industrial",
      blocks: [
        "Los textos, el logotipo, el diseño y el resto de contenidos propios de esta web pertenecen a la titular o se usan con licencia. No se pueden reproducir, distribuir ni transformar sin autorización expresa.",
        "Las fotografías proceden de bancos de imágenes con licencia de uso libre y se utilizan con fines ilustrativos.",
      ],
    },
    {
      id: "responsabilidad",
      title: "Responsabilidad",
      blocks: [
        "La titular trabaja para que la información de la web sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni se responsabiliza de los daños derivados de un uso indebido de la web o de interrupciones técnicas ajenas a su control.",
      ],
    },
    {
      id: "enlaces",
      title: "Enlaces a otras webs",
      blocks: [
        "La web incluye enlaces a servicios de terceros, como WhatsApp o Instagram. La titular no controla esos sitios y no se hace responsable de sus contenidos ni de sus políticas. Te recomendamos revisar sus condiciones antes de usarlos.",
      ],
    },
    {
      id: "ley",
      title: "Legislación y jurisdicción",
      blocks: [
        "Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a la normativa aplicable; cuando la otra parte sea una persona consumidora, serán los de su domicilio.",
      ],
    },
  ],
};

export const politicaPrivacidad: LegalDocument = {
  slug: "politica-de-privacidad",
  eyebrow: "Legal",
  title: "Política de privacidad",
  intro: "Qué datos recojo, para qué los uso, cuánto tiempo los guardo y cómo puedes ejercer tus derechos.",
  metaTitle: "Política de privacidad | Despierta con Tati",
  metaDescription:
    "Cómo trata Despierta con Tati tus datos personales: formulario de contacto, suscripción, WhatsApp, hosting y analítica, conforme al RGPD y la LOPDGDD.",
  sections: [
    {
      id: "responsable",
      title: "Responsable del tratamiento",
      blocks: [
        {
          list: [
            `Responsable: ${holder}`,
            ...nifLine,
            `Domicilio: ${site.legal.city}, España`,
            `Email: ${email}`,
            `Teléfono: ${phone}`,
          ],
        },
        "Esta política se rige por el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).",
      ],
    },
    {
      id: "datos",
      title: "Qué datos trato y para qué",
      blocks: [
        "Formulario de contacto. Trato tu nombre, tu email o teléfono, el servicio que te interesa, la modalidad que prefieres y el mensaje que quieras escribir, para responder a tu consulta y, si lo pides, organizar tu sesión, clase o curso. Al enviarlo se abre WhatsApp con tu mensaje para que me lo mandes tú, y puedo recibir además una copia por email.",
        "Suscripción a novedades. Trato tu email para enviarte información sobre nuevos grupos, cursos y meditaciones. Puedes darte de baja cuando quieras escribiéndome o respondiendo a cualquier envío.",
        "WhatsApp. Si me escribes por WhatsApp, trataré tu número, tu nombre de perfil y lo que me cuentes para atender tu consulta. WhatsApp es un servicio de Meta Platforms y se rige también por sus propias condiciones y política de privacidad.",
        "Navegación y analítica. Si das tu consentimiento, uso Vercel Web Analytics y Speed Insights para conocer de forma agregada y anónima cuántas visitas recibe la web y cómo funciona. Estas herramientas no instalan cookies ni permiten identificarte.",
      ],
    },
    {
      id: "legitimacion",
      title: "Base legal",
      blocks: [
        {
          list: [
            "Consentimiento (artículo 6.1.a del RGPD): al enviar el formulario, suscribirte o aceptar la analítica.",
            "Aplicación de medidas precontractuales y ejecución de un servicio (artículo 6.1.b del RGPD): cuando reservas una sesión, clase o curso.",
            "Cumplimiento de obligaciones legales (artículo 6.1.c del RGPD): conservación de datos con fines fiscales y contables cuando hay una relación de servicio.",
          ],
        },
        "Puedes retirar tu consentimiento en cualquier momento, sin que eso afecte a la licitud del tratamiento anterior.",
      ],
    },
    {
      id: "conservacion",
      title: "Cuánto tiempo conservo tus datos",
      blocks: [
        "Los datos de las consultas se conservan el tiempo necesario para responderte y, si llegamos a trabajar juntas, mientras dure la relación y los plazos legales que correspondan. Los datos de la suscripción se conservan hasta que te des de baja. Después se bloquean y se eliminan cuando dejan de ser necesarios.",
      ],
    },
    {
      id: "destinatarios",
      title: "Destinatarios y encargados del tratamiento",
      blocks: [
        "No cedo tus datos a terceros salvo obligación legal. Para que la web funcione cuento con estos proveedores, que solo tratan los datos siguiendo mis instrucciones:",
        {
          list: [
            "Vercel Inc. (Estados Unidos): alojamiento de la web y, si lo aceptas, analítica anónima.",
            "Resend (Estados Unidos): envío por email de las copias del formulario y de las suscripciones.",
            "Meta Platforms (WhatsApp): cuando envías el formulario o me escribes por WhatsApp.",
          ],
        },
      ],
    },
    {
      id: "transferencias",
      title: "Transferencias internacionales",
      blocks: [
        "Algunos de estos proveedores están en Estados Unidos. Las transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. o en las cláusulas contractuales tipo aprobadas por la Comisión Europea, que ofrecen garantías adecuadas para tus datos.",
      ],
    },
    {
      id: "derechos",
      title: "Tus derechos",
      blocks: [
        "Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento.",
        `Para hacerlo, escríbeme a ${email} indicando qué derecho quieres ejercer. Si consideras que no he atendido bien tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).`,
      ],
    },
    {
      id: "menores",
      title: "Menores de edad",
      blocks: [
        "Los formularios de esta web están pensados para personas mayores de 14 años. Si eres menor, necesitas el consentimiento de tu madre, padre o tutor legal para enviarme tus datos.",
      ],
    },
    {
      id: "seguridad",
      title: "Seguridad",
      blocks: [
        "Aplico medidas técnicas y organizativas razonables para proteger tus datos frente a pérdidas, accesos no autorizados o usos indebidos. La web se sirve siempre mediante conexión cifrada.",
      ],
    },
    {
      id: "cambios",
      title: "Cambios en esta política",
      blocks: [
        "Puedo actualizar esta política para adaptarla a cambios legales o del servicio. Cualquier cambio relevante se publicará en esta misma página.",
      ],
    },
  ],
};

export const politicaCookies: LegalDocument = {
  slug: "politica-de-cookies",
  eyebrow: "Legal",
  title: "Política de cookies",
  intro: "Qué guarda esta web en tu navegador, para qué y cómo puedes cambiar tu elección.",
  metaTitle: "Política de cookies | Despierta con Tati",
  metaDescription:
    "Política de cookies de despiertacontati.com: qué tecnologías usa la web, para qué sirven y cómo aceptar, rechazar o configurar tus preferencias.",
  sections: [
    {
      id: "que-son",
      title: "Qué son las cookies",
      blocks: [
        "Las cookies y tecnologías similares, como el almacenamiento local del navegador, son pequeños archivos o datos que una web guarda en tu dispositivo para recordar información sobre tu visita.",
      ],
    },
    {
      id: "cuales",
      title: "Qué uso en esta web",
      blocks: [
        "Esta web no usa cookies publicitarias ni de seguimiento. Solo guarda tu elección sobre cookies y, si lo aceptas, activa una analítica anónima que no instala cookies.",
        { cookiesTable: true },
      ],
    },
    {
      id: "gestionar",
      title: "Cómo aceptar, rechazar o cambiar tu elección",
      blocks: [
        "La primera vez que entras te pregunto qué prefieres. Puedes aceptar, rechazar o configurar por categorías. Las herramientas opcionales no se cargan hasta que das tu consentimiento.",
        { cookieSettings: "Cambiar mi elección" },
        "También puedes borrar o bloquear estos datos desde la configuración de tu navegador. Si lo haces, la web volverá a preguntarte en tu próxima visita.",
      ],
    },
    {
      id: "terceros",
      title: "Servicios de terceros",
      blocks: [
        "Al pulsar los enlaces a WhatsApp o Instagram sales de esta web y esos servicios aplican sus propias políticas de cookies.",
      ],
    },
    {
      id: "cambios",
      title: "Cambios en esta política",
      blocks: [
        "Si en el futuro incorporo nuevas herramientas, actualizaré esta política y volveré a pedirte tu consentimiento antes de activarlas.",
      ],
    },
  ],
};
