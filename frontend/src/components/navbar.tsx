import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggleButton } from "./ThemeChanger";
import { useState } from "react";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: "My History", href: "/about-me/", current: false },
  // { name: "Blog", href: "/blog/", current: false },
  // { name: "Dashboard", href: "/dashboard/", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const isHomePage = window.location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="py-1 bordertext-black md:border-0">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div
            className="flex cursor-pointer space-x-3 items-center lg:px-0 justify-center"
          >
            <Link to="/">
              <img
                className="h-12 w-auto"
                src={"https://www.tokunize.com/assets/logo_only_black-DlYer6eb.png"}
                alt="Tokunize"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex md:px-0 sm:space-x-4 sm:ml-auto">
            {!isHomePage && (
              <Link
                to="/"
                className={classNames(
                  "text-[17px] hover:bg-[#FE7F50] duration-300 ease-in-out",
                  "px-3 flex items-center rounded-md text-sm font-medium"
                )}
              >
                Home
              </Link>
            )}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current
                    ? ""
                    : "text-[17px] hover:bg-[#FF7F50] duration-300 ease-in-out",
                  "px-3 flex items-center rounded-md text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex justify-end space-x-4">
              {/* Agrega otros botones si es necesario */}
            </div>
            <ThemeToggleButton />
          </div>

          {/* Mobile menu button using Sheet */}
          <div className="absolute right-0 flex items-center justify-end lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-3 space-y-4">
                  {!isHomePage && (
                    <Link
                      to="/"
                      onClick={closeMenu}
                      className={classNames(
                        "flex font-semibold hover:bg-[#FE7F50] duration-300 ease-in-out",
                        "rounded-md p-2 font-medium duration-300 ease-in-out"
                      )}
                    >
                      Home
                    </Link>
                  )}
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? "page" : undefined}
                      onClick={closeMenu}
                      className={classNames(
                        item.current
                          ? "text-xl text-black"
                          : "flex font-semibold hover:bg-[#FF7F50] duration-300 ease-in-out",
                        "rounded-md p-2 font-medium duration-300 ease-in-out"
                      )}
                    >
                      {item.name}
                    </Link>
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
