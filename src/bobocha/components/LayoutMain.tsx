import { Outlet } from "react-router"
import { CustomHeader } from "./header/CustomHeader"
import { CustomSidebar } from "./sidebar/CustomSidebar"

export const LayoutMain = () => {
    return (
        <div className="min-h-screen flex flex-col ">

            {/* Header */}
            <CustomHeader/>

            {/* Body */}
            <div className="flex flex-1 ">

                {/* Sidebar */}
                <CustomSidebar/>

                {/* Content Dinamic */}
                <div className="flex-1 overflow-x-auto scroll-smooth">
                    
                    <Outlet/>
                    
                </div>

            </div>
        
        </div>
    )
}
