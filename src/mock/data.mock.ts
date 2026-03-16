export interface Product {
    id: string
    title: string
    description: string
    price: number
    slug: string
}

export interface SubCategory {
    id: string
    title: string
    description?: string
    slug: string
    products: string[]   // IDs de productos
}

export interface Category {
    id: string
    title: string
    slug: string
    subs?: string[]      // IDs de subcategorías
    products?: string[]  // productos directos
}

export interface MenuData {
    categories: Record<string, Category>
    subcategories: Record<string, SubCategory>
    products: Record<string, Product>
}

export const menu: MenuData = {

    categories: {

        bebidas_clasicas: {
            id: "bebidas_clasicas",
            title: "Bebidas Clásicas",
            slug: "bebidas-clasicas",
            products: [
                "classic_bubble_tea",
                "taro_milk_tea",
                "matcha_latte_boba"
            ]
        },

        cremoladas: {
            id: "cremoladas",
            title: "Cremoladas",
            slug: "cremoladas",
            subs: [
                "cremoladas_con_leche",
                "cremoladas_sin_leche"
            ]
        }

    },

    subcategories: {

        cremoladas_con_leche: {
            id: "cremoladas_con_leche",
            title: "Cremoladas con leche",
            slug: "con-leche",
            products: [
                "cremolada_fresa_leche",
                "cremolada_lucuma"
            ]
        },

        cremoladas_sin_leche: {
            id: "cremoladas_sin_leche",
            title: "Cremoladas sin leche",
            slug: "sin-leche",
            products: [
                "cremolada_fresa",
                "cremolada_maracuya"
            ]
        }

    },

    products: {

        classic_bubble_tea: {
            id: "classic_bubble_tea",
            title: "Classic Bubble Tea",
            description: "Té negro con leche y tapioca",
            price: 8,
            slug: "classic-bubble-tea"
        },

        taro_milk_tea: {
            id: "taro_milk_tea",
            title: "Taro Milk Tea",
            description: "Bebida cremosa de taro",
            price: 9,
            slug: "taro-milk-tea"
        },

        matcha_latte_boba: {
            id: "matcha_latte_boba",
            title: "Matcha Latte Boba",
            description: "Matcha japonés con leche",
            price: 10,
            slug: "matcha-latte-boba"
        },

        cremolada_fresa_leche: {
            id: "cremolada_fresa_leche",
            title: "Cremolada de Fresa con Leche",
            description: "Fresa fresca con leche",
            price: 7,
            slug: "fresa-leche"
        },

        cremolada_lucuma: {
            id: "cremolada_lucuma",
            title: "Cremolada de Lúcuma",
            description: "Lúcuma cremosa peruana",
            price: 8,
            slug: "lucuma"
        },

        cremolada_fresa: {
            id: "cremolada_fresa",
            title: "Cremolada de Fresa",
            description: "Solo fruta y hielo",
            price: 6,
            slug: "fresa"
        },

        cremolada_maracuya: {
            id: "cremolada_maracuya",
            title: "Cremolada de Maracuyá",
            description: "Cítrica y refrescante",
            price: 6.5,
            slug: "maracuya"
        }

    }

}