
import { Outlet } from "react-router-dom";
import SideMenu from "@/components/dashboard/SideMenu";
import {Grid2x2} from "lucide-react"
import { FaUser,FaCalendarAlt } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";

const DashboardLayout = () => {

  const menuData = [
    { name: 'Overview', link: '/dashboard/', icon:<Grid2x2 /> },
    { name: 'Clients', link: '/clients/', icon:<FaUser /> },
    { name: 'Appointments', link: '/appointments/', icon:<FaCalendarAlt /> },
    { name: 'Articles', link: '/articles/', icon:<FaPaperclip /> },
  ]
  

  return (
    <div className="flex min-h-screen">
      <SideMenu data={menuData} onMenuClick={() => {}} />
      <div className="flex-grow p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;