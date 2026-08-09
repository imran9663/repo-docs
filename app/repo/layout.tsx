import BreadcrumbBar from "@/components/common/BreadcrumbBar"
import SideBar from "@/components/common/SideBar"
import { Separator } from "@/components/ui/separator"
import { SidebarProvider } from "@/components/ui/sidebar"

const layout = ({children,}:{children:React.ReactNode}) => {
    return (
        <>
            
            <div className="flex flex-row relative h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] min-h-[calc(100vh-4rem)] overflow-hidden">
                <SidebarProvider className="">
                    <SideBar />
                </SidebarProvider>
                <div className=" flex flex-1 flex-col  h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] min-h-[calc(100vh-4rem)] overflow-hidden ">
                    <BreadcrumbBar />
                    <Separator className='mt-2' />
                    {children}
                </div>
            </div>
        </>
  )
}

export default layout