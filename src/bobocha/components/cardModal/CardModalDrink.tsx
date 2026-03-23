import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

interface Props{

    title:string;
    img:string;
    description?:string;
    price:number;

}

const CardModalDrink = ({title,img,description,price}:Props) => {
    return (
        <>
            <Card className="w-full flex mx">

                <CardHeader className="mt-auto" >
                    <CardTitle className="text-center">{title}</CardTitle>
                    <div className="flex- flex-col  place-items-center">
                        <img
                            className="w-30 h-30 my-2 object-cover rounded-2xl"
                            src={img}
                        />
                    </div>
                    {description && <CardDescription className="line-clamp-3 text-center">
                        {description}
                    </CardDescription>}
                </CardHeader>

                {price>=0 && <CardContent className="mt-auto">
                    <p className="text-2xl font-bold text-green-600 text-center">
                        S/.{price}
                    </p>
                </CardContent>}

                <CardFooter className="mt-auto flex justify-center">
                    <Button variant={'outline'}>Agregar</Button>
                </CardFooter>

            </Card>
        </>
    )
}

export default CardModalDrink
