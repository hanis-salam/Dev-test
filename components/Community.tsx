import { Button } from "./ui/button";

function Community() {
  return (
    <div>
      <div className="py-8">
        <h2 className="text-3xl text-center">
          Banking with friends (community section)
        </h2>
      </div>
      <section>
        <div className="max-w-5xl mx-auto p-2 lg:p-6 md:p-6">
          <div className="grid grid-cols-3 grid-rows-2 auto-rows-auto gap-2">
            <div className="col-span-3 md:col-span-3 lg:col-span-2 border-2 border-gray-200 p-6 py-14 flex flex-col justify-center items-center bg-white sm:col-span-3 mb-2 lg:mb-0 md:mb-0">
              <h2 className="text-lg mb-4">Featured sponsorship story</h2>
              <p className="text-center mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button
                type="button"
                variant={"outline"}
                className="rounded-none"
              >
                Learn more
              </Button>
            </div>
            <div className="col-span-3 row-span-2 sm:col-span-3 md:col-span-3 lg:col-span-1 bg-white border-2 flex flex-col justify-center items-center p-6 ">
              <p className="font-semibold mb-6">Client testimonial</p>
              <p className="text-center mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button
                type="button"
                variant={"outline"}
                className="rounded-none"
              >
                Watch Simon's story
              </Button>
            </div>
            <div className="border-2 border-gray-200 p-6 py-16 flex flex-col justify-center items-center bg-gray-300 col-span-3 mb-2 lg:mb-0 lg:col-span-1 md:mb-0">
              <h2 className="text-lg mb-4">Social feed</h2>
            </div>
            <div className=" border-2 border-gray-200 p-6 px-8 flex flex-col justify-center items-center bg-white col-span-3 mb-2 lg:mb-0 lg:col-span-1 md:mb-0">
              <p className="font-semibold mb-6 text-center">
                Need a sponsor for your community project ?
              </p>
              <Button
                type="button"
                variant={"outline"}
                className="rounded-none"
              >
                Apply for Community Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
