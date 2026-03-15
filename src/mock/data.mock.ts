export interface MenuItem {
    id: string
    title: string
    description: string
    price?: number | string;
    to?:string;
    slug:string;
}

export interface MenuSubCategory {
    id: string
    title: string
    description: string
    price?: number;
    to?:string;
    items: MenuItem[]
    slug?:string;
}

export interface MenuCategory {
    id: string
    label: string
    items?: MenuItem[]
    subs?: MenuSubCategory[]
}

export const menuData: MenuCategory[] = [
    {
        id: 'bebidas_clasicas',
        label: 'Bebidas Clásicas',
        items: [
            {
                id: 'bc_1',
                title: 'Classic Bubble Tea',
                description: 'El tradicional té negro con leche deslactosada y perlas de tapioca.',
                price: 8.00,
                slug: 'classic-bubble-tea'
            },
            {
                id: 'bc_2',
                title: 'Taro Milk Tea',
                description: 'Bebida cremosa a base de raíz de taro con un toque avainillado y color púrpura.',
                price: 9.00,
                slug: 'taro-milk-tea'
            },
            {
                id: 'bc_3',
                title: 'Matcha Latte Boba',
                description: 'Auténtico té verde matcha japonés mezclado con leche y tapioca.',
                price: 10.00,
                slug: 'matcha-latte-boba'
            },
            {
                id: 'bc_4',
                title: 'Thai Milk Tea',
                description: 'Té negro tailandés especiado, leche condensada y un dulzor inconfundible.',
                price: 9.50,
                slug: 'thai-milk-tea'
            },
            {
                id: 'bc_5',
                title: 'Jasmine Milk Tea',
                description: 'Té verde con infusión de flores de jazmín y leche, muy refrescante y ligero.',
                price: 8.50,
                slug: 'jasmine-milk-tea'
            },
            {
                id: 'bc_6',
                title: 'Brown Sugar Tiger Milk',
                description: 'Leche fresca con un intenso jarabe de azúcar morena y tapioca caliente.',
                price: 11.00,
                slug: 'brown-sugar-tiger-milk'
            },
            {
                id: 'bc_7',
                title: 'Oolong Milk Tea',
                description: 'Té Oolong tostado combinado con leche, ideal para un sabor más profundo.',
                price: 9.00,
                slug: 'oolong-milk-tea'
            },
            {
                id: 'bc_8',
                title: 'Earl Grey Boba',
                description: 'Té negro Earl Grey con notas cítricas de bergamota y leche cremosa.',
                price: 8.50,
                slug: 'earl-grey-boba'
            }
        ]
    },
    {
        id: 'bebidas_frutales',
        label: 'Bebidas Frutales',
        items: [
            {
                id: 'bf_1',
                title: 'Passion Fruit Green Tea',
                description: 'Té verde con pulpa real de maracuyá. Cítrico y refrescante.',
                price: 7.50,
                slug: 'passion-fruit-green-tea'
            },
            {
                id: 'bf_2',
                title: 'Mango Green Tea',
                description: 'Té verde helado con puré de mango dulce y jelly de frutas.',
                price: 8.00,
                slug: 'mango-green-tea'
            },
            {
                id: 'bf_3',
                title: 'Peach Oolong Tea',
                description: 'Té Oolong con esencia y trozos de durazno fresco.',
                price: 8.00,
                slug: 'peach-oolong-tea'
            },
            {
                id: 'bf_4',
                title: 'Strawberry Black Tea',
                description: 'Té negro frío agitado con fresas machacadas y sirope artesanal.',
                price: 8.50,
                slug: 'strawberry-black-tea'
            },
            {
                id: 'bf_5',
                title: 'Lychee Green Tea',
                description: 'Té verde con el dulzor floral del lichi y popping boba.',
                price: 9.00,
                slug: 'lychee-green-tea'
            },
            {
                id: 'bf_6',
                title: 'Grapefruit Tea',
                description: 'Refrescante té verde con jugo de toronja rosada y rodajas frescas.',
                price: 8.50,
                slug: 'grapefruit-tea'
            },
            {
                id: 'bf_7',
                title: 'Pineapple Green Tea',
                description: 'Té verde tropical con mermelada de piña casera.',
                price: 8.00,
                slug: 'pineapple-green-tea'
            },
            {
                id: 'bf_8',
                title: 'Kumquat Lemon Tea',
                description: 'Té negro con limón y kumquat para una explosión cítrica.',
                price: 7.50,
                slug: 'kumquat-lemon-tea'
            }
        ]
    },
    {
        id:'cremoladas',
        label:'Cremoladas',
        subs: [
            {
                id:'cremolada_con_leche',
                title:'Cremolada con leche',
                description:'Disfruta de cremoladas con leche y su riquichichima tapioca',
                slug:'',
                items: [
                    {
                        id: 'ccl_1',
                        title: 'Cremolada de Fresa con Leche',
                        description: 'Cremolada suave de fresas frescas licuadas con leche entera y condensada.',
                        price: 7.00,
                        slug: 'cremolada-fresa-leche'
                    },
                    {
                        id: 'ccl_2',
                        title: 'Cremolada de Lúcuma',
                        description: 'El clásico sabor peruano. Lúcuma de seda batida con leche cremosa.',
                        price: 8.00,
                        slug: 'cremolada-lucuma'
                    },
                    {
                        id: 'ccl_3',
                        title: 'Cremolada de Mango con Leche',
                        description: 'Mango Edward maduro licuado con un toque de leche.',
                        price: 7.50,
                        slug: 'cremolada-mango-leche'
                    },
                    {
                        id: 'ccl_4',
                        title: 'Cremolada de Coco',
                        description: 'Base de leche con crema de coco y ralladura de coco tostado.',
                        price: 8.00,
                        slug: 'cremolada-coco'
                    },
                    {
                        id: 'ccl_5',
                        title: 'Cremolada de Chocolate',
                        description: 'Cacao puro, leche y chispas de chocolate congeladas.',
                        price: 8.50,
                        slug: 'cremolada-chocolate'
                    },
                    {
                        id: 'ccl_6',
                        title: 'Cremolada de Vainilla Francesa',
                        description: 'Suave cremolada de vainilla con un toque de canela espolvoreada.',
                        price: 7.00,
                        slug: 'cremolada-vainilla'
                    },
                    {
                        id: 'ccl_7',
                        title: 'Cremolada de Plátano',
                        description: 'Plátano de seda con leche, dulce, nutritiva y muy refrescante.',
                        price: 7.00,
                        slug: 'cremolada-platano'
                    },
                    {
                        id: 'ccl_8',
                        title: 'Cremolada de Algarrobina',
                        description: 'Leche helada batida con jarabe de algarrobina pura del norte peruano.',
                        price: 8.50,
                        slug: 'cremolada-algarrobina'
                    }
                ]
            },
            {
                id: 'cremolada_sin_leche',
                title: 'Cremolada sin leche',
                description:'Disfruta de cremoladas sin leche pero con su riquichichima tapioca',
                slug: '',
                items: [
                    {
                        id: 'csl_1',
                        title: 'Cremolada de Fresa',
                        description: 'Puro hielo y pulpa de fresa, súper ligera y refrescante.',
                        price: 6.00,
                        slug:''
                    },
                    {
                        id: 'csl_2',
                        title: 'Cremolada de Maracuyá',
                        description: 'Pura fruta de la pasión helada. Cítrica al máximo.',
                        price: 6.50,
                        slug: 'cremolada-maracuya'
                    },
                    {
                        id: 'csl_3',
                        title: 'Cremolada de Limón',
                        description: 'El clásico frozen de limón, perfecto para calmar la sed.',
                        price: 6.00,
                        slug: 'cremolada-limon'
                    },
                    {
                        id: 'csl_4',
                        title: 'Cremolada de Piña',
                        description: 'Piña Golden licuada con hielo, dulce y tropical.',
                        price: 6.50,
                        slug: 'cremolada-pina'
                    },
                    {
                        id: 'csl_5',
                        title: 'Cremolada de Chicha Morada',
                        description: 'Maíz morado hervido con piña y especias, hecho cremolada.',
                        price: 7.00,
                        slug: 'cremolada-chicha-morada'
                    },
                    {
                        id: 'csl_6',
                        title: 'Cremolada de Tamarindo',
                        description: 'Sabor agridulce intenso y natural a base de pulpa de tamarindo.',
                        price: 6.50,
                        slug: 'cremolada-tamarindo'
                    },
                    {
                        id: 'csl_7',
                        title: 'Cremolada de Camu Camu',
                        description: 'Explosión de vitamina C con pulpa de camu camu amazónico.',
                        price: 7.50,
                        slug: 'cremolada-camu-camu'
                    },
                    {
                        id: 'csl_8',
                        title: 'Cremolada de Mango',
                        description: 'Solo mango maduro y hielo, textura tipo sorbete.',
                        price: 6.50,
                        slug: 'cremolada-mango-agua'
                    }
                ]
            }
        ]
    },
    {
        id: 'bebidas_especiales',
        label: 'Bebidas Especiales',
        items: [
            {
                id: 'be_1',
                title: 'Tropical Fruit Tea',
                description: 'Una mezcla de té verde con trozos de sandía, naranja, maracuyá y piña.',
                price: 12.00,
                slug: 'tropical-fruit-tea'
            },
            {
                id: 'be_2',
                title: 'Piña Colada Boba (Sin alcohol)',
                description: 'Smoothie de piña y crema de coco con perlas de tapioca.',
                price: 13.00,
                slug:'pina-colada-boba'
            },
            {
                id: 'be_3',
                title: 'Galaxy Magic Tea',
                description: 'Té de flor de guisante de mariposa que cambia de color azul a morado con limón.',
                price: 14.00,
                slug:'galaxy-magic-tea'
            },
            {
                id: 'be_4',
                title: 'Frappé de Matcha y Oreo',
                description: 'Matcha japonés batido con hielo y galletas Oreo trituradas.',
                price: 14.50,
                slug:'matcha-oreo-frappe'
            },
            {
                id: 'be_5',
                title: 'Taro Smoothie & Cheese Foam',
                description: 'Smoothie de taro coronado con una espuma de queso salada y cremosa.',
                price: 13.50,
                slug:'taro-cheese-foam'
            },
            {
                id: 'be_6',
                title: 'Mango Pomelo Sago',
                description: 'Postre bebible de Hong Kong: puré de mango, leche de coco, pomelo y perlas de sagú.',
                price: 15.00,
                slug:'mango-pomelo-sago'
            },
            {
                id: 'be_7',
                title: 'Dirty Ube Boba',
                description: 'Leche fresca con mermelada de Ube (ñame púrpura) manchando el vaso.',
                price: 12.50,
                slug:'dirty-ube-boba'
            },
            {
                id: 'be_8',
                title: 'Rose Petal Milk Tea',
                description: 'Té con infusión de rosas, leche y pétalos comestibles. Sabor muy elegante.',
                price: 11.50,
                slug:'rose-petal-milk-tea'
            }
        ]
    }
];