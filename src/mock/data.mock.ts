export interface MenuItem {
    id: string
    title: string
    description: string
    price: number
    category: string
    subcategory?: string
}

export const menu: MenuItem[] = [
    // 🟢 BEBIDAS CLÁSICAS
    {
        id: "bc_1",
        title: "Classic Bubble Tea",
        description: "Té negro con leche y tapioca.",
        price: 8,
        category: "bebidas_clasicas"
    },
    {
        id: "bc_2",
        title: "Taro Milk Tea",
        description: "Bebida cremosa de taro.",
        price: 9,
        category: "bebidas_clasicas"
    },
    {
        id: "bc_3",
        title: "Matcha Latte Boba",
        description: "Matcha japonés con leche.",
        price: 10,
        category: "bebidas_clasicas"
    },
    {
        id: "bc_4",
        title: "Thai Milk Tea",
        description: "Té tailandés especiado.",
        price: 9.5,
        category: "bebidas_clasicas"
    },
    {
        id: "bc_5",
        title: "Jasmine Milk Tea",
        description: "Té verde con jazmín.",
        price: 8.5,
        category: "bebidas_clasicas"
    },
    {
        id: "bc_6",
        title: "Brown Sugar Tiger Milk",
        description: "Leche con azúcar morena.",
        price: 11,
        category: "bebidas_clasicas"
    },
    {
        id: "bc_7",
        title: "Oolong Milk Tea",
        description: "Té Oolong con leche.",
        price: 9,
        category: "bebidas_clasicas"
    },
    {
        id: "bc_8",
        title: "Earl Grey Boba",
        description: "Té Earl Grey con leche.",
        price: 8.5,
        category: "bebidas_clasicas"
    },

    // 🟡 BEBIDAS FRUTALES
    {
        id: "bf_1",
        title: "Passion Fruit Green Tea",
        description: "Té verde con maracuyá.",
        price: 7.5,
        category: "bebidas_frutales"
    },
    {
        id: "bf_2",
        title: "Mango Green Tea",
        description: "Té verde con mango.",
        price: 8,
        category: "bebidas_frutales"
    },
    {
        id: "bf_3",
        title: "Peach Oolong Tea",
        description: "Té Oolong con durazno.",
        price: 8,
        category: "bebidas_frutales"
    },
    {
        id: "bf_4",
        title: "Strawberry Black Tea",
        description: "Té negro con fresa.",
        price: 8.5,
        category: "bebidas_frutales"
    },
    {
        id: "bf_5",
        title: "Lychee Green Tea",
        description: "Té verde con lichi.",
        price: 9,
        category: "bebidas_frutales"
    },
    {
        id: "bf_6",
        title: "Grapefruit Tea",
        description: "Té verde con toronja.",
        price: 8.5,
        category: "bebidas_frutales"
    },
    {
        id: "bf_7",
        title: "Pineapple Green Tea",
        description: "Té verde con piña.",
        price: 8,
        category: "bebidas_frutales"
    },
    {
        id: "bf_8",
        title: "Kumquat Lemon Tea",
        description: "Té con limón y kumquat.",
        price: 7.5,
        category: "bebidas_frutales"
    },

    // 🔵 CREMOLADAS CON LECHE
    {
        id: "ccl_1",
        title: "Cremolada de Fresa con Leche",
        description: "Fresa con leche cremosa.",
        price: 7,
        category: "cremoladas",
        subcategory: "con_leche"
    },
    {
        id: "ccl_2",
        title: "Cremolada de Lúcuma con Leche",
        description: "Lúcuma con leche.",
        price: 8,
        category: "cremoladas",
        subcategory: "con_leche"
    },
    {
        id: "ccl_3",
        title: "Cremolada de Mango con Leche",
        description: "Mango con leche.",
        price: 7.5,
        category: "cremoladas",
        subcategory: "con_leche"
    },
    {
        id: "ccl_4",
        title: "Cremolada de Coco con Leche",
        description: "Coco con leche.",
        price: 8,
        category: "cremoladas",
        subcategory: "con_leche"
    },

    // 🔴 CREMOLADAS SIN LECHE
    {
        id: "csl_1",
        title: "Cremolada de Fresa",
        description: "Fresa al agua.",
        price: 6,
        category: "cremoladas",
        subcategory: "sin_leche"
    },
    {
        id: "csl_2",
        title: "Cremolada de Maracuyá",
        description: "Maracuyá al agua.",
        price: 6.5,
        category: "cremoladas",
        subcategory: "sin_leche"
    },
    {
        id: "csl_3",
        title: "Cremolada de Limón",
        description: "Limón refrescante.",
        price: 6,
        category: "cremoladas",
        subcategory: "sin_leche"
    },
    {
        id: "csl_4",
        title: "Cremolada de Piña",
        description: "Piña tropical.",
        price: 6.5,
        category: "cremoladas",
        subcategory: "sin_leche"
    },

    // 🟣 BEBIDAS ESPECIALES
    {
        id: "be_1",
        title: "Tropical Fruit Tea",
        description: "Mix de frutas tropicales.",
        price: 12,
        category: "bebidas_especiales"
    },
    {
        id: "be_2",
        title: "Piña Colada Boba",
        description: "Piña con coco.",
        price: 13,
        category: "bebidas_especiales"
    },
    {
        id: "be_3",
        title: "Galaxy Magic Tea",
        description: "Té que cambia de color.",
        price: 14,
        category: "bebidas_especiales"
    },
    {
        id: "be_4",
        title: "Matcha Oreo Frappé",
        description: "Matcha con Oreo.",
        price: 14.5,
        category: "bebidas_especiales"
    }
];