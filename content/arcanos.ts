export type Arcano = {
  numero: number;
  nombre: string;
  clave: string;
  luz: string;
  sombra: string;
  talento: string;
  proposito: string;
  amor: string;
  dinero: string;
};

export const arcanos: Arcano[] = [
  {
    numero: 1,
    nombre: "El Mago",
    clave: "La energía que empieza",
    luz: "Tienes la chispa de quien empieza. Cuando una idea te entusiasma, encuentras la manera de ponerla en marcha y de contagiar a los demás. Aprendes rápido, te expresas con facilidad y tienes recursos para casi todo. Tu reto es elegir: cuando pones tu energía en un solo camino y lo sostienes, todo lo que tocas empieza a crecer.",
    sombra:
      "Cuando se desequilibra, esta energía se dispersa: proyectos a medias, demasiados frentes abiertos y la tentación de usar la palabra para convencer en lugar de para compartir.",
    talento: "Poner las cosas en marcha. Comunicar, vender una idea, aprender algo nuevo y convertirlo en algo concreto.",
    proposito: "Usar tu capacidad de crear con intención, terminando lo que empiezas y poniéndola al servicio de algo que te importa.",
    amor: "En pareja, esta energía trae movimiento, conversación y ganas de hacer cosas juntos. Pide novedad y proyectos compartidos para no caer en la rutina.",
    dinero: "En lo material, esta energía se activa con la iniciativa propia: proyectos, comunicación y la capacidad de vender lo que sabes hacer.",
  },
  {
    numero: 2,
    nombre: "La Sacerdotisa",
    clave: "La energía que intuye",
    luz: "Percibes lo que no se dice. Tienes una intuición muy fina y una vida interior rica, y muchas veces sabes las cosas antes de poder explicarlas. Te nutres del silencio, del aprendizaje y de tus propios tiempos. Cuando confías en esa voz interior sin dudar de ella, tus decisiones llegan con una claridad sorprendente.",
    sombra:
      "Cuando se desequilibra, esta energía se cierra: calla cuando debería hablar, desconfía, se aísla o se queda en la teoría sin llegar a actuar.",
    talento: "La intuición. Leer entre líneas, escuchar de verdad y acompañar a otras personas a encontrar sus propias respuestas.",
    proposito: "Confiar en lo que sientes y compartir lo que sabes, en lugar de guardarlo solo para ti.",
    amor: "En pareja, esta energía crea una complicidad profunda y conversaciones sin máscaras. Necesita espacio, respeto por los silencios y mucha confianza para abrirse.",
    dinero: "En lo material, esta energía fluye a través del conocimiento: estudiar, enseñar, asesorar y confiar en la intuición a la hora de decidir.",
  },
  {
    numero: 3,
    nombre: "La Emperatriz",
    clave: "La energía que crea",
    luz: "Eres fuente de vida y de belleza. Sabes cuidar, hacer crecer lo que tocas y crear ambientes donde los demás se sienten a gusto. Tienes sensibilidad, creatividad y una conexión especial con el disfrute y con la naturaleza. Cuando te permites recibir tanto como das, tu energía florece y se nota en todo lo que haces.",
    sombra:
      "Cuando se desequilibra, esta energía se olvida de sí: se vuelca en los demás, busca la seguridad en lo que posee o intenta controlar lo que cuida.",
    talento: "Crear y cuidar. Hacer bonito lo que tocas, nutrir proyectos y personas, y convertir una idea en algo que crece.",
    proposito: "Crear desde el disfrute y no desde la obligación, cuidando de ti con la misma ternura con la que cuidas de los demás.",
    amor: "En pareja, esta energía trae ternura, sensualidad y ganas de construir un hogar bonito. Pide cuidado mutuo y que nadie se pierda en el papel de cuidar.",
    dinero: "En lo material, esta energía se abre con la creatividad y el cuidado: decorar, crear con las manos, embellecer y hacer crecer proyectos.",
  },
  {
    numero: 4,
    nombre: "El Emperador",
    clave: "La energía que ordena",
    luz: "Tienes la fuerza de quien construye. Sabes organizar, tomar decisiones y sostener a otras personas cuando hace falta. Te mueves bien con objetivos claros y te gusta ver resultados concretos. Cuando pones tu liderazgo al servicio de lo que de verdad te importa, te conviertes en un pilar firme para ti y para tu entorno.",
    sombra:
      "Cuando se desequilibra, esta energía se vuelve rígida: necesidad de controlarlo todo, dificultad para pedir ayuda y miedo a mostrarse vulnerable.",
    talento: "Estructurar. Liderar, organizar equipos y convertir el caos en un plan que funciona.",
    proposito: "Liderar con el corazón, poniendo límites sanos sin perder la flexibilidad ni la ternura.",
    amor: "En pareja, esta energía aporta estabilidad, compromiso y proyectos a largo plazo. Pide compartir las decisiones y dejar espacio a la ternura además del deber.",
    dinero: "En lo material, esta energía funciona con estructura: planificar, liderar, emprender con orden y asumir responsabilidades.",
  },
  {
    numero: 5,
    nombre: "El Hierofante",
    clave: "La energía que enseña",
    luz: "Tienes alma de maestro o maestra. Te importan los valores, el sentido de las cosas y transmitir lo que has aprendido. Las personas confían en tu criterio y acuden a ti en busca de consejo. Cuando compartes tu sabiduría desde la humildad y dejas espacio a otras verdades, tu palabra se convierte en una guía.",
    sombra:
      "Cuando se desequilibra, esta energía se vuelve rígida: juzga, impone sus normas, se aferra a la tradición o se cierra a otras formas de ver la vida.",
    talento: "Enseñar. Explicar, guiar y transmitir conocimientos de una manera que los demás entienden y recuerdan.",
    proposito: "Compartir lo que sabes con apertura, respetando que cada persona tiene su propio camino.",
    amor: "En pareja, esta energía busca valores comunes, lealtad y una relación con sentido. Pide escucharse sin dar lecciones y respetar las diferencias.",
    dinero: "En lo material, esta energía se activa con el conocimiento compartido: enseñar, formar, asesorar o trabajar dentro de estructuras sólidas.",
  },
  {
    numero: 6,
    nombre: "Los Enamorados",
    clave: "La energía que elige",
    luz: "Vives desde el corazón. Para ti las relaciones, la belleza y la armonía son esenciales, y tienes un don especial para conectar con las personas. Tu vida está llena de elecciones importantes. Cuando eliges desde lo que sientes de verdad, y no desde lo que esperan de ti, todo empieza a encajar.",
    sombra:
      "Cuando se desequilibra, esta energía duda: indecisión, dependencia emocional, miedo a elegir y la tendencia a buscar fuera la aprobación que no se da dentro.",
    talento: "Conectar. Crear vínculos, armonizar ambientes y ver la belleza que hay en las personas.",
    proposito: "Elegir desde el amor propio, asumiendo tus decisiones con el corazón y la cabeza a la vez.",
    amor: "En pareja, esta energía trae romanticismo, atracción y ganas de compartir. Pide elegirse cada día con libertad y no desde la necesidad.",
    dinero: "En lo material, esta energía fluye con las personas y la belleza: trabajos de cara al público, estética y proyectos que enamoran.",
  },
  {
    numero: 7,
    nombre: "El Carro",
    clave: "La energía que avanza",
    luz: "Naciste para avanzar. Tienes determinación, ganas de moverte y la capacidad de ir a por lo que quieres sin quedarte esperando. Los viajes, los retos y los cambios te activan. Cuando sabes hacia dónde vas y llevas las riendas de tu vida, nada te detiene y contagias tu impulso a los demás.",
    sombra:
      "Cuando se desequilibra, esta energía se acelera demasiado: impaciencia, competitividad, querer ganar a toda costa o huir hacia delante sin mirar lo que se deja atrás.",
    talento: "La acción. Ponerte objetivos, superar obstáculos y llevar un proyecto de la idea a la meta.",
    proposito: "Dirigir tu fuerza con propósito, sabiendo hacia dónde vas y por qué.",
    amor: "En pareja, esta energía trae aventura, viajes y metas compartidas. Pide avanzar en la misma dirección y respetar el ritmo de las dos personas.",
    dinero: "En lo material, esta energía se activa con el movimiento: viajes, ventas, deporte, transporte o cualquier proyecto que te haga avanzar.",
  },
  {
    numero: 8,
    nombre: "La Justicia",
    clave: "La energía que equilibra",
    luz: "Tienes un sentido muy claro de lo que es justo. Eres una persona honesta, analítica y coherente, y te cuesta tolerar las mentiras o el desorden. Sabes ver las situaciones con objetividad. Cuando aplicas esa claridad también contigo, con amabilidad, tus decisiones ponen orden en toda tu vida.",
    sombra:
      "Cuando se desequilibra, esta energía se endurece: autoexigencia, juicio hacia fuera o hacia dentro, rigidez con las normas y dificultad para perdonar.",
    talento: "La claridad. Analizar, poner orden, mediar en conflictos y tomar decisiones justas.",
    proposito: "Actuar con coherencia y equilibrio, haciéndote responsable de tus elecciones sin castigarte por ellas.",
    amor: "En pareja, esta energía pide honestidad, acuerdos claros y equilibrio entre lo que se da y lo que se recibe. Sin juicios, la relación se vuelve muy sólida.",
    dinero: "En lo material, esta energía funciona con orden y legalidad: contratos claros, gestión, administración o cualquier trabajo que pida precisión.",
  },
  {
    numero: 9,
    nombre: "El Ermitaño",
    clave: "La energía que busca",
    luz: "Tienes una mirada profunda. Necesitas entender el porqué de las cosas y disfrutas de tus momentos a solas, porque es ahí donde encuentras tus respuestas. Tu sabiduría nace de la experiencia. Cuando compartes esa luz interior con los demás, te conviertes en guía para quienes buscan su camino.",
    sombra:
      "Cuando se desequilibra, esta energía se encierra: aislamiento, desconfianza, melancolía o la sensación de que nadie la entiende.",
    talento: "Profundizar. Investigar, estudiar a fondo y ofrecer una mirada sabia y serena.",
    proposito: "Compartir tu sabiduría sin aislarte, encontrando el equilibrio entre tu mundo interior y los demás.",
    amor: "En pareja, esta energía busca profundidad, calma y conversaciones con sentido. Pide respetar los espacios personales sin que la distancia se convierta en un muro.",
    dinero: "En lo material, esta energía se activa con el conocimiento especializado: investigar, analizar, escribir, enseñar o trabajar con calma y sin prisas.",
  },
  {
    numero: 10,
    nombre: "La Rueda de la Fortuna",
    clave: "La energía que fluye",
    luz: "Tienes una conexión especial con el flujo de la vida. Cuando confías, las cosas llegan en el momento justo y las oportunidades aparecen casi por sorpresa. Eres una persona optimista, adaptable y con buena estrella. Cuando sueltas el control y te dejas llevar por la corriente, tu vida se llena de sincronías.",
    sombra:
      "Cuando se desequilibra, esta energía se vuelve pasiva: fatalismo, la sensación de que todo depende de la suerte, resistencia a los cambios y dejarse llevar sin elegir.",
    talento: "Fluir. Adaptarte a los cambios, aprovechar las oportunidades y ver el lado bueno de lo que pasa.",
    proposito: "Confiar en los ciclos de la vida, aceptando lo que cambia y aprovechando cada nueva vuelta.",
    amor: "En pareja, esta energía trae encuentros que parecen cosa del destino y una relación viva, con sus ciclos. Pide confiar en el proceso y no aferrarse a lo que ya cambió.",
    dinero: "En lo material, esta energía funciona con la confianza y el movimiento: oportunidades, viajes, negocios y la capacidad de estar en el lugar adecuado.",
  },
  {
    numero: 11,
    nombre: "La Fuerza",
    clave: "La energía que sostiene",
    luz: "Tienes una fuerza interior enorme y mucha energía vital. Eres capaz de enfrentarte a retos que otras personas evitarían y de sostener situaciones difíciles con valentía. Cuando unes esa fuerza con la suavidad y la usas desde el amor, y no desde la lucha, todo lo que te propones se vuelve posible.",
    sombra:
      "Cuando se desequilibra, esta energía se convierte en lucha: agotamiento por querer poder con todo, enfado, impulsividad o dificultad para pedir ayuda.",
    talento: "La determinación. Trabajar con constancia, superar obstáculos y dar fuerza a quien la necesita.",
    proposito: "Usar tu fuerza con suavidad, guiando tus impulsos desde el amor y no desde la lucha.",
    amor: "En pareja, esta energía aporta pasión, intensidad y la capacidad de superar juntos las dificultades. Pide suavidad para que la fuerza no se convierta en un pulso.",
    dinero: "En lo material, esta energía se activa con el esfuerzo y la constancia: trabajos que piden mucha energía, liderazgo o trabajo con el cuerpo.",
  },
  {
    numero: 12,
    nombre: "El Colgado",
    clave: "La energía que ve distinto",
    luz: "Ves el mundo desde otro ángulo. Tienes una gran sensibilidad, empatía y una manera de pensar poco convencional, y a menudo intuyes lo que otras personas no ven. Te mueve ayudar. Cuando dejas de sacrificarte y aprendes a darte tu sitio, tu forma única de ver la vida se convierte en un regalo para los demás.",
    sombra:
      "Cuando se desequilibra, esta energía se estanca: victimismo, sacrificio excesivo, la sensación de vivir en pausa y dificultad para soltar lo que ya no sirve.",
    talento: "La empatía. Ponerte en el lugar de otras personas, ver soluciones creativas y acompañar desde la comprensión.",
    proposito: "Servir sin sacrificarte, soltando lo que te ata y mirando tu vida con nuevos ojos.",
    amor: "En pareja, esta energía trae entrega y comprensión profunda. Pide que el amor no se viva como un sacrificio y que nadie renuncie a sí en la relación.",
    dinero: "En lo material, esta energía fluye al ayudar a otras personas: terapias, arte, voluntariado o profesiones creativas y fuera de lo común.",
  },
  {
    numero: 13,
    nombre: "La Transformación",
    clave: "La energía que renueva",
    luz: "Tienes la capacidad de renacer. Sabes cerrar etapas, soltar lo que ya no te sirve y empezar de nuevo con más fuerza. Los cambios profundos forman parte de tu camino y te hacen crecer. Cuando dejas de temer los finales y los ves como puertas, eres capaz de transformar cualquier situación.",
    sombra:
      "Cuando se desequilibra, esta energía se resiste al cambio: se aferra a lo que ya terminó, vive con miedo a perder o cae en el pesimismo.",
    talento: "Transformar. Ayudar a cerrar ciclos, reinventarte y ver la oportunidad que hay detrás de cada final.",
    proposito: "Soltar con confianza, aceptando que cada final abre espacio para algo nuevo.",
    amor: "En pareja, esta energía trae relaciones intensas que transforman a las dos personas. Pide renovarse juntos y soltar viejos patrones en lugar de repetirlos.",
    dinero: "En lo material, esta energía se activa con el cambio: reinventarse, transformar negocios o acompañar procesos de cambio en otras personas.",
  },
  {
    numero: 14,
    nombre: "La Templanza",
    clave: "La energía que armoniza",
    luz: "Tienes el don de la calma. Sabes encontrar el punto medio, unir lo que parece opuesto y transmitir serenidad a quienes te rodean. Tienes paciencia, sensibilidad y una conexión natural con el cuidado. Cuando respetas tus propios ritmos y te cuidas como cuidas a los demás, tu presencia se convierte en un refugio.",
    sombra:
      "Cuando se desequilibra, esta energía pierde la medida: extremos, impaciencia o la tendencia a evitar los conflictos a costa de lo que se necesita.",
    talento: "Armonizar. Mediar, calmar, cuidar y encontrar soluciones equilibradas.",
    proposito: "Vivir con equilibrio y medida, encontrando la calma dentro de ti antes que fuera.",
    amor: "En pareja, esta energía trae calma, paciencia y una relación tranquila y amable. Pide equilibrio y que los ritmos de las dos personas se respeten.",
    dinero: "En lo material, esta energía fluye en todo lo que cuida y equilibra: bienestar, mediación, cocina, arte o trabajos que se hacen con calma.",
  },
  {
    numero: 15,
    nombre: "El Diablo",
    clave: "La energía que atrae",
    luz: "Tienes un magnetismo muy especial. Eres una persona carismática, con una energía potente, mucha capacidad para atraer lo que deseas y un gran sentido del placer y del disfrute. Sabes moverte en el mundo material. Cuando usas ese poder con conciencia y libertad, consigues lo que te propones.",
    sombra:
      "Cuando se desequilibra, esta energía se engancha: apegos, excesos, dependencias, manipulación o la sensación de no poder soltar algo o a alguien.",
    talento: "El magnetismo. Seducir con tus ideas, negociar, vender y mover recursos.",
    proposito: "Usar tu poder con conciencia, eligiendo con libertad en lugar de dejarte llevar por los apegos.",
    amor: "En pareja, esta energía trae pasión, atracción y mucha intensidad. Pide libertad y respeto para que el deseo no se convierta en posesión.",
    dinero: "En lo material, esta energía tiene mucha fuerza: negocios, ventas, finanzas, marketing y cualquier campo donde haya que atraer y negociar.",
  },
  {
    numero: 16,
    nombre: "La Torre",
    clave: "La energía que libera",
    luz: "Eres una persona que construye y que se atreve a romper lo que no funciona. Tienes energía, valentía y la capacidad de levantar proyectos sólidos. La vida a veces te sacude para que te liberes de lo que te limita. Cuando aceptas esos cambios como un nuevo comienzo, sales siempre con más fuerza.",
    sombra:
      "Cuando se desequilibra, esta energía se tensa: orgullo, rigidez, miedo a que todo se derrumbe o la tendencia a romperlo todo de golpe.",
    talento: "Construir. Levantar proyectos desde cero, reconstruir después de una crisis y liderar los cambios necesarios.",
    proposito: "Soltar el orgullo y las viejas estructuras, construyendo tu vida sobre bases auténticas.",
    amor: "En pareja, esta energía trae relaciones que sacuden y hacen crecer. Pide humildad, comunicación sincera y construir juntos sobre bases reales.",
    dinero: "En lo material, esta energía se activa con la construcción: inmuebles, grandes proyectos, empresas y la capacidad de reinventarse tras una crisis.",
  },
  {
    numero: 17,
    nombre: "La Estrella",
    clave: "La energía que inspira",
    luz: "Tienes luz propia. Eres una persona creativa, con talento y con una sensibilidad especial para la belleza. Inspiras a los demás solo con ser como eres. Tienes fe en el futuro y la capacidad de hacer realidad tus sueños. Cuando te permites brillar sin miedo a destacar, tu talento se abre camino.",
    sombra:
      "Cuando se desequilibra, esta energía duda de su valor: busca reconocimiento fuera, se compara, se apaga para no destacar o vive en los sueños sin aterrizarlos.",
    talento: "Inspirar. Crear, comunicar con belleza y despertar la esperanza en otras personas.",
    proposito: "Brillar con autenticidad, compartiendo tu talento y confiando en tu propio valor.",
    amor: "En pareja, esta energía trae admiración mutua, ilusión y sueños compartidos. Pide que las dos personas brillen sin competir.",
    dinero: "En lo material, esta energía fluye a través de la creatividad y la visibilidad: arte, diseño, redes, imagen o proyectos que inspiran.",
  },
  {
    numero: 18,
    nombre: "La Luna",
    clave: "La energía que siente",
    luz: "Tienes una sensibilidad y una imaginación muy profundas. Percibes las emociones de los demás, captas lo que se esconde detrás de las apariencias y tienes un mundo interior lleno de matices. Cuando atraviesas tus miedos y confías en lo que sientes, tu sensibilidad se convierte en tu mayor fuerza.",
    sombra:
      "Cuando se desequilibra, esta energía se nubla: miedos, dudas, confusión, ilusiones que no se sostienen y la tendencia a esconder lo que se siente.",
    talento: "La sensibilidad. Imaginar, crear desde la emoción, intuir y conectar con lo que no se ve.",
    proposito: "Atravesar tus miedos, distinguiendo la intuición de la ilusión y confiando en lo que sientes.",
    amor: "En pareja, esta energía trae una conexión emocional muy profunda y mucha imaginación. Pide claridad, sinceridad y no dejar que las dudas crezcan en silencio.",
    dinero: "En lo material, esta energía fluye con la creatividad y la intuición: arte, imagen, fotografía o trabajos donde la sensibilidad es un valor.",
  },
  {
    numero: 19,
    nombre: "El Sol",
    clave: "La energía que brilla",
    luz: "Irradias calidez y alegría. Eres una persona generosa, optimista y con una energía que da vida a quienes te rodean. Te gusta celebrar y ser protagonista de tu vida, y transmites confianza. Cuando brillas desde la autenticidad, el reconocimiento llega con mucha más facilidad.",
    sombra:
      "Cuando se desequilibra, esta energía se quema: orgullo, necesidad de ser el centro, agotamiento por hacer demasiado o dificultad para reconocer los propios límites.",
    talento: "La alegría. Liderar con calidez, motivar, celebrar y dar confianza a los demás.",
    proposito: "Brillar con generosidad, compartiendo tu luz sin necesidad de ser el centro.",
    amor: "En pareja, esta energía trae alegría, cariño y ganas de disfrutar juntos. Pide celebrar los logros de las dos personas y cuidar la llama cada día.",
    dinero: "En lo material, esta energía funciona con la visibilidad y el liderazgo: proyectos propios, eventos o cualquier lugar donde puedas brillar.",
  },
  {
    numero: 20,
    nombre: "El Juicio",
    clave: "La energía que despierta",
    luz: "Tienes una conexión muy fuerte con tus raíces y con tu familia. Eres una persona con criterio, capaz de ver el sentido profundo de lo que ocurre y de ayudar a otras personas a despertar. Tu vida está llena de llamadas. Cuando escuchas la tuya y dejas atrás los juicios, te renuevas por completo.",
    sombra:
      "Cuando se desequilibra, esta energía se carga: juicios hacia dentro o hacia fuera, pesos familiares, rencor y dificultad para perdonar y pasar página.",
    talento: "Despertar. Transmitir, orientar y ayudar a otras personas a ver su propósito.",
    proposito: "Perdonar y escuchar tu llamada, honrando tu historia familiar sin cargar con ella.",
    amor: "En pareja, esta energía trae vínculos profundos y muy ligados a la familia. Pide perdonar, renovarse y no repetir las historias heredadas.",
    dinero: "En lo material, esta energía fluye con la familia y la comunicación: negocios familiares, enseñanza, orientación o trabajos que ayudan a otras personas a despertar.",
  },
  {
    numero: 21,
    nombre: "El Mundo",
    clave: "La energía que abre",
    luz: "Tu energía es amplia y abierta. Tienes curiosidad por otras culturas, ideas y formas de vivir, y te sientes en casa en cualquier parte. Eres una persona con visión global, capaz de unir y de dar sentido al conjunto. Cuando te permites expandirte sin miedo, el mundo entero se convierte en tu sitio.",
    sombra:
      "Cuando se desequilibra, esta energía se encoge: miedo a salir de lo conocido, sensación de no encajar o dificultad para cerrar etapas y celebrar lo logrado.",
    talento: "La apertura. Conectar culturas, viajar, comunicar a gran escala y ver el panorama completo.",
    proposito: "Expandirte y cerrar ciclos con plenitud, sintiéndote en casa en tu propio mundo.",
    amor: "En pareja, esta energía trae libertad, viajes y una relación abierta al mundo. Pide espacio para crecer y proyectos que amplíen horizontes.",
    dinero: "En lo material, esta energía se activa con lo internacional: viajes, idiomas, comercio, comunicación global o trabajos sin fronteras.",
  },
  {
    numero: 22,
    nombre: "El Loco",
    clave: "La energía libre",
    luz: "Tienes un espíritu libre. Te mueven la curiosidad, la espontaneidad y las ganas de vivir experiencias nuevas, y conectas con facilidad con tu lado más juguetón. Ves la vida como una aventura. Cuando confías en tu camino aunque no sea el convencional, tu ligereza y tu creatividad abren puertas inesperadas.",
    sombra:
      "Cuando se desequilibra, esta energía huye: falta de compromiso, evitar las responsabilidades, inestabilidad y miedo a quedarse en un sitio.",
    talento: "La libertad creativa. Improvisar, ver lo que otras personas no ven y atreverte con lo nuevo.",
    proposito: "Vivir con libertad y responsabilidad a la vez, confiando en tu camino único.",
    amor: "En pareja, esta energía trae frescura, juego y aventura. Pide libertad, confianza y que el compromiso no se viva como una jaula.",
    dinero: "En lo material, esta energía fluye con la creatividad y la libertad: proyectos propios, viajes, trabajos flexibles y todo lo que se sale de lo establecido.",
  },
];

export function arcano(numero: number) {
  return arcanos[numero - 1];
}

export function teaser(text: string) {
  const index = text.indexOf(":");
  return index > 0 ? `${text.slice(0, index)}…` : text;
}
