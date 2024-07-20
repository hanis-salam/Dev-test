import {
  AreaChart,
  Calculator,
  House,
  LifeBuoy,
  Phone,
  PiggyBank,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MiddleMenu() {
  const middleMenu = [
    {
      name: "Home Loans",
      icon: House,
    },
    {
      name: "Calculators",
      icon: Calculator,
    },
    {
      name: "Rates & Fees",
      icon: AreaChart,
    },
    {
      name: "Savings",
      icon: PiggyBank,
    },
    {
      name: "Insurance",
      icon: LifeBuoy,
    },
    {
      name: "Contact Us",
      icon: Phone,
    },
  ];
  return (
    <section>
      <div className="hidden lg:block md:block border-y-1 border-gray-500 shadow-xl bg-white">
        <div className="max-w-5xl mx-auto p-4">
          <div className="flex justify-between">
            {middleMenu.map((item) => {
              return (
                <div className="text-center text-sm" key={item.name}>
                  <button type="button">
                    <div className="flex justify-center items-center mb-3">
                      <item.icon />
                    </div>
                    <p>{item.name}</p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-6 bg-white hover:no-underline">
              Quick Links
            </AccordionTrigger>
            {middleMenu.map((item) => {
              return (
                <AccordionContent
                  className="p-6 bg-white border-t-2 border-gray-300 flex"
                  key={item.name}
                >
                  <item.icon className="mr-4" />
                  {item.name}
                </AccordionContent>
              );
            })}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default MiddleMenu;
