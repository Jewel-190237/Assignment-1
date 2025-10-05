
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Dropdown, Drawer } from "antd";
import {
   IoChevronDownOutline,
   IoMenuOutline,
} from "react-icons/io5";
// import LoginPage from "./loginPage/login.js"

const Navbar = () => {
   const pathname = usePathname();
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const pagesItems = [
      { path: "/blog", label: "Blog" },
      { path: "/service", label: "Services" },
      { path: "/privacy", label: "Privacy & Policy" },
      { path: "/privacy", label: "Terms & Conditions" },
   ];
   return (
      <div className="w-full font-lato overflow-hidden relative z-20"
         style={{
            // background: "linear-gradient(105deg, #361A67 11.27%, #1B1B31 20.43%, #251F40 57.77%, #412178 87.6%)",
            background: "#28303F",
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
         }}

      >
         <div className="hostin-container flex flex-row justify-between items-center lg:py-1 bg-[#28303F] text-[#FFFFFF]" >
            {/* Logo */}
            <Link href="/">
               <div className="md:w-[133px] w-[100px] h-[40px] md:h-[40px] lg:w-[153px] lg:h-[46px] flex justify-start items-center -ml-2 lg:ml-0 mt-1">
                  <Image
                     src="/logo.png"
                     width={153}
                     height={46}
                     className="object-cover"
                     alt="logo"
                  />
               </div>
            </Link>
            {/* Desktop Menu */}
            <ul className=" description1 list-none xl:space-x-5 space-x-3 items-center hidden lg:flex">
               <NavItem
                  path="/doctor"
                  label={"Doctor"}
                  pathname={pathname}

               />
               <NavItem
                  path="/diagnostic"
                  label={"Diagnostic"}
                  pathname={pathname}

               />
               <NavItem
                  path="/blood"
                  label={"Blood Bank"}
                  pathname={pathname}

               />
               <DropdownMenuTrigger
                  label={"Others"}
                  items={pagesItems}

               />
               <NavItem
                  path="/dental"
                  label={"Dental"}
                  pathname={pathname}

               />
            </ul>
            <div className="flex items-center gap-0.5 md:gap-1">
               {/* <LoginPage /> */}
               <button
                  className={`lg:hidden text-primary text-2xl `}
                  onClick={() => setIsDrawerOpen(true)}
               >
                  <IoMenuOutline className="text-3xl md:text-4xl relative z-20 sm:ml-0" />
               </button>
            </div>
         </div>

         <Drawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={() => setIsDrawerOpen(false)}
            open={isDrawerOpen}
            className="lg:hidden"
            width={250}
         >
            <div className="flex flex-col gap-4">
               <Link
                  href="/doctor"
                  className="text-lg"
                  onClick={() => setIsDrawerOpen(false)}
               >
                  Doctor
               </Link>
               <Link
                  href="/diagnostic"
                  className="text-lg"
                  onClick={() => setIsDrawerOpen(false)}
               >
                  Diagnostic
               </Link>
               <Link
                  href="/blood"
                  className="text-lg"
                  onClick={() => setIsDrawerOpen(false)}
               >
                  Blood Bank
               </Link>
               <Link
                  href="/dental"
                  className="text-lg"
                  onClick={() => setIsDrawerOpen(false)}
               >
                  Dental
               </Link>
               <Link
                  href="/more"
                  className="text-lg"
                  onClick={() => setIsDrawerOpen(false)}
               >
                  More Menu
               </Link>
               <MobileDropdown title="Pages" items={pagesItems} />
            </div>
         </Drawer>
      </div>
   );
};

export default Navbar;

const NavItem = ({ path, label, pathname, textColor }) => (
   <li
      className={`description1 hover:text-primary ${pathname === path
         ? "text-primary"
         : textColor === "text-[#FFFFFF]"
            ? "text-[#FFFFFF]"
            : "text-[#FFFFFF]"
         }`}
   >
      <Link href={path}>{label}</Link>
   </li>
);

const DropdownMenuTrigger = ({ label, items, textColor }) => (
   <li className={`description1 ${textColor} hover:text-primary`}>
      <Dropdown
         menu={{
            items: items.map(({ path, label }) => ({
               key: path,
               label: (
                  <Link href={path} className="block w-full">
                     {label}
                  </Link>
               ),
            })),
         }}
         trigger={["hover"]}
      >
         <span className="flex items-center gap-2 cursor-pointer">
            {label}
            <IoChevronDownOutline className="text-lg mt-[2px]" />
         </span>
      </Dropdown>
   </li>
);

const MobileDropdown = ({ title, items }) => {
   const [open, setOpen] = useState(false);
   const pathname = usePathname();

   return (
      <div className="w-full">
         <button
            onClick={() => setOpen(!open)}
            className="description2 flex justify-between items-center w-full py-2">
            {title}
            <IoChevronDownOutline
               className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                  }`}
            />
         </button>

         {open && (
            <div className="flex flex-col ps-4">
               {items.map((item) => (
                  <Link
                     key={item.path}
                     href={item.path}
                     onClick={() => location.assign(item.path)}
                     className={`py-2 text-sm ${pathname === item.path
                        ? "text-primary description2"
                        : "description2"
                        } hover:text-primary`}
                  >
                     {item.label.toUpperCase()}
                  </Link>
               ))}
            </div>
         )}
      </div>
   );
};
