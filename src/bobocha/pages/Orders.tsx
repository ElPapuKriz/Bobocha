import { useState } from "react"
import { useParams } from "react-router"
import { CardDrink } from "../components/cardDrinks/CardDrink"
import { menuData } from "@/mock/data.mock";

const Orders = () => {
    const { category, sub } = useParams();
    const [selectedProduct, setSelectedProduct] = useState<any>(null)

    const cat = menuData.find(data => data.id === category);

    const items =
        cat?.subs?.find(s => s.id === sub)?.items ??
        cat?.subs ??
        cat?.items ??
        [];

    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 my-5">
                {items.map(item => (
                    <CardDrink
                        key={item.id}
                        title={item.title}
                        description={item?.description}
                        price={item.price}
                        img="/logo.png"
                        to={"items" in item ? item.id : undefined}
                        onClick={() => {
                            if (!("items" in item)) {
                                setSelectedProduct(item)
                            }
                        }}

                    />
                ))}
                {selectedProduct && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

                        <div className="bg-white rounded-xl p-6 w-80 relative">

                            <button
                                className="absolute top-2 right-3 text-xl"
                                onClick={() => setSelectedProduct(null)}
                            >
                                ✕

                            </button>

                            <span className="text-xl font-bold text-center">
                                {selectedProduct.title}
                            </span>

                        </div>

                    </div>
                )}
            </div>
        </>
    );
};

export default Orders;