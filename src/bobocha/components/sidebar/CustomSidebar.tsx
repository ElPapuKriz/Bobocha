import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export const CustomSidebar = () => {
    return (
        <aside className="w-40 md:w-60 border-r p-4 space-y-3 bg-linear-to-b from-green-50 to-green-200  ">

            <h2 className="text-green-600 font-bold text-center text-md md:text-xl">
                ¡Menú Bobochástico!
            </h2>

            <div className="flex flex-col gap-1">
                <Link to="/">
                    <Button className="w-full text-green-600 hover:text-blue-500" variant={"outline"}>Venta Rápida</Button>
                </Link>

                <Link to="/about-me">
                    <Button className="w-full text-green-600 hover:text-blue-500" variant={"outline"}>Acerca de mí</Button>
                </Link>
            </div>

            <div className="min-h-screen flex flex-col justify-end">

                <Button asChild
                className="bg-transparent hover:bg-transparent cursor-default text-green-600"
                
                >
                    <a 
                    className=" font-sans text-center hover:text-green-950 cursor-pointer"
                    href="https://www.instagram.com/ironchris637/"
                    target="_blank"
                    >
                        ©ElKriZdev
                    </a>
                    
                </Button>

            </div>



        </aside>
    )
}
