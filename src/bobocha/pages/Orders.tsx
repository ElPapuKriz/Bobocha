import { useParams } from "react-router"
import { CardDrink } from "../components/cardDrinks/CardDrink"
import { menuData } from "@/mock/data.mock";

const Orders = () => {
    const { idSlug } = useParams();

    const category = menuData.find(data => data.id === idSlug);

    const items = category?.subs?(category.subs.flatMap(sub=>sub)):category?.items ?? []

    /* const items = category?.items ?? [] */

    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 my-5">
                {items.map(item => (
                    <CardDrink
                        key={item.id}
                        title={item.title}
                        description={item.description ?? ''}
                        img="/logo.png"
                        to={item.to}
                    />
                ))}
            </div>
        </>
    );
};

export default Orders;