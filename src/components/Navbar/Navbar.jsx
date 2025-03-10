import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo secction */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>

          {/* Menu secction */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-1 lg:gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li
                    className="first:text-primary first:relative 
             first:after:content-[''] first:after:absolute first:after:left-0 first:after:bottom-0 
             first:after:w-full first:after:h-[2px] first:after:bg-primary 
             first:after:scale-x-100 first:after:origin-center first:after:transition-transform first:after:duration-300"
                    key={item.id}
                  >
                    <a
                      className="relative lg:text-xl inline-block py-1 px-2 font-semibold hover:text-primary 
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full 
               after:h-[2px] after:bg-primary after:scale-x-0 after:origin-center 
               after:transition-transform after:duration-300 hover:after:scale-x-100"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons secction */}
          <div className="flex items-center gap-1 xl:gap-4 absolute top-[1.9rem] right-16 sm:right-32 md:static">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>

            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartSimple />
            </button>

            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 pb-2 pt-1 duration-200 hidden lg:block">
              Login
            </button>
          </div>

          {/* Mobaile Hamburger Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
