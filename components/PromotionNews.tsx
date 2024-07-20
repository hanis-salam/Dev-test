import Carousel from "./ui/Carousel";
import { Button } from "./ui/button";

function PromotionNews() {
  return (
    <section className="mt-6 ">
      <div className="max-w-5xl mx-auto p-2 lg:p-6 md:p-6">
        <div className="grid grid-cols-3 auto-rows-auto">
          <div className="col-span-3 border-2 border-gray-200 p-6 py-16 flex flex-col justify-center items-center bg-white sm:col-span-2  lg:mb-0 md:mb-0">
            <h2 className="text-lg mb-4">Promotional campaign</h2>
            <Button type="button" variant={"outline"} className="rounded-none">
              Learn more
            </Button>
          </div>
          <div className="col-span-3 sm:col-span-1 bg-white border-2">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionNews;
