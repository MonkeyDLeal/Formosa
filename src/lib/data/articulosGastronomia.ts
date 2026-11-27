import type { Articulo } from "#lib/types/articulo.ts";

export const articulosGastronomia: Articulo[] = [
    {
        slug: 'bubble-tea',
        numero: '01',
        serie: 'BEBIDAS DE TAIWÁN',
        categoria: 'GASTRONOMÍA',
        subcategoria: 'TÉ & CULTURA URBANA',
        titulo: 'Bubble Tea: la bebida taiwanesa que convirtió una pausa en un ritual',
        bajada: 'Entre vasos sellados, perlas de tapioca y té recién preparado, una bebida nacida en Taiwán cuenta cómo la tradición puede reinventarse sin perder su esencia.',
        tiempoLectura: '4 min de lectura',
        edicion: 'Edición Gastronomía',
        portada: '/bubble-tea.jpg',
        portadaAlt: 'Vaso de bubble tea con perlas de tapioca y una pajilla ancha.',
        portadaEtiqueta: 'EL TÉ QUE CONQUISTÓ LAS CALLES',
        portadaPie: '— El bubble tea combina infusión de té con perlas de tapioca y múltiples posibilidades de preparación.',
        introduccion: [
            'En las calles de Taiwán, los puestos de bebidas forman parte del paisaje tanto como las motocicletas, los letreros luminosos o las tiendas abiertas hasta tarde. Entre sus mostradores destaca una bebida que puede reconocerse por las perlas oscuras que descansan en el fondo del vaso: el bubble tea, también conocido como té de burbujas o té con perlas. Parece una mezcla sencilla, pero detrás de cada sorbo se esconde una historia de innovación y hábitos cotidianos.',
            'Su base suele ser una infusión de té, a menudo negro, combinada con leche o alguna alternativa, endulzante y perlas elaboradas principalmente con almidón de tapioca. Las bolitas aportan una textura elástica y suave que convierte el acto de beber en una experiencia diferente. No todas las versiones llevan leche, ni todas tienen el mismo dulzor: precisamente en esa posibilidad de personalizarlo está buena parte de su atractivo.',
        ],
        capitulo1: {
            etiqueta: 'CAPÍTULO 01',
            titulo: 'De una casa de té a un fenómeno cotidiano',
            parrafos: [
                'El té ha ocupado durante generaciones un lugar importante en la cultura taiwanesa. Sin embargo, el bubble tea representa una reinterpretación contemporánea de esa herencia. Su popularización se asocia a las tiendas de bebidas de Taiwán durante la década de 1980; distintas empresas han reclamado su creación, por lo que atribuir la receta a una sola persona sería simplificar una historia todavía debatida. Lo que sí puede afirmarse es que la mezcla de té frío, ingredientes dulces y perlas masticables encontró un público dispuesto a adoptarla.',
                'Su expansión fue impulsada por una cultura de consumo rápido, creativo y accesible. Los establecimientos comenzaron a ofrecer variedades con diferentes infusiones, frutas, intensidades de hielo y niveles de azúcar. Para el visitante, pedir una bebida puede convertirse en un pequeño descubrimiento: observar cómo se agita el té, elegir el dulzor y atravesar el sello del vaso con una pajilla ancha forma parte del ritual. El resultado es una bebida que dialoga con la tradición del té sin limitarse a reproducirla.',
            ],
        },
        galeria: [
            {
                src: '/galeria-bubble-tea-1.jpg',
                alt: 'Perlas de tapioca oscuras en el fondo de un vaso de té con leche.',
                pie: '— Las perlas de tapioca aportan la textura característica del bubble tea.',
            },
            {
                src: '/galeria-bubble-tea-2.jpg',
                alt: 'Preparación de té con leche en una tienda de bebidas de Taiwán.',
                pie: '— La preparación y las opciones de personalización son parte de la experiencia.',
            },
        ],
        cita: {
            texto: '«En Taiwán, una taza de té también puede contar una historia de cambio.»',
            firma: 'NOTAS DE CATA • DISCOVER TAIWAN',
        },
        continuacion: [
            'Una manera interesante de probarlo es comenzar por una versión clásica de té negro con leche y perlas, solicitando un nivel moderado de azúcar. Así resulta más fácil distinguir el carácter del té y la textura de la tapioca. Conviene recordar que las perlas son parte esencial de la bebida y que su consistencia cambia de una tienda a otra: algunas son más suaves, otras tienen una mordida más firme. Si prefieres algo ligero, busca las variantes frutales sin leche.',
        ],
        capitulo2: {
            etiqueta: 'CAPÍTULO 02',
            titulo: 'Cómo descubrirlo sin quedarse en la foto',
            parrafos: [
                'Una buena primera experiencia no depende de elegir el vaso más vistoso, sino de comprender sus componentes. El té puede ser negro, verde u oolong; la leche modifica la sensación en boca y el azúcar equilibra o domina el conjunto. En las cartas de muchos establecimientos podrás escoger la cantidad de hielo y dulzor. Si ya conoces el bubble tea de tu ciudad, probarlo en Taiwán permite notar la variedad de propuestas que conviven en una misma calle, desde las recetas más clásicas hasta combinaciones estacionales.',
                'Más allá de su fama internacional, la bebida refleja una faceta importante de la vida urbana taiwanesa: la capacidad de transformar una tradición en algo práctico, compartido y adaptable. Puede acompañar una tarde de paseo, una conversación entre amigos o una parada después de recorrer un mercado. Basta un vaso para entender que la gastronomía no se expresa únicamente en los platos servidos a la mesa; a veces también se encuentra en aquello que llevamos en la mano mientras seguimos caminando.',
            ],
        }, 
        
        autor: {
            nombre: 'Victor Leal',
            cargo: 'EDITOR DE CRÓNICA URBANA',
            foto: '/luffy-icon.jpg',
            biografia: 'Editor de Discover Taiwan, un proyecto dedicado a contar los sabores, paisajes y tradiciones de la isla desde una mirada cultural y accesible.',
        },
    },
    {
        slug: 'chou-dou-fu',
        numero: '02',
        serie: 'MERCADOS DE TAIWÁN',
        categoria: 'GASTRONOMÍA',
        subcategoria: 'FERMENTADOS & CALLE',
        titulo: 'Chou Dou Fu: el tofu que primero se descubre con el olfato',
        bajada: 'Intenso, crujiente y profundamente popular, el tofu fermentado de Taiwán demuestra que los sabores más memorables no siempre buscan agradar a primera vista.',
        tiempoLectura: '4 min de lectura',
        edicion: 'Edición Gastronomía',
        portada: '/chou-dou-fu.jpg',
        portadaAlt: 'Porciones de tofu fermentado frito servidas con vegetales encurtidos.',
        portadaEtiqueta: 'UN AROMA IMPOSIBLE DE IGNORAR',
        portadaPie: '— El chou dou fu suele servirse frito y acompañado de verduras encurtidas.',
        introduccion: [
            'Hay comidas que se anuncian con un letrero y otras que se hacen notar antes de que alcances a ver el puesto. El chou dou fu, conocido como tofu apestoso, pertenece a la segunda categoría. En determinados mercados nocturnos de Taiwán, su aroma penetrante cruza la calle y despierta dos reacciones igualmente sinceras: curiosidad o una retirada inmediata. Quienes deciden acercarse encuentran, sin embargo, un alimento mucho más complejo que su provocador nombre.',
            'Se trata de tofu sometido a un proceso de fermentación o maduración en salmuera, cuya formulación varía según el productor. Esa transformación desarrolla compuestos aromáticos intensos que hacen reconocible el plato. En una de sus presentaciones más conocidas se fríe hasta formar una corteza dorada, mientras el interior conserva cierta suavidad. Se acompaña con col encurtida y, en ocasiones, salsas que equilibran su carácter.',
        ],
        capitulo1: {
            etiqueta: 'CAPÍTULO 01',
            titulo: 'El lenguaje de la fermentación',
            parrafos: [
                'La fermentación es una técnica alimentaria presente en numerosas cocinas de Asia. En el caso del chou dou fu, la transformación del tofu genera un perfil aromático muy particular. Conviene evitar la idea de que una receta define a todas: el tiempo de elaboración, la salmuera y la forma de cocción pueden producir resultados distintos. Algunas versiones se sirven en cubos fritos; otras aparecen en preparaciones al vapor, estofadas o con caldos picantes.',
                'En Taiwán, esta especialidad forma parte de la experiencia de los xiaochi, pequeños bocados que se disfrutan caminando o durante una visita a los mercados. Su intensidad tiene una función casi teatral: se percibe, se comenta y después se prueba. La combinación clásica de exterior crujiente y acompañamiento encurtido resulta especialmente interesante porque reúne grasa, acidez, sal y textura. Así, un plato que al principio parece desafiante puede convertirse en una puerta de entrada a una tradición de sabores fermentados.',
            ],
        },
        galeria: [
            {
                src: '/galeria-chou-dou-fu-1.jpg',
                alt: 'Cubos de tofu fermentado crujiente recién fritos.',
                pie: '— La fritura crea una superficie dorada que contrasta con el interior del tofu.',
            },
            {
                src: '/galeria-chou-dou-fu-2.jpg',
                alt: 'Plato de tofu fermentado acompañado de col encurtida taiwanesa.',
                pie: '— La col encurtida aporta frescura y acidez al conjunto.',
            },
        ],
        cita: {
            texto: '«La curiosidad también tiene aroma, y en los mercados de Taiwán no siempre es discreto.»',
            firma: 'NOTAS DE CATA • DISCOVER TAIWAN',
        },
        continuacion: [
            'Quien quiera probar chou dou fu por primera vez puede comenzar por la versión frita. Lo ideal es observar la presentación y preguntar por la intensidad del picante antes de añadir salsa. El contraste entre el tofu caliente y la col encurtida suele ser más amable de lo que su fama sugiere. No hace falta fingir entusiasmo inmediato: descubrir una cocina también consiste en reconocer qué sabores sorprenden, cuáles nos cuestan y por qué merecen atención.',
        ],
        capitulo2: {
            etiqueta: 'CAPÍTULO 02',
            titulo: 'Más que una prueba para valientes',
            parrafos: [
                'En los mercados nocturnos, el tofu fermentado comparte espacio con bebidas frías, brochetas, fideos y postres. Se vende como un bocado cotidiano, no como una rareza inventada para turistas. Por eso conviene acercarse sin convertirlo en un espectáculo de reacción: detrás de la bandeja hay técnicas, preferencias locales y negocios que han perfeccionado sus propias preparaciones. Si visitas un puesto, observa cómo lo fríen, qué acompañamientos ofrecen y de qué manera lo comen quienes están alrededor.',
                'El chou dou fu recuerda una lección fundamental de la gastronomía: el gusto no se limita a lo familiar. A menudo, aquello que parece excesivo desde fuera adquiere sentido al comprender su contexto. Puede que termine siendo tu bocado favorito o que prefieras otras especialidades, pero difícilmente olvidarás la experiencia. Entre el aroma y la textura existe una conversación sobre costumbre, identidad y aprendizaje que vale la pena escuchar antes de emitir un juicio.',
            ],
        },
        autor: {
            nombre: 'Victor Leal',
            cargo: 'EDITOR DE CRÓNICA URBANA',
            foto: '/luffy-icon.jpg',
            biografia: 'Editor de Discover Taiwan, un proyecto dedicado a contar los sabores, paisajes y tradiciones de la isla desde una mirada cultural y accesible.',
        },
    },
    {
        slug: 'gua-bao',
        numero: '03',
        serie: 'CALLES DE TAIWÁN',
        categoria: 'GASTRONOMÍA',
        subcategoria: 'PAN AL VAPOR & TRADICIÓN',
        titulo: 'Gua Bao: un pequeño pan al vapor con toda una historia dentro',
        bajada: 'Panceta tierna, verduras encurtidas y maní molido se encuentran entre dos pliegues de masa suave: un bocado que resume el equilibrio de la comida callejera taiwanesa.',
        tiempoLectura: '4 min de lectura',
        edicion: 'Edición Gastronomía',
        portada: '/gua-bao.jpg',
        portadaAlt: 'Pan gua bao relleno de panceta de cerdo y verduras, servido abierto.',
        portadaEtiqueta: 'EL ARTE DE UN BOCADO COMPLETO',
        portadaPie: '— El gua bao reúne carne, encurtidos, hierbas y maní dentro de un pan al vapor.',
        introduccion: [
            'A primera vista, el gua bao parece un sándwich diminuto. Su aspecto sencillo puede resultar engañoso: entre dos lados de un pan blanco, esponjoso y doblado sobre sí mismo se esconde una combinación cuidadosamente equilibrada. Un relleno habitual incluye panceta de cerdo cocida lentamente, verduras encurtidas, cilantro y maní molido, a veces mezclado con azúcar. Cada ingrediente cumple un papel, y el conjunto explica por qué este bocado ocupa un lugar especial en la cocina callejera taiwanesa.',
            'El pan, preparado al vapor, no busca el crujido. Es suave y flexible para acompañar los jugos del relleno sin competir con ellos. La carne aporta profundidad; los encurtidos, acidez; el cilantro, una nota fresca; y el maní, aroma y textura. Lo interesante no es la presencia individual de cada componente, sino el modo en que se encuentran al morder. En pocos segundos se entiende que la sencillez también puede ser una forma de precisión.',
        ],
        capitulo1: {
            etiqueta: 'CAPÍTULO 01',
            titulo: 'La armonía entre lo suave y lo intenso',
            parrafos: [
                'En su versión tradicional, el gua bao se prepara con cerdo estofado hasta quedar tierno. La carne puede ofrecer una combinación de grasa y tejido magro, y suele cortarse en piezas que caben dentro del pan plegado. En lugar de una salsa que domine todo, se incorporan acompañamientos con perfiles distintos. La mostaza encurtida u otras verduras conservadas aportan contraste y ayudan a equilibrar la riqueza del cerdo.',
                'Aunque muchas versiones contemporáneas utilizan pollo, setas o rellenos de inspiración internacional, la preparación clásica sigue siendo una referencia valiosa para conocer el plato. Michelin destaca precisamente la combinación de cerdo, cilantro, encurtidos y maní como uno de sus rasgos habituales. Eso no significa que exista una única receta correcta: los puestos y restaurantes ajustan proporciones y sazones según su tradición. Lo que permanece es la idea de un pan delicado que sirve de escenario para un relleno con carácter.',
            ],
        },
        galeria: [
            {
                src: '/galeria-gua-bao-1.jpg',
                alt: 'Pan blanco plegado y cocido al vapor antes de rellenarse.',
                pie: '— La masa al vapor ofrece una textura suave y flexible.',
            },
            {
                src: '/galeria-gua-bao-2.jpg',
                alt: 'Detalle de un gua bao con cerdo estofado, cilantro y encurtidos.',
                pie: '— La mezcla de carne, vegetales y maní crea el contraste del bocado.',
            },
        ],
        cita: {
            texto: '«A veces un viaje cabe entero entre los pliegues de un pan.»',
            firma: 'NOTAS DE CATA • DISCOVER TAIWAN',
        },
        continuacion: [
            'El gua bao se disfruta mejor recién preparado, cuando el pan todavía conserva su suavidad y la carne está caliente. Conviene comerlo con calma, pero sin esperar demasiado: el contacto prolongado con el relleno puede humedecer la masa. Si es tu primera vez, prueba un bocado con todos los ingredientes antes de retirar alguno. Tal vez descubras que el elemento que parecía accesorio, como el encurtido o el maní, es precisamente el que mantiene el equilibrio.',
        ],
        capitulo2: {
            etiqueta: 'CAPÍTULO 02',
            titulo: 'Un clásico que sigue transformándose',
            parrafos: [
                'La expansión internacional del gua bao ha dado lugar a versiones creativas, pero en Taiwán resulta especialmente interesante buscar establecimientos que lo preparen dentro de su contexto cotidiano. Puede aparecer como refrigerio entre comidas o como parte de un recorrido por especialidades locales. Cada puesto plantea pequeñas decisiones: cuánto encurtido añadir, qué tan dulce será el maní, cómo se cocinará la carne. Para quien observa con atención, esas variaciones revelan la personalidad del lugar.',
                'Probar gua bao es una buena manera de comprender el lenguaje de la comida callejera: ingredientes conocidos, preparación trabajada y una presentación diseñada para comerse sin ceremonias. No necesita cubiertos ni una mesa sofisticada para ofrecer una experiencia completa. Su atractivo está en la convivencia de texturas y en esa sensación de que, durante un instante, todo funciona como debería dentro de un pan pequeño.',
            ],
        },
        autor: {
            nombre: 'Victor Leal',
            cargo: 'EDITOR DE CRÓNICA URBANA',
            foto: '/luffy-icon.jpg',
            biografia: 'Editor de Discover Taiwan, un proyecto dedicado a contar los sabores, paisajes y tradiciones de la isla desde una mirada cultural y accesible.',
        },
    },
    {
        slug: 'lu-rou-fan',
        numero: '04',
        serie: 'MESAS DE TAIWÁN',
        categoria: 'GASTRONOMÍA',
        subcategoria: 'ARROZ & ESTOFADOS',
        titulo: 'Lu Rou Fan: el plato humilde que reúne a toda una isla',
        bajada: 'Un cuenco de arroz blanco, cerdo estofado y una salsa fragante bastan para mostrar cómo la cocina cotidiana convierte ingredientes sencillos en memoria.',
        tiempoLectura: '4 min de lectura',
        edicion: 'Edición Gastronomía',
        portada: '/lu-rou-fan.jpg',
        portadaAlt: 'Cuenco de arroz blanco con cerdo estofado, cebolleta y huevo.',
        portadaEtiqueta: 'UN CUENCO QUE SABE A CASA',
        portadaPie: '— El lu rou fan combina arroz al vapor con cerdo guisado en una salsa aromática.',
        introduccion: [
            'No todos los platos emblemáticos necesitan una presentación espectacular. El lu rou fan, arroz con cerdo estofado, llega a la mesa en un cuenco de apariencia modesta. Sobre el arroz caliente descansa una preparación de cerdo cocinado lentamente con salsa de soja y aromáticos. La salsa penetra en los granos y transforma una base neutra en una comida reconfortante, de esas que se recuerdan por el sabor más que por la decoración.',
            'Es frecuente encontrarlo en restaurantes sencillos y locales especializados en comidas caseras. Dependiendo del establecimiento, el cerdo puede aparecer picado en trozos pequeños o con una textura más deshilachada; algunas versiones incorporan chalotas fritas, ajo y especias. El huevo estofado es un acompañamiento popular, aunque no obligatorio. Esa flexibilidad hace que cada cuenco se parezca a los demás sin ser idéntico.',
        ],
        capitulo1: {
            etiqueta: 'CAPÍTULO 01',
            titulo: 'El tiempo como ingrediente principal',
            parrafos: [
                'La preparación comienza con algo fundamental: una cocción que permita ablandar el cerdo y desarrollar el sabor de la salsa. En muchas recetas se combinan salsa de soja, chalotas, ajo, azúcar y especias. No se busca una carne seca ni un recubrimiento superficial, sino una mezcla untuosa que se integre con el arroz. El equilibrio entre salado, dulce y umami cambia según la mano que cocina y los ingredientes disponibles.',
                'Lu rou fan también habla de aprovechamiento y tradición doméstica. Su popularidad no proviene de una técnica inaccesible, sino de la capacidad de conseguir profundidad con productos cotidianos. Algunas historias sobre su evolución se relacionan con el uso de cortes económicos de cerdo y la adaptación de costumbres culinarias a la vida de la isla. Más que adjudicarle una única fecha de nacimiento, conviene observar cómo se ha mantenido presente en mesas familiares y comedores de barrio durante generaciones.',
            ],
        },
        galeria: [
            {
                src: '/galeria-lu-rou-fan-1.jpg',
                alt: 'Detalle de cerdo estofado cubriendo un cuenco de arroz blanco.',
                pie: '— La salsa del estofado impregna el arroz y concentra buena parte del sabor.',
            },
            {
                src: '/galeria-lu-rou-fan-2.jpg',
                alt: 'Cuenco de lu rou fan acompañado de huevo estofado y verduras.',
                pie: '— El huevo estofado y los vegetales son acompañamientos habituales, pero variables.',
            },
        ],
        cita: {
            texto: '«Hay recetas que no necesitan impresionar: les basta con hacernos volver.»',
            firma: 'NOTAS DE CATA • DISCOVER TAIWAN',
        },
        continuacion: [
            'Para descubrir el lu rou fan, empieza por probar el arroz con un poco de carne y salsa en la misma cucharada. Después presta atención a la textura: un buen estofado suele sentirse tierno y sabroso, sin que el dulzor o la sal oculten todos los matices. Si el local ofrece verduras o huevo, puedes sumarlos para conocer el conjunto de una comida cotidiana. En lugar de buscar el cuenco más grande, busca el que te permita apreciar el equilibrio.',
        ],
        capitulo2: {
            etiqueta: 'CAPÍTULO 02',
            titulo: 'La cocina cotidiana también es patrimonio',
            parrafos: [
                'En un recorrido gastronómico por Taiwán es fácil sentirse atraído por los mercados nocturnos y los alimentos que se preparan frente al público. Sin embargo, visitar un pequeño local de arroz con cerdo puede ofrecer una experiencia igual de significativa. Aquí la comida no se organiza para sorprender a un visitante: responde a una costumbre de todos los días. Esa normalidad explica buena parte de su importancia cultural.',
                'El lu rou fan demuestra que la identidad culinaria también se construye con repetición, paciencia y variaciones mínimas. Un plato de arroz puede hablar del trabajo de quien cocina, de los gustos de un barrio y de la manera en que una comunidad entiende la comida reconfortante. Pocas preparaciones revelan tanto con tan pocos ingredientes. Quizá por eso, después de probarlo, es difícil verlo solamente como arroz con carne.',
            ],
        },
        autor: {
            nombre: 'Victor Leal',
            cargo: 'EDITOR DE CRÓNICA URBANA',
            foto: '/luffy-icon.jpg',
            biografia: 'Editor de Discover Taiwan, un proyecto dedicado a contar los sabores, paisajes y tradiciones de la isla desde una mirada cultural y accesible.',
        },
    },
    {
        slug: 'niu-rou-mian',
        numero: '05',
        serie: 'CALDOS DE TAIWÁN',
        categoria: 'GASTRONOMÍA',
        subcategoria: 'FIDEOS & CALDOS',
        titulo: 'Niu Rou Mian: la sopa de ternera que cuenta historias de Taiwán',
        bajada: 'Fideos de trigo, carne tierna y un caldo de cocción lenta se encuentran en uno de los platos más representativos de la cocina taiwanesa contemporánea.',
        tiempoLectura: '4 min de lectura',
        edicion: 'Edición Gastronomía',
        portada: '/niu-rou-mian.jpg',
        portadaAlt: 'Cuenco de sopa taiwanesa de fideos con carne de ternera, hierbas y caldo.',
        portadaEtiqueta: 'EL SABOR PROFUNDO DEL CALDO',
        portadaPie: '— El niu rou mian se sirve con fideos de trigo, ternera y un caldo que varía según la receta.',
        introduccion: [
            'El primer encuentro con un niu rou mian suele ocurrir antes de probarlo. El vapor sube del cuenco, las especias anuncian la profundidad del caldo y los fideos desaparecen bajo una superficie brillante. Después llega la cucharada que revela el carácter del plato: a veces intenso y oscuro, a veces delicado y transparente. Esta sopa de fideos con ternera se ha convertido en una referencia de la gastronomía taiwanesa porque admite distintas interpretaciones sin perder su identidad.',
            'Su estructura es sencilla: fideos de trigo, cortes de ternera cocidos hasta quedar tiernos y un caldo preparado con paciencia. Pero las decisiones de cada cocina cambian el resultado. Algunas utilizan salsa de soja y especias para un perfil profundo; otras buscan la claridad de los huesos y la carne. Las verduras, el cebollín o los acompañamientos encurtidos pueden completar el cuenco y aportar contraste.',
        ],
        capitulo1: {
            etiqueta: 'CAPÍTULO 01',
            titulo: 'Un plato nacido del encuentro de tradiciones',
            parrafos: [
                'La historia del niu rou mian en Taiwán está ligada a movimientos migratorios y a la adaptación de técnicas culinarias durante el siglo XX. En especial, algunas versiones de fideos con ternera estofada se desarrollaron entre comunidades llegadas del continente a mediados de siglo, que combinaron recuerdos de sus cocinas regionales con ingredientes y hábitos de la isla. No se trata de una receta detenida en el tiempo, sino de una preparación que evolucionó junto a sus cocineros.',
                'Entre las variantes más conocidas aparece el caldo rojo, de sabor intenso, elaborado con ternera estofada y condimentos que pueden incluir salsa de soja y especias. También existen versiones de caldo claro, más ligeras en apariencia, en las que se busca resaltar el sabor de la carne. Michelin documenta ambas corrientes en restaurantes taiwaneses. Elegir entre ellas no equivale a decidir cuál es la auténtica: son caminos distintos para llegar a una misma experiencia de fideos, caldo y ternera.',
            ],
        },
        galeria: [
            {
                src: '/galeria-niu-rou-mian-1.jpg',
                alt: 'Detalle de fideos de trigo en un caldo oscuro con ternera estofada.',
                pie: '— La versión de caldo rojo destaca por su carácter especiado y profundo.',
            },
            {
                src: '/galeria-niu-rou-mian-2.jpg',
                alt: 'Sopa taiwanesa de ternera en caldo claro con cebollín.',
                pie: '— Los caldos claros ofrecen otra interpretación de los mismos ingredientes esenciales.',
            },
        ],
        cita: {
            texto: '«Un caldo guarda el tiempo que necesitó para convertirse en memoria.»',
            firma: 'NOTAS DE CATA • DISCOVER TAIWAN',
        },
        continuacion: [
            'Al pedir un niu rou mian, observa el grosor de los fideos y el corte de carne. Algunos locales ofrecen fideos más anchos y firmes; otros prefieren hebras delgadas. Prueba primero el caldo sin añadir salsas, porque allí se encuentra buena parte del trabajo de cocina. Después combina una porción de fideos y carne. El plato está pensado para disfrutarse poco a poco, reconociendo cómo cambian los sabores con cada cucharada.',
        ],
        capitulo2: {
            etiqueta: 'CAPÍTULO 02',
            titulo: 'Cómo reconocer un buen cuenco',
            parrafos: [
                'No existe una fórmula única para calificar esta sopa, pero hay señales que pueden orientar la experiencia. La carne debería resultar tierna sin perder completamente su textura; los fideos, tener cierta resistencia al morder; y el caldo, mostrar un sabor coherente, ya sea limpio o concentrado. La grasa puede aportar profundidad, pero no debería ocultar todos los demás ingredientes. Cada versión invita a poner atención en un matiz diferente.',
                'El niu rou mian representa algo más que una comida caliente. En una isla donde numerosas tradiciones culinarias se han encontrado y transformado, el cuenco expresa una historia de adaptación. Puede disfrutarse en locales modestos o restaurantes especializados, pero su fuerza permanece en el mismo gesto: acercarse al vapor y descubrir cómo el tiempo, la técnica y la memoria terminan reuniéndose en una sopa.',
            ],
        },
        autor: {
            nombre: 'Victor Leal',
            cargo: 'EDITOR DE CRÓNICA URBANA',
            foto: '/luffy-icon.jpg',
            biografia: 'Editor de Discover Taiwan, un proyecto dedicado a contar los sabores, paisajes y tradiciones de la isla desde una mirada cultural y accesible.',
        },
    },
    {
        slug: 'xiao-long-bao',
        numero: '06',
        serie: 'VAPORES DE TAIWÁN',
        categoria: 'GASTRONOMÍA',
        subcategoria: 'DUMPLINGS & CALDOS',
        titulo: 'Xiao Long Bao: el delicado arte de guardar caldo dentro de una masa',
        bajada: 'Una envoltura fina, un relleno jugoso y un pequeño sorbo de caldo convierten estos dumplings al vapor en una experiencia de precisión y paciencia.',
        tiempoLectura: '4 min de lectura',
        edicion: 'Edición Gastronomía',
        portada: '/xiao-long-bao.jpg',
        portadaAlt: 'Dumplings xiao long bao al vapor junto a salsa oscura y palillos.',
        portadaEtiqueta: 'EL CALDO ESCONDIDO',
        portadaPie: '— Los xiao long bao conservan caldo caliente dentro de una delicada masa plegada.',
        introduccion: [
            'Pocos alimentos despiertan tanta curiosidad como un dumpling que guarda sopa en su interior. El xiao long bao se presenta en pequeñas piezas de masa plegada y cocidas al vapor. Al levantar una con los palillos, el desafío consiste en no romper su envoltura antes de tiempo. Después llega la sorpresa: junto al relleno de carne aparece un caldo caliente que transforma un bocado en una experiencia de varias texturas y temperaturas.',
            'Aunque su origen se encuentra en la región de Shanghái y Jiangnan, en China, los xiao long bao adquirieron una presencia destacada en Taiwán. Allí, establecimientos especializados refinaron su preparación y ayudaron a difundirla internacionalmente. Su popularidad en Taipéi forma parte de una historia culinaria de intercambios y adaptaciones, y merece contarse sin confundir fama local con origen geográfico.',
        ],
        capitulo1: {
            etiqueta: 'CAPÍTULO 01',
            titulo: 'Cómo se encierra una sopa',
            parrafos: [
                'El secreto del xiao long bao está en la relación entre masa, relleno y caldo. En muchas recetas, el jugo se incorpora a la mezcla de carne en forma de gelatina de caldo que se derrite con el calor de la cocción. Así se consigue que el líquido permanezca dentro del dumpling hasta el momento de comerlo. La masa debe ser lo suficientemente fina para resultar delicada y, al mismo tiempo, resistente para evitar fugas.',
                'Cada pliegue exige atención: los bordes se reúnen sobre el relleno para formar un pequeño paquete. Los dumplings suelen cocinarse en vaporeras de bambú sobre una base que ayuda a evitar que se adhieran. Cuando llegan a la mesa, el vapor y el aroma forman parte del atractivo. La Guía Michelin destaca el equilibrio entre la envoltura, el relleno y el caldo como una de las cualidades esenciales de este plato, especialmente en su consolidación dentro de la escena culinaria taiwanesa.',
            ],
        },
        galeria: [
            {
                src: '/galeria-xiao-long-bao-1.jpg',
                alt: 'Cocinero formando pliegues en la masa de un xiao long bao.',
                pie: '— El plegado requiere precisión para contener el relleno y el caldo.',
            },
            {
                src: '/galeria-xiao-long-bao-2.jpg',
                alt: 'Vaporera de bambú abierta con xiao long bao recién hechos.',
                pie: '— El vapor cocina los dumplings y derrite el caldo que guardan en su interior.',
            },
        ],
        cita: {
            texto: '«El verdadero secreto no está en lo que se ve, sino en el caldo que espera dentro.»',
            firma: 'NOTAS DE CATA • DISCOVER TAIWAN',
        },
        continuacion: [
            'Para disfrutarlo sin quemarte, levanta un dumpling con cuidado y colócalo sobre una cuchara. Puedes hacer una pequeña abertura para dejar salir algo de vapor y probar primero el caldo. Después come el resto, con o sin unas gotas de vinagre oscuro o jengibre, según la forma de servirlo del establecimiento. Conviene evitar morderlo de golpe apenas llega a la mesa: el líquido interior puede estar muy caliente. Esta pausa no le quita emoción; ayuda a apreciar mejor su elaboración.',
        ],
        capitulo2: {
            etiqueta: 'CAPÍTULO 02',
            titulo: 'De la tradición regional a un símbolo gastronómico',
            parrafos: [
                'En Taipéi, los xiao long bao se han convertido en una especialidad muy buscada por residentes y visitantes. El reconocimiento internacional de restaurantes como Din Tai Fung contribuyó a difundir una preparación que requiere repetición, consistencia y oficio. Sin embargo, la experiencia no se limita a una sola cadena: hay establecimientos con distintas formas de plegado, tamaños, rellenos y estilos de servicio. Explorar esas diferencias permite ir más allá del plato famoso de las fotografías.',
                'El xiao long bao demuestra cómo una técnica puede viajar, arraigarse y adquirir nuevos matices sin borrar su origen. Su presencia en Taiwán no es una contradicción, sino un ejemplo de la diversidad culinaria de la isla. Cuando la masa se abre y aparece el caldo, la impresión es inmediata; cuando se comprende el trabajo detrás, el bocado adquiere otra profundidad. La mejor forma de apreciarlo es prestando atención a ambos momentos.',
            ],
        },
        autor: {
            nombre: 'Victor Leal',
            cargo: 'EDITOR DE CRÓNICA URBANA',
            foto: '/luffy-icon.jpg',
            biografia: 'Editor de Discover Taiwan, un proyecto dedicado a contar los sabores, paisajes y tradiciones de la isla desde una mirada cultural y accesible.',
        },
    },
];
