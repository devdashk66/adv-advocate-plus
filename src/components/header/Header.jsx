"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-transparent border-gray-200 ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4"
      >
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse opacity-80 hover:opacity-90 duration-200"
        >
          <span className="text-default text-3xl font-bold">ADV</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-6 h-6" />
        </button>
        <div className={`w-full lg:block lg:w-auto`}>
          <ul
            className={`bg-white absolute top-0 h-screen lg:h-fit ${
              isMobileMenuOpen ? "left-0" : "-left-96"
            } py-10 lg:py-0 px-10 lg:px-0  h-full flex-col lg:flex-row  lg:static lg:bg-transparent flex gap-5 lg:gap-14 shadow-2xl lg:shadow-none font-semibold text-white duration-200`}
          >
            <li>
              <Link
                className={`hover:text-default lg:duration-200 ${
                  pathname === "/" ? "text-default border-b border-default" : ""
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`hover:text-default lg:duration-200 ${"hi"}`}
                    >
                      Dropdown
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col gap-3">
                      <NavigationMenuLink>
                        <a href="#">Dropdown_Item</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <a href="#">Dropdown_Item</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <a href="#">Dropdown_Item</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <a href="#">Dropdown_Item</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <a href="#">Dropdown_Item</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <a href="#">Dropdown_Item</a>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <Link
                className={`hover:text-default lg:duration-200 ${
                  pathname === "/services"
                    ? "text-default border-b border-default"
                    : ""
                }`}
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-default lg:duration-200 ${
                  pathname === "/attorneys"
                    ? "text-default border-b border-default"
                    : ""
                }`}
                href="attorneys"
              >
                Attorneys
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-default lg:duration-200 ${
                  pathname === "/about"
                    ? "text-default border-b border-default"
                    : ""
                }`}
                href="about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-default lg:duration-200 ${
                  pathname === "/contact"
                    ? "text-default border-b border-default "
                    : ""
                }`}
                href="contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
