import { site } from "./site";
import { categorias, productos } from "./tienda";

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
            `Domicilio: ${site.legal.address}, España`,
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
        "Esta web da a conocer los servicios de terapia holística de Despierta con Tati: Reiki y terapias energéticas, limpieza energética de casas y espacios, meditación, tarot y autoconocimiento, en Valencia y online. También ofrece una tienda de meditaciones, lecturas y sesiones con compra por WhatsApp, una guía gratuita y el contacto para reservar o pedir información.",
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
        "Las fotografías de Tati son propias. El resto proceden de bancos de imágenes con licencia de uso libre y se utilizan con fines ilustrativos.",
        "Los audios, las lecturas, los vídeos y los PDF que se venden o se regalan en esta web también están protegidos y son solo para uso personal, como se explica en las condiciones de compra.",
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
    "Cómo trata Despierta con Tati tus datos personales: contacto, guía gratuita y lista de correo, pedidos por WhatsApp, hosting y analítica, conforme al RGPD y la LOPDGDD.",
  sections: [
    {
      id: "responsable",
      title: "Responsable del tratamiento",
      blocks: [
        {
          list: [
            `Responsable: ${holder}`,
            ...nifLine,
            `Domicilio: ${site.legal.address}, España`,
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
        "Guía gratuita y lista de correo. Trato tu nombre y tu email para enviarte la guía Tu primera pausa. Si marcas la casilla de novedades, también para enviarte por email novedades, meditaciones y clases. Puedes darte de baja cuando quieras desde el enlace de cada email o escribiéndome.",
        "Pedidos de la tienda. Cuando compras por WhatsApp trato tu nombre, tu número, los datos del pedido y el justificante de pago para gestionar la compra, enviarte el producto y cumplir con las obligaciones fiscales. En las lecturas de autoconocimiento y en la Lectura del Cumpleaños también tu fecha de nacimiento, que solo uso para hacer tu lectura.",
        "No te pido datos de salud. Si decides contarme algo así en un mensaje, lo uso solo para atender tu consulta.",
        "WhatsApp. Si me escribes por WhatsApp, trataré tu número, tu nombre de perfil y lo que me cuentes para atender tu consulta. WhatsApp es un servicio de Meta Platforms y se rige también por sus propias condiciones y política de privacidad.",
        "Navegación y analítica. Si das tu consentimiento, uso Vercel Web Analytics y Speed Insights para conocer de forma agregada y anónima cuántas visitas recibe la web, cómo funciona y qué productos de la tienda interesan más. Estas herramientas no instalan cookies ni permiten identificarte.",
        "Publicaciones de Instagram. Si aceptas las cookies de marketing, el tablón muestra publicaciones de Instagram, y Meta puede tratar datos de tu navegación según su propia política.",
      ],
    },
    {
      id: "legitimacion",
      title: "Base legal",
      blocks: [
        {
          list: [
            "Consentimiento (artículo 6.1.a del RGPD): al enviar el formulario, descargar la guía, aceptar las novedades o aceptar la analítica y las cookies de marketing.",
            "Aplicación de medidas precontractuales y ejecución de un contrato (artículo 6.1.b del RGPD): cuando haces un pedido en la tienda o reservas una sesión, clase o curso.",
            "Cumplimiento de obligaciones legales (artículo 6.1.c del RGPD): conservación de los datos de los pedidos con fines fiscales y contables.",
          ],
        },
        "Puedes retirar tu consentimiento en cualquier momento, sin que eso afecte a la licitud del tratamiento anterior.",
      ],
    },
    {
      id: "conservacion",
      title: "Cuánto tiempo conservo tus datos",
      blocks: [
        "Los datos de las consultas se conservan el tiempo necesario para responderte y, si llegamos a trabajar juntas, mientras dure la relación.",
        "Los datos de la guía y de la lista de correo se conservan hasta que te des de baja o me pidas que los borre.",
        "Los datos de los pedidos se conservan durante los plazos que marca la normativa fiscal y mercantil. Después se bloquean y se eliminan cuando dejan de ser necesarios.",
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
            "Resend (Estados Unidos): envío de la guía, de los avisos del formulario y gestión de la lista de correo.",
            "Meta Platforms (WhatsApp e Instagram): cuando me escribes o haces un pedido por WhatsApp y, si lo aceptas, al ver publicaciones de Instagram en el tablón.",
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
        "Esta web no usa cookies publicitarias propias. Guarda tu elección sobre cookies y, solo si lo aceptas, activa una analítica anónima que no instala cookies y muestra publicaciones de Instagram, que sí pueden instalar cookies de Meta.",
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
        "Instagram (Meta Platforms Ireland Ltd.): si aceptas las cookies de marketing, el tablón carga publicaciones de Instagram integradas, que pueden instalar cookies de Meta. Si no las aceptas, solo verás un enlace para abrirlas en Instagram.",
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

function precioLinea(precio: number | null, habitual?: number) {
  if (precio === null) return "precio a consultar";
  const format = (value: number) => `${Number.isInteger(value) ? value : value.toFixed(2).replace(".", ",")} €`;
  return habitual ? `${format(precio)} (precio habitual ${format(habitual)})` : format(precio);
}

const catalogo = categorias.map(
  (categoria) =>
    `${categoria.nav}: ${productos
      .filter((producto) => producto.categoria === categoria.id)
      .map((producto) => `${producto.nombre}, ${precioLinea(producto.precio, producto.precioHabitual)}${producto.estado === "proximamente" ? " (próximamente)" : ""}`)
      .join("; ")}.`,
);

export const condicionesCompra: LegalDocument = {
  slug: "condiciones-de-compra",
  eyebrow: "Legal",
  title: "Condiciones de compra",
  intro: "Cómo funciona la compra en la tienda: qué compras, cómo pagas, cuándo lo recibes y cuáles son tus derechos.",
  metaTitle: "Condiciones de compra | Despierta con Tati",
  metaDescription:
    "Condiciones de compra de la tienda de Despierta con Tati: productos, precios, pago por WhatsApp, entrega, licencia de uso y derecho de desistimiento.",
  sections: [
    {
      id: "vendedora",
      title: "Quién vende",
      blocks: [
        {
          list: [
            `Titular: ${holder}`,
            ...nifLine,
            `Nombre comercial: ${site.name}`,
            `Domicilio: ${site.legal.address}, España`,
            `Email: ${email}`,
            `Teléfono y WhatsApp: ${phone}`,
            `Web: ${site.url.replace("https://", "")}`,
          ],
        },
      ],
    },
    {
      id: "productos",
      title: "Qué puedes comprar",
      blocks: [
        "En la tienda hay meditaciones guiadas en MP3, lecturas en diferido de tarot y de autoconocimiento, que se entregan en vídeo y PDF, y sesiones de tarot en directo, online o presenciales en Valencia. Cada ficha explica qué incluye el producto, su formato y cómo se entrega.",
        "Los precios publicados son finales e incluyen los impuestos aplicables, si los hay. No hay gastos de envío. Los productos marcados como próximamente todavía no se pueden comprar.",
        { list: catalogo },
      ],
    },
    {
      id: "compra",
      title: "Cómo se compra",
      blocks: [
        {
          list: [
            "Eliges el producto en su ficha y aceptas estas condiciones. En los productos digitales, además, pides expresamente que el suministro empiece antes de que termine el plazo de desistimiento.",
            "Pulsas «Comprar por WhatsApp» y se abre WhatsApp con tu pedido escrito. Lo envías tú.",
            "Te respondo por WhatsApp para confirmar el pedido, el precio y el plazo orientativo de entrega, y te facilito los datos de pago.",
            "Cuando confirmo el pago, te envío la confirmación del pedido y el producto.",
          ],
        },
      ],
    },
    {
      id: "pago",
      title: "Forma de pago",
      blocks: [
        "El medio de pago y los datos para pagar te los facilito de forma privada por WhatsApp al confirmar el pedido. Nunca publico datos bancarios en la web.",
      ],
    },
    {
      id: "entrega",
      title: "Entrega y plazos",
      blocks: [
        {
          list: [
            "Meditaciones: archivos MP3 por enlace privado de descarga, tras confirmar el pago.",
            "Lecturas en diferido: vídeo y PDF por WhatsApp, tras confirmar el pago.",
            "Sesiones en directo: online o presencial en Valencia, en la fecha y la hora que acordemos por WhatsApp.",
          ],
        },
        "Los enlaces de descarga son privados y solo los recibe la persona que hace el pedido, junto con las instrucciones para descargar y guardar los archivos.",
        "Antes de que pagues te indico el plazo orientativo de entrega de tu pedido. Si por cualquier motivo no pudiera cumplirlo, te avisaré y podrás elegir entre esperar o recuperar tu dinero.",
      ],
    },
    {
      id: "requisitos",
      title: "Requisitos técnicos",
      blocks: [
        {
          list: [
            "Meditaciones: un dispositivo con reproductor de audio, espacio para guardar los archivos y conexión a internet para descargarlos.",
            "Lecturas: WhatsApp y un dispositivo que pueda reproducir vídeo y abrir PDF.",
            "Sesiones online: conexión a internet y un dispositivo con cámara y micrófono.",
          ],
        },
      ],
    },
    {
      id: "incidencias",
      title: "Incidencias con archivos o enlaces",
      blocks: [
        `Si un enlace no funciona, un archivo no se descarga o no se abre, escríbeme a ${email} o por WhatsApp al ${phone} y te lo vuelvo a enviar o lo solucionamos.`,
      ],
    },
    {
      id: "licencia",
      title: "Licencia de uso personal",
      blocks: [
        "Los audios, las lecturas, los vídeos y los PDF son para tu uso personal y privado. No está permitido redistribuirlos, revenderlos, compartirlos públicamente ni publicarlos, ni en todo ni en parte, sin autorización por escrito.",
      ],
    },
    {
      id: "desistimiento",
      title: "Derecho de desistimiento",
      blocks: [
        "Como persona consumidora, tienes 14 días naturales desde la compra para desistir sin dar explicaciones. Para hacerlo, basta con que me lo comuniques por email o por WhatsApp de forma clara, por ejemplo: «Comunico que desisto de mi compra de [producto], pedida el [fecha]», con tu nombre.",
        "Te devolveré el importe en un plazo máximo de 14 días naturales desde que me lo comuniques, por el mismo medio de pago que usaste, salvo que acordemos otro.",
        "Excepción en el contenido digital: en las meditaciones y en las lecturas, al comprar pides expresamente que el suministro empiece antes de que termine el plazo de desistimiento y reconoces que, al empezar, pierdes ese derecho. Por eso, una vez enviado el enlace o la lectura, no es posible desistir.",
        "Sesiones en directo: puedes desistir dentro de los 14 días siguientes a la compra mientras la sesión no se haya celebrado. Si me pides que la sesión se celebre antes de que termine ese plazo, perderás el derecho de desistimiento una vez celebrada.",
      ],
    },
    {
      id: "confirmacion",
      title: "Confirmación del pedido",
      blocks: [
        "Cuando confirmo el pago te envío por WhatsApp o por email, a tu elección, la confirmación del pedido con el producto, el precio y la forma de entrega, para que la guardes.",
      ],
    },
    {
      id: "bienestar",
      title: "Aviso de bienestar",
      blocks: [
        "Las meditaciones, las lecturas y las sesiones son prácticas de bienestar y autoconocimiento. Son complementarias y no sustituyen la atención médica ni psicológica. Si estás en tratamiento, sigue con él.",
      ],
    },
    {
      id: "ley",
      title: "Legislación aplicable",
      blocks: [
        "Estas condiciones se rigen por la legislación española, en particular por la normativa de defensa de las personas consumidoras. Para cualquier controversia, serán competentes los juzgados y tribunales del domicilio de la persona consumidora.",
      ],
    },
  ],
};
