import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-3 sm:p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
          <Link to="/">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold select-none whitespace-nowrap">
              My Store
            </h1>
          </Link>

          <NavigationMenu className="relative">
            <NavigationMenuList className="flex space-x-3 sm:space-x-4 md:space-x-5 items-center">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="hover:text-yellow-400 hover:underline text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-yellow-400 hover:underline text-xs sm:text-sm md:text-base bg-transparent data-[state=open]:bg-gray-700 p-2 rounded whitespace-nowrap">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-full left-0 bg-white text-black p-3 rounded shadow-lg w-48 sm:w-56 z-50">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <Link
                        to="/category/electronics"
                        className="hover:text-[#2563eb] p-2 rounded hover:bg-gray-100 text-sm"
                      >
                        Electronics
                      </Link>
                      <Link
                        to="/category/accessories"
                        className="hover:text-[#059669] p-2 rounded hover:bg-gray-100 text-sm"
                      >
                        Accessories
                      </Link>
                      <Link
                        to="/category/clothes"
                        className="hover:text-[#7c3aed] p-2 rounded hover:bg-gray-100 text-sm"
                      >
                        Clothes
                      </Link>
                    </div>

                    <div className="flex flex-col">
                      <Link
                        to="/category/makeup"
                        className="hover:text-[#db2777] p-2 rounded hover:bg-gray-100 text-sm"
                      >
                        Makeup
                      </Link>
                      <Link
                        to="/category/games"
                        className="hover:text-[#dc2626] p-2 rounded hover:bg-gray-100 text-sm"
                      >
                        Games
                      </Link>
                      <Link
                        to="/category/books"
                        className="hover:text-[#ea580c] p-2 rounded hover:bg-gray-100 text-sm"
                      >
                        Books
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/help"
                  className="hover:text-yellow-400 hover:underline text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Need Help?
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>
          <Link to="/cart" className="hover:text-yellow-400 p-1 sm:p-2 block">
            <FaShoppingCart size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
