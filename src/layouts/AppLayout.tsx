import Header from "@/components/global/Header"
import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="flex flex-col h-[100vh] w-screen ">
      <Header />
      
      <div className="flex justify-center mt-0 pt-12 px-4 overflow-auto">
        <Outlet />
      </div>
      
    </div>
  )
}

export default AppLayout