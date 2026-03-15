import { useParams } from "react-router"
import { CardDrink } from "../components/cardDrinks/CardDrink"
import { menuData } from "@/mock/data.mock";

const Orders = () => {
    const { category, sub } = useParams();

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
                    />
                ))}
            </div>
        </>
    );
};

export default Orders;