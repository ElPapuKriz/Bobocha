import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router";

interface Props {

    title: string;
    description?: string;
    price?: number | string;
    btnName?: string;
    img?: string;
    to?: string;

}

export const CardDrink = ({ title, description, price, btnName = "Comprar", img, to }: Props) => {
    return (
        <>
            <Card className="w-full sm:w-62.5 max-w-70 flex h-full">

                <CardHeader className="mt-auto" >
                    <CardTitle className="text-center">{title}</CardTitle>
                    <div className="flex- flex-col  place-items-center">
                        <img
                            className="w-30 h-30 my-2 object-cover rounded-2xl"
                            src={img}
                        />
                    </div>
                    <CardDescription className="line-clamp-3 text-center">
                        {description}
                    </CardDescription>
                </CardHeader>

                {price && <CardContent className="mt-auto">
                    <p className="text-2xl font-bold text-green-600 text-center">
                        S/.{price}
                    </p>
                </CardContent>}

                <CardFooter className="mt-auto">
                    <Button className="w-full" asChild>
                        {to ?<Link to={to}>{btnName}</Link>:<span>{btnName}</span>}
                    </Button>
                </CardFooter>

            </Card>
        </>
    )
}
