import { CardDrink } from "./bobocha/components/cardDrinks/CardDrink"

export const BobochaMain = () => {
    return (
        <>

            <div className="flex justify-center items-center my-5 ">
                <h1 className="text-blue-500 font-bold text-xl text-center ">Nuestros Bubbles Téa</h1>
            </div>

            {/* Cards Drinks */}
            <div className="flex flex-wrap gap-3 justify-center mx-5 my-5">
                <CardDrink
                    title="Bubbles Clásicos"
                    description="Bebidas clásicas con su riquichichísima tapioca."
                    btnName="Ingresar"
                    img="https://bobocha.com.pe/wp-content/uploads/Te-Leche-v2.webp"
                    to="bebidas_clasicas"
                />
                <CardDrink
                    title="Bubbles Frutales Clásicos"
                    description="Bebidas frutales clásicas con su riquichichísima tapioca."
                    btnName="Ingresar"
                    img="https://bobocha.com.pe/wp-content/uploads/Te-Fresa-v2.webp"
                    to="bebidas_frutales"
                />
                <CardDrink
                    title="Bubbles Cremoladas"
                    description="Cremoladas clásicas con su riquichichísima tapioca."
                    btnName="Ingresar"
                    img="https://bobocha.com.pe/wp-content/uploads/Crem-Arandano-v2.webp"
                    to="cremoladas"
                />
                <CardDrink
                    title="Bubbles Especiales"
                    description="Bebidas especiales con su riquichichísima tapioca."
                    btnName="Ingresar"
                    img="https://bobocha.com.pe/wp-content/uploads/Te-Fresa-Limon-v2.webp"
                    to="bebidas_especiales"
                />
            </div>


        </>
    )
}
