export interface MenuItem {
    id: string
    title: string
    description: string
    price: number
    category: string
    img?: string
    subcategory?: string
}

export const menu: MenuItem[] = [

    {
        id: "bc_1",
        title: "Classic Bubble Tea",
        description: "Té negro con leche y tapioca.",
        price: 8,
        category: "bebidas_clasicas",
        img: "https://bobocha.com.pe/wp-content/uploads/Te-Leche-v2.webp"
    },
    {
        id: "bc_2",
        title: "Taro Milk",
        description: "Bebida cremosa de taro.",
        price: 9,
        category: "bebidas_clasicas",
        img: "https://bobocha.com.pe/wp-content/uploads/Taro-v2.webp"
    },
    {
        id: "bc_3",
        title: "Matcha Latte Boba",
        description: "Matcha japonés con leche.",
        price: 10,
        category: "bebidas_clasicas",
        img: "https://bobocha.com.pe/wp-content/uploads/Matcha-v2.webp"
    },
    {
        id: "bc_4",
        title: "Thai Milk Tea",
        description: "Té tailandés especiado.",
        price: 9.5,
        category: "bebidas_clasicas",
        img: "https://static.vecteezy.com/system/resources/previews/003/427/507/large_2x/taiwan-milk-tea-and-thai-milk-tea-with-boba-free-photo.jpg"
    },
    {
        id: "bc_5",
        title: "Jasmine Milk Tea",
        description: "Té verde con jazmín.",
        price: 8.5,
        category: "bebidas_clasicas",
        img: "https://www.greedygirlgourmet.com/wp-content/uploads/2022/08/Taiwanese-Jasmine-milk-tea-with-pearls.jpg"
    },
    {
        id: "bc_6",
        title: "Brown Sugar Tiger Milk",
        description: "Leche con azúcar morena.",
        price: 11,
        category: "bebidas_clasicas",
        img: "https://sugaryums.com/wp-content/uploads/2022/03/Tiger-Milk-Tea-SugarYums-4-1.jpg"
    },
    {
        id: "bc_7",
        title: "Oolong Milk Tea",
        description: "Té Oolong con leche.",
        price: 9,
        category: "bebidas_clasicas",
        img: "https://www.ohhowcivilized.com/wp-content/uploads/oolong-bubble-tea-recipe.jpg"
    },
    {
        id: "bc_8",
        title: "Earl Grey Boba",
        description: "Té Earl Grey con leche.",
        price: 8.5,
        category: "bebidas_clasicas",
        img: "https://carmyy.com/wp-content/uploads/2021/10/Earl-Grey-Milk-Tea-4.jpg"
    },


    {
        id: "bf_1",
        title: "Passion Fruit Green Tea",
        description: "Té verde con maracuyá.",
        price: 7.5,
        category: "bebidas_frutales",
        img: "https://bobocha.com.pe/wp-content/uploads/Te-Maracuya-v2.webp"
    },
    {
        id: "bf_2",
        title: "Mango Green Tea",
        description: "Té verde con mango.",
        price: 8,
        category: "bebidas_frutales",
        img: "https://bobocha.com.pe/wp-content/uploads/Te-Mango-v2.webp"
    },
    {
        id: "bf_3",
        title: "Peach Oolong Tea",
        description: "Té Oolong con durazno.",
        price: 8,
        category: "bebidas_frutales",
        img: "https://bobocha.com.pe/wp-content/uploads/Te-Durazno-v2.webp"
    },
    {
        id: "bf_4",
        title: "Strawberry Black Tea",
        description: "Té negro con fresa.",
        price: 8.5,
        category: "bebidas_frutales",
        img: "https://bobocha.com.pe/wp-content/uploads/Te-Fresa-v2.webp"
    },
    {
        id: "bf_5",
        title: "Lychee Green Tea",
        description: "Té verde con lichi.",
        price: 9,
        category: "bebidas_frutales",
        img: "https://runawayrice.com/wp-content/uploads/2016/06/Icy-Jasmine-Green-Tea-with-Lychee-Jelly.jpg"
    },
    {
        id: "bf_6",
        title: "Grapefruit Tea",
        description: "Té verde con toronja.",
        price: 8.5,
        category: "bebidas_frutales",
        img: "https://deliciousnotgorgeous.com/wp-content/uploads/2020/07/grapefruit-green-tea-8718.jpg"
    },
    {
        id: "bf_7",
        title: "Pineapple Green Tea",
        description: "Té verde con piña.",
        price: 8,
        category: "bebidas_frutales",
        img: "https://bobocha.com.pe/wp-content/uploads/Te-Pina-v2.webp"
    },
    {
        id: "bf_8",
        title: "Kumquat Lemon Tea",
        description: "Té con limón y kumquat.",
        price: 7.5,
        category: "bebidas_frutales",
        img: "https://www.sunnysyrup.com/proimages/products/juice/01/01-13/Kumquat-Lemon-Conc.-Juice-5.jpg"
    },

    {
        id: "ccl_1",
        title: "Cremolada de Fresa con Leche",
        description: "Fresa con leche cremosa.",
        price: 7,
        category: "cremoladas",
        subcategory: "con_leche",
        img: "https://bobocha.com.pe/wp-content/uploads/Crem-Fresa-Leche-v2.webp"
    },
    {
        id: "ccl_2",
        title: "Cremolada de coco con leche",
        description: "Coco con leche",
        price: 8,
        category: "cremoladas",
        subcategory: "con_leche",
        img: "https://bobocha.com.pe/wp-content/uploads/Crem-Coco-Leche-v2.webp"
    },
    {
        id: "ccl_3",
        title: "Cremolada de Mango con Leche",
        description: "Mango con leche.",
        price: 7.5,
        category: "cremoladas",
        subcategory: "con_leche",
        img: "https://bobocha.com.pe/wp-content/uploads/Crem-Mango-Leche-v2.webp"
    },
    {
        id: "ccl_4",
        title: "Cremolada de Lúcuma con leche",
        description: "Lúcuma con leche",
        price: 8,
        category: "cremoladas",
        subcategory: "con_leche",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TUdVNK3-X8F9IK-D77MdUQdklNRgleWF0aBkcG96XA&s&ec=121585071"
    },

    {
        id: "csl_1",
        title: "Cremolada de Fresa",
        description: "Fresa al agua.",
        price: 6,
        category: "cremoladas",
        subcategory: "sin_leche",
        img: "https://bobocha.com.pe/wp-content/uploads/Crem-Fresa-v2.webp"
    },
    {
        id: "csl_2",
        title: "Cremolada de Maracuyá",
        description: "Maracuyá al agua.",
        price: 6.5,
        category: "cremoladas",
        subcategory: "sin_leche",
        img: "https://bobocha.com.pe/wp-content/uploads/Crem-Maracuya-v2.webp"
    },
    {
        id: "csl_3",
        title: "Cremolada de Limón",
        description: "Limón refrescante.",
        price: 6,
        category: "cremoladas",
        subcategory: "sin_leche",
        img: "https://bobocha.com.pe/wp-content/uploads/Crem-Limon-v2.webp"
    },
    {
        id: "csl_4",
        title: "Cremolada de Piña",
        description: "Piña tropical.",
        price: 6.5,
        category: "cremoladas",
        subcategory: "sin_leche",
        img: "https://bobocha.com.pe/wp-content/uploads/Crem-Pina-v2.webp"
    },

    {
        id: "be_1",
        title: "Tropical Fruit Tea",
        description: "Mix de frutas tropicales.",
        price: 12,
        category: "bebidas_especiales",
        img: "https://bobocha.com.pe/wp-content/uploads/Te-Tropical-Clasico-v2.webp"
    },
    {
        id: "be_2",
        title: "Piña Colada Boba",
        description: "Piña con coco.",
        price: 13,
        category: "bebidas_especiales",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2eEbwzrkeU-8LPxMgFzA30w7aqgMUlLqy5LclQXqog&s&ec=121585071"
    },
    {
        id: "be_3",
        title: "Galaxy Magic Tea",
        description: "Té que cambia de color.",
        price: 14,
        category: "bebidas_especiales",
        img: "https://muchbutter.com/wp-content/uploads/2019/07/068-Much-Butter-Magic-Galaxy-Squash-step-12.jpg"
    },
    {
        id: "be_4",
        title: "Matcha Oreo Frappé",
        description: "Matcha con Oreo.",
        price: 14.5,
        category: "bebidas_especiales",
        img: "https://www.jadeleafmatcha.com/cdn/shop/articles/frappachino_photo.png?v=1720576610"
    }
]