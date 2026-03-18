import { useNavigate, useParams, useSearchParams } from "react-router"

import { CardDrink } from "../components/cardDrinks/CardDrink"
import { menu } from "@/mock/data.mock";
import { Button } from "@/components/ui/button";
import { MilkIcon } from "lucide-react";
import CustomPagination from "../components/pagination/CustomPagination";
import { useEffect } from "react";

export const Orders = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const { category, sub } = useParams();
    const navigate = useNavigate()

    const isCremolada = category === 'cremoladas'

    const filteredItems = menu.filter(m => {
        if (!sub) return m.category === category;
        if (sub === 'con_leche') return m.subcategory === 'con_leche'
        return m.subcategory === 'sin_leche'
    })

    const page = Number(searchParams.get('page') ?? 1);
    const limit = Number(searchParams.get('limit') ?? 4);

    const totalPages = Math.ceil(filteredItems.length / limit);
    const offset = (page - 1) * limit;
    const items = filteredItems.slice(offset, offset + limit);

    useEffect(() => {

        if (isNaN(page)) {
            searchParams.set('page', '1')
            setSearchParams(searchParams)
        }

        if (isNaN(limit)) {
            searchParams.set('limit', '4')
            setSearchParams(searchParams)
        }

        if (page > totalPages) {
            searchParams.set('page', '1')
            setSearchParams(searchParams)
        }

    },[page,limit,totalPages])


    return (
        <div className="flex flex-col flex-1 items-center">
            {isCremolada &&
                <div className="flex flex-wrap justify-center flex-row gap-5 mt-5">
                    <Button
                        variant={sub === 'con_leche' ? 'default' : 'outline'}
                        onClick={() => navigate(`/${category}/con_leche`)}
                    >
                        Con leche <MilkIcon />
                    </Button>
                    <Button
                        variant={sub === 'sin_leche' ? 'default' : 'outline'}
                        onClick={() => navigate(`/${category}/sin_leche`)}
                    >
                        Sin leche <MilkIcon />
                    </Button>
                </div>
            }

            <CustomPagination totalPages={totalPages} classname={"mt-5 mb-0"} />

            <div className="flex flex-wrap justify-center gap-5 px-4 max-w-7xl mx-auto my-5">
                {items.map(item => (
                    <CardDrink
                        key={item.id}
                        title={item.title}
                        img={item.img ?? '/logo.png'}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </div>

            <CustomPagination totalPages={totalPages} />
        </div>
    )
};
