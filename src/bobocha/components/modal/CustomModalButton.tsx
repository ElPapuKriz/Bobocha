import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router"

interface Props{

    to?:string;
    btnName?:string;
    children?:ReactNode;
    title:string;
    description:string;


}

const CustomModalButton = ({to, btnName,children,title,description}:PropsWithChildren<Props>,) => {
    return (
        <Dialog>
            <>
                <DialogTrigger asChild>
                <Button
                    className="w-full"
                    asChild
                    onClick={() => {
                        if (to) return
                    }}
                >
                    {to ? <Link to={to}>{btnName}</Link> : <span>{btnName}</span>}
                </Button>
            </DialogTrigger>
            <DialogContent className=" md:max-w-4xl flex flex-col">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                    {children}
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Comprar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
            </>
        </Dialog>
    )
}

export default CustomModalButton
