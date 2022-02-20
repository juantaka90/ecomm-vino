const productos = [
    {
    id: 30,
    name: "Castro Ventosa 750 ml",
    describe: "Es la entrada de gama de la bodega Castro Ventosa, en El Bierzo, de la que forma parte el enólogo Raúl Pérez, un tipo con barba vikinga que está metido en mil proyectos vinícolas porque hace vinos muy espectaculares. Pero que sea la entrada de gama no lo empequeñece: no hay que subestimar al vino más barato de esta lista. Está hecho con Mencía, una uva que da una acidez muy rica, que puede recordar a cerezas y fresas –como en este caso– y también a hierbas. A mí, concretamente, este Castro de Valtuille me huele a menta, pero no como un dentífrico, no. En plan muy leve. Es un vino, cómo decir, fresquito, limpio y muy de dejarse beber.",
    stock: 86,
    cost: 4500,
    category: 'Cosecha',
    URL:"https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912731_sumario_normal.jpg"
    },
    {
    id: 29,
    name: "Albiker 750 ml",
    describe: "Nos movemos en la misma latitud, pero viajamos hacia el este, a La Rioja; ay, ese riojita bueno. Este es un vino curioso, o a mí me lo parece, porque mezcla la uva tinta más emblemática de La Rioja, Tempranillo, y la uva blanca más emblemática de La Rioja, Viura, y no es un rosado. Es un tinto. Un tinto que parece una chuche, pero tinto al fin y al cabo. Otra vez estamos con que huele a fresa, frambuesas y esas cosas a las que huelen muchísimos vinos tintos. En fin, está muy bueno porque es de Bodegas Altún y esta gente hace cosas buenas.",
    stock: 100,
    cost: 4750,
    category: 'Tintos',
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912774_sumario_normal.jpg"
    },
    {
    id: 76,
    name: "Muga Rosado 750 ml",
    describe: "Bodegas Muga (La Rioja) define este vino como un “excelente caldo que hará las delicias de tu paladar”. Aunque están en su derecho, porque el vino lo hacen ellos, esto de llamar caldo a un vino es muy antiguo y hasta rancio. Tú no se lo tengas en cuenta: el vino está muy bueno. Es una mezcla de Garnacha, Viura y Tempranillo y a mí me da que es -alerta cursi– como beberse el verano. Me huele un montón a melocotones o a un montón de melocotones. Es un vino facilón como pocos, con una acidez muy refrescante y además es un rosado de color rosa. Eso mola.",
    stock: 92,
    cost: 5750,
    category: 'Tintos',
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912952_sumario_normal.jpg"
    },
    {
    id: 36,
    name: "Petit Caust Rosado 750 ml",
    describe: "Can Ràfols dels Caus es una bodega muy winelover del Penedés, entre otras cosas por su imaginería agro-masónica. El Petit Caus Rosado es una mezcla de Merlot, Tempranillo y Syrah cultivadas de forma ecológica en el macizo del Garraf, conocido porque ahí está Sitges. El único defecto que le encuentro es que para ser un rosado es muy poco rosa. Por lo demás, tiene una cosa a la que los entendidos le llaman mineralidad: si dices que es un vino mineral quedarás muy bien. Recuerda a frambuesas y, adivina, a cerezas.",
    stock: 22,
    cost: 6150,
    category: 'Blancos',
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912815_sumario_normal.jpg"
    },
    {
    id: 59,
    name: "Aroa Mutiko 750 ml",
    describe: "Aroa Bodegas es un proyecto navarro de Vintae, una compañía de vinos que hace ídems en 14 denominaciones de origen. A mí me parece una barbaridad esta demostración de fuerza y poderío pero, bueno, allá ellos. Este lo elaboran con Garnacha, que en Navarra da vinos muy –otra vez– frescos y además es una uva que gusta a casi todo el mundo. Aroa Mutiko lleva el sello eco y también el vegano –para elaborar algunos vinos se usan productos de origen animal, por ejemplo, algunos se clarifican con clara de huevo- y además del aroma a cereza quizá puedas encontrarle regaliz. Si no se lo encuentras, no te preocupes: no es obligatorio. Empina el codo y ya.",
    stock: 12,
    cost: 7250,
    category: 'Blancos',
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912918_sumario_normal.jpg"
    },
    {
    id: 42,
    name: "Blanc De Pacs 750 ml",
    describe: "Parés Baltà es otra bodega sita en el Penedés. Y es muy graciosa porque ahí nadie se llama Parés ni Baltà de apellido: los propietarios son dos hermanos que se llaman de apellido Cusiné. Y son sus esposas, María Elena Jiménez y Marta Casas, las enólogas. Todo un poco enrevesado a nivel familiar, pero hacen grandes vinos de agricultura biodinámica, que es algo complicada de explicar porque se basa en alineaciones planetarias y principios homeopáticos. Y, sin embargo, funciona. El blanco que nos ocupa es su vino más sencillo. La peculiaridad –es que nada es normal en Parés Baltà– consiste en que lleva las variedades tradicionales del cava –Xarel·lo, Macabeu y Parellada– pero no tiene burbujas, porque es un vino tranquilo. Sabe a flores, a peras y manzanas y es un vinazo, como el resto de referencias de esta bodega.",
    stock: 32,
    cost: 5900,
    category: 'Tintos',
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912857_sumario_normal.jpg"
    }
]
module.exports = {
    productos,
}