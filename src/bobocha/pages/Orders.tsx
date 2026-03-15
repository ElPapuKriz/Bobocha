import { useParams } from "react-router"
import { CardDrink } from "../components/cardDrinks/CardDrink"
import { menuData, type MenuItem, type MenuSubCategory } from "@/mock/data.mock";

const Orders = () => {
    const { idSlug } = useParams();

    const category = menuData.find(data => data.id === idSlug);
    let items: MenuItem[] | MenuSubCategory[] = []

    if (category?.subs) {
        items = category.subs
    } else if (category?.items) {
        items = category.items
    } 

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
                        to={item.to}
                    />
                ))}
            </div>
        </>
    );
};

export default Orders;