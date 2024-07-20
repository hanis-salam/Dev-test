"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { LockKeyhole, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import menu from "../lib/menu";
import subHeaderMenu from "../lib/subHeaderMenu";
import Logo from "./ui/Logo";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-blue-800 sticky top-0 z-10">
      {/* first header row */}
      <nav
        className="flex max-w-full items-center justify-between p-2 bg-blue-800 lg:p-0 md:p-0"
        aria-label="Global"
      >
        {/* logo */}
        <div className="ml-6">
          <Logo />
        </div>

        {/* hamburger */}
        <div className="flex md:hidden lg:hidden">
          <button
            type="button"
            aria-label="hamburger menu"
            className="inline-flex items-center  rounded-md p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden items-center text-xs md:flex">
          {/* BSB code  */}
          <div>
            <p className="text-white font-semibold mr-2">BSB 802 126</p>
          </div>

          {/* eStatement login */}
          <div className="flex">
            <button
              type="button"
              className="inline-flex items-center p-2 text-white bg-blue-900"
            >
              <LockKeyhole className="text-white mr-2" />
              <p className="text-white font-semibold">eStatement Login</p>
            </button>
          </div>

          {/* Internet banking */}
          <div className="flex">
            <button
              type="button"
              className="inline-flex items-center p-2 text-white bg-blue-950"
            >
              <LockKeyhole className="text-white mr-2" />
              <p className="text-white font-semibold">Internet Banking</p>
            </button>
          </div>
        </div>
      </nav>

      {/* second header row */}
      <nav
        className="hidden max-w-full items-center justify-between p-1 bg-slate-200 flex-row-reverse md:flex border-b-1 border-gray-500 shadow-gray-400 shadow-inner"
        aria-label="Global"
      >
        <div className="flex items-center text-sm space-x-8 text-gray-700 mr-4">
          {subHeaderMenu.map((item) => {
            return (
              <Link href={"/"} key={item.name}>
                <p className="">{item.name}</p>
              </Link>
            );
          })}

          {/* Search */}
          <Link href={"/"} aria-label="Search">
            <Search size={16} />
          </Link>
        </div>
      </nav>

      {/* hamburger menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring=gray-900/10">
          <div className="flex items-center justify-between">
            {/* logo */}
            <Logo />
            {/* close button */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6 text-gray-200" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4">
            <div className=" py-4 text-white">
              <div className="flex text-blue-900">
                <button
                  type="button"
                  className="flex items-center p-2 bg-white rounded-md w-full mr-2"
                >
                  <LockKeyhole className="mr-2" />
                  <p className="font-semibold">eStatement Login</p>
                </button>
                <button
                  type="button"
                  className="flex items-center p-2 bg-white rounded-md w-full"
                >
                  <LockKeyhole className="mr-2" />
                  <p className="font-semibold">Internet Banking</p>
                </button>
              </div>
            </div>
          </div>

          {menu.map((item) => {
            return (
              <div key={item.name} className="mt-4 py-2 text-white">
                <button type="button" className="flex items-center">
                  <item.icon className="mr-4" />
                  <p className="font-semibold">{item.name}</p>
                </button>
              </div>
            );
          })}
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
