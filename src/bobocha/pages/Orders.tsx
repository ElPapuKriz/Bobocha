
import { useNavigate, useParams } from "react-router"

import { CardDrink } from "../components/cardDrinks/CardDrink"
import { menu } from "@/mock/data.mock";
import { Button } from "@/components/ui/button";
import { MilkIcon } from "lucide-react";

const Orders = () => {

    const { category,sub } = useParams();
    const isCremolada = category === 'cremoladas'
    const navigate = useNavigate()
    const items = menu.filter(m => {
        if (!sub)return m.category === category;
        if (sub==='con_leche')return m.subcategory === 'con_leche'
        return m.subcategory === 'sin_leche'
    })

    return (
        <>
            {/* Filtros de la cremolada */}
            {isCremolada &&
                <div className="flex flex-wrap flex-row gap-5 ">
                    <Button className="mt-5"
                        variant={sub === 'con_leche' ? 'default' : 'outline'}   
                        onClick={()=>{navigate(`/${category}/con_leche`)}}
                    >
                        Con leche <MilkIcon />
                        
                    </Button>

                    <Button className="mt-5 "
                        variant={sub === 'sin_leche' ? 'default' : 'outline'}
                        onClick={()=>{navigate(`/${category}/sin_leche`)}}
                    >
                        Sin leche <MilkIcon />
                    </Button>
                </div>
            }

            {/* Mapeo de los cards products */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 my-5">
                {items.map(item => (

                    <CardDrink
                        key={item.id}
                        title={item.title}
                        img={"/logo.png"}
                        price={item.price}
                        description={item.description}
                    />
                ))
                }
            </div>
        </>

    )
};

export default Orders;