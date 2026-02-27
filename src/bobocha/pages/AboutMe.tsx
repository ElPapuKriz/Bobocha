import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const AboutMe = () => {
    return (
        <>
            <div className="flex flex-col gap-5">
                <Card className="mx-5 my-5 max-w-80">
                    <CardHeader>
                        <CardTitle >Sobre mí</CardTitle>
                        <CardDescription>¿PORQUÉ HICE ESTÓ?</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-purple-200 rounded-full ">

                        <img
                            className="backdrop-blur-xs rounded-full w-auto "
                            src="https://marvelrivals.wiki.gg/images/Gambit_Prestige_Artwork.png?5c3e01" />
                            
                        </div>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <CardDescription>Que no se note que estoy aburrido.</CardDescription>
                    </CardFooter>
                </Card>
            </div>


        </>
    )
}
