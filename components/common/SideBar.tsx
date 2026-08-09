import { Sidebar } from "../ui/sidebar"
import { FileTree } from "./FileTree"
import UserInfoCard from "./UserInfoCard"


const SideBar = () => {
  return (
      <>
          <Sidebar variant="inset" className="ring-1 bg-background">
              <UserInfoCard/>
              <FileTree />
          </Sidebar>
      </>
  )
}

export default SideBar