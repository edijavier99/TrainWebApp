


import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landingPage/Footer";


const MainLayout = () => {
  return (
    <div className="px-[20px] md:px-[70px] pb-[40px]">
      <header>
        <Navbar/>
      </header>
      <main  className="min-h-screen">
        <Outlet /> 
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;