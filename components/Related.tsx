"use client";
import Link from "next/link";
import links from "../lib/linksList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Related() {
  const products = links.products;
  const legal = links.legal;
  const tools = links.tools;
  const useful = links.useful;

  return (
    <section>
      <div className="mt-6 hidden lg:block md:block">
        <div className="max-w-5xl mx-auto p-2 lg:p-6 md:p-6">
          <div className="grid grid-cols-4 auto-rows-auto gap-4">
            <div className="sm:col-span-1 border-2">
              <p className="font-semibold pb-2">PRODUCTS</p>
              {products.map((item, index) => {
                return (
                  <Link href={"/"} key={index}>
                    <div className="text-sm py-1">
                      <p>{item.link}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="sm:col-span-1 border-2">
              <p className="font-semibold pb-2">TOOLS & CALCULATORS</p>
              {tools.map((item, index) => {
                return (
                  <Link href={"/"} key={index}>
                    <div className="text-sm py-1">
                      <p>{item.link}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="sm:col-span-1 border-2">
              <p className="font-semibold pb-2">LEGAL STUFF</p>
              {legal.map((item, index) => {
                return (
                  <Link href={"/"} key={index}>
                    <div className="text-sm py-1">
                      <p>{item.link}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="sm:col-span-1 border-2">
              <p className="font-semibold pb-2">USEFUL LINKS</p>
              {useful.map((item, index) => {
                return (
                  <Link href={"/"} key={index}>
                    <div className="text-sm py-1">
                      <p>{item.link}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-6 bg-white hover:no-underline">
              PRODUCTS
            </AccordionTrigger>
            {products.map((item, index) => {
              return (
                <AccordionContent
                  className="p-2 bg-white border-t-2 border-gray-300 flex"
                  key={index}
                >
                  {item.link}
                </AccordionContent>
              );
            })}
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="p-6 bg-white hover:no-underline">
              TOOLS & CALCULATORS
            </AccordionTrigger>
            {tools.map((item, index) => {
              return (
                <AccordionContent
                  className="p-2 bg-white border-t-2 border-gray-300 flex"
                  key={index}
                >
                  {item.link}
                </AccordionContent>
              );
            })}
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="p-6 bg-white hover:no-underline">
              LEGAL STUFF
            </AccordionTrigger>
            {legal.map((item, index) => {
              return (
                <AccordionContent
                  className="p-2 bg-white border-t-2 border-gray-300 flex"
                  key={index}
                >
                  {item.link}
                </AccordionContent>
              );
            })}
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="p-6 bg-white hover:no-underline">
              USEFUL LINKS
            </AccordionTrigger>
            {useful.map((item, index) => {
              return (
                <AccordionContent
                  className="p-2 bg-white border-t-2 border-gray-300 flex"
                  key={index}
                >
                  {item.link}
                </AccordionContent>
              );
            })}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default Related;
