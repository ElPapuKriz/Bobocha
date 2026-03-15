import { LayoutMain } from "@/bobocha/components/LayoutMain";
import { AboutMe } from "@/bobocha/pages/AboutMe";
import Orders from "@/bobocha/pages/Orders";
import { BobochaMain } from "@/BobochaMain";
import { createBrowserRouter} from "react-router";
export const routerApp = createBrowserRouter([

    {
        path:"/",
        element:<LayoutMain/>,
        children:[
            {path:"",element:<BobochaMain/>},
            {path:"/about-me",element:<AboutMe/>},
            {path:":idSlug",element:<Orders/>},
        ]
    },
    
])