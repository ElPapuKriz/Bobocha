import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router";

interface Props {

    title: string;
    description?: string;
    price?: number;
    btnName?: string;
    img:string;
    to:string;

}

export const CardDrink = ({ title, description, price, btnName="Agregar pedido",img,to }: Props) => {
    return (
        <>
            <Card className="w-full max-w-70 flex flex-col h-full">

                <CardHeader >
                    <CardTitle className="text-center">{title}</CardTitle>
                    <div className="flex- flex-col  place-items-center">
                        <img
                            className="w-30 h-max my-2 object-cover"
                            src={img}
                        />
                    </div>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>

                {price && <CardContent>
                    <p className="text-2xl font-bold text-green-600 text-center">
                        {price}
                    </p>
                </CardContent>}

                <CardFooter>
                    <Button className="w-full" asChild>
                        <Link to={to}>{btnName}</Link>
                    </Button>
                </CardFooter>

            </Card>
        </>
    )
}
