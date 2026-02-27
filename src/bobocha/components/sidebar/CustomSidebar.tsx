import { Button } from "@/components/ui/button"
import { BookAIcon, Zap } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"

export const CustomSidebar = () => {

    const [colapso, setColapso] = useState(false)

    return (
        <aside className={` flex flex-col border-r p-4 space-y-3 bg-linear-to-b from-green-50 to-green-200 transition-all duration-300`}>

            


            <h2 className="text-green-600 font-bold text-center text-md md:text-xl hover:text-green-900 cursor-pointer"
            onClick={()=>{setColapso(prev=>!prev)}}
            >
                {colapso?"¡Menú!":"¡Menú Bobochástico!"}            
            </h2>

            

            <div className="flex flex-col gap-1 ">
                <Link to="/">
                    <Button className={`w-full text-green-600 hover:text-blue-500`} variant={"outline"}>{colapso?"":"Venta Rápida"}<Zap/></Button>
                </Link>

                <Link to="/about-me">
                    <Button className="w-full text-green-600 hover:text-blue-500" variant={"outline"}>{colapso?"":"Acerca de mí"}<BookAIcon/></Button>
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
