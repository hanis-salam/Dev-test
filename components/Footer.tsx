import { Phone } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import Link from "next/link";
import Logo from "./ui/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GetInTouchForm from "./ui/GetInTouchForm";

function Footer() {
  const footerLinks = [
    { link: "Privacy" },
    { link: "Security" },
    { link: "Disclosure Documents" },
    { link: "Contact Us" },
  ];
  return (
    <footer className="bg-slate-500 text-white">
      <div className="max-w-5xl mx-auto p-2 lg:p-6 md:p-6 ">
        <div className="grid grid-cols-4 auto-rows-auto ">
          <div className="col-span-4 md:col-span-3 lg:col-span-3 ">
            {/* social icon placement */}
            <div className="flex mb-8 mt-4">
              <Facebook className="mx-2 ml-0" />
              <Instagram className="mx-2" />
              <Phone className="mx-2" />
            </div>

            {/* footer links */}
            <div className=" font-semibold mb-8 hidden md:flex lg:flex">
              {footerLinks.map((item, index) => {
                return (
                  <Link href={"/"} key={index} className="flex">
                    <p>{item.link}</p>
                    <p className="mx-4">
                      {footerLinks.length === index + 1 ? "" : "|"}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* footer text */}
            <p className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="hidden md:col-span-1 lg:col-span-1 md:block lg:block p-4">
            <div className="mb-2">
              <p className="font-semibold">Get in touch</p>
            </div>
            <GetInTouchForm />
          </div>
          <div className="lg:hidden md:hidden col-span-4 mb-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="hover:no-underline">
                  <p className="font-semibold">Get in touch</p>
                </AccordionTrigger>
                <AccordionContent>
                  <GetInTouchForm />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* Logo */}
        <div className="my-4">
          <Logo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
