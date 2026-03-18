import { Button } from "@/components/ui/button"
import { BookAIcon, MenuIcon, Zap } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"

export const CustomSidebar = () => {

    const [colapso, setColapso] = useState(true)

    return (
        <aside className={`flex flex-col border-r min-h-screen p-4 bg-linear-to-b from-green-50 to-green-200 transition-all duration-300 ${colapso ? "w-16" : "w-40"} `}>

            <div className="flex flex-col gap-2">

                <span
                    className="text-green-600 font-bold text-center text-sm md:text-xl hover:text-green-900 cursor-pointer my-10 flex items-center justify-center"
                    onClick={() => setColapso(prev => !prev)}
                >
                    {colapso ? <MenuIcon className="md:size-7" /> : "¡Menú Bobochástico!"}
                </span>

                <Link to="/">
                    <Button
                        className="w-full flex items-center justify-center gap-2 text-green-600 hover:text-blue-500"
                        variant="outline"
                    >
                        <Zap />

                        {!colapso && (
                            <span className="text-xs md:text-sm">
                                Venta Rápida
                            </span>
                        )}

                    </Button>
                </Link>

                <Link to="/about-me">
                    <Button
                        className="w-full flex items-center justify-center gap-2 text-green-600 hover:text-blue-500"
                        variant="outline"
                    >
                        <BookAIcon />

                        {!colapso && (
                            <span className="text-wrap text-xs md:text-sm">
                                Acerca de mí
                            </span>
                        )}

                    </Button>
                </Link>

            </div>

            <div className="min-h-screen flex flex-col justify-end">

                <Button
                    asChild
                    className="bg-transparent hover:bg-transparent cursor-default text-green-500 hover:text-green-700"
                >
                    <a
                        className="text-[10px] writing-mode-vertical   cursor-pointer"
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