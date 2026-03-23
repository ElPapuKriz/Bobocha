import { Button } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { ShoppingCartIcon } from "lucide-react"

export const CustomHeader = () => {
    return (
        <>


            <CardHeader className="bg-linear-to-r from-green-600 to-blue-500 p-3">
                <div className="w-full flex flex-1">
                    <div>
                        <img
                        src="https://bobocha.com.pe/wp-content/uploads/Logo-Bobocha-fondo-blanco-512x512-1-131x131.png"
                        height={"100px"}
                        width={"100px"}
                    />
                    </div>
                    
                    <div className="flex flex-1 items-center justify-end">
                        <Button
                        onClick={()=>{alert("Aqui se veran tus futuras compras.")}}
                        ><ShoppingCartIcon className="text-blue-500"/></Button>
                    </div>
                    
                </div>


            </CardHeader>


        </>
    )
}
