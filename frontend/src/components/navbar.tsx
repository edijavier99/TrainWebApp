import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggleButton } from "./ThemeChanger";
import { useNavigate } from "react-router-dom";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/dashboard/", current: false },
  { name: "My History", href: "/about-me/", current: false },
  { name: 'Blog', href: "/blog/", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const navigate = useNavigate();
  
  const isHomePage = window.location.pathname === "/";

  const onLogoClick = () => {
    navigate("/");
  };

  // Función para manejar el clic en los elementos de navegación
  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <nav className="py-1 bordertext-black md:border-0">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div onClick={onLogoClick} className="flex cursor-pointer space-x-3 items-center lg:px-0 justify-center">
            <img
              className="h-12 w-auto cursor-pointer"
              src={"https://www.tokunize.com/assets/logo_only_black-DlYer6eb.png"}
              alt="Tokunize"
            />
            <p className="italic font-bold text-2xl"></p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex md:px-0 sm:space-x-4 sm:ml-auto">
            {!isHomePage && (
              <button
                onClick={() => handleNavigation("/")}
                className={classNames(
                  'text-[17px] hover:bg-[#FF7F50] duration-300 ease-in-out',
                  'px-3 flex items-center rounded-md text-sm font-medium'
                )}
              >
                Home
              </button>
            )}
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={classNames(
                  item.current ? '' : 'text-[17px] hover:bg-[#FF7F50] duration-300 ease-in-out',
                  'px-3 flex items-center rounded-md text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}

            <div className="flex justify-end space-x-4">
              {/* Agrega otros botones si es necesario */}
            </div>
            <ThemeToggleButton />
          </div>

          {/* Mobile menu button using Sheet */}
          <div className="absolute right-0 flex items-center justify-end lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-3 space-y-4 ">
                  {!isHomePage && (
                    <button
                      onClick={() => handleNavigation("/")}
                      className={classNames(
                        'flex font-semibold hover:bg-[#A0CC28] duration-300 ease-in-out',
                        'rounded-md p-2 font-medium duration-300 ease-in-out'
                      )}
                    >
                      Home
                    </button>
                  )}
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'text-xl text-black' : 'flex font-semibold hover:bg-[#FF7F50] duration-300 ease-in-out',
                        'rounded-md p-2 font-medium duration-300 ease-in-out'
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <ThemeToggleButton />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
