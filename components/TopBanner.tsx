import { Button } from "./ui/button";

function TopBanner() {
  return (
    <section className="bg-green-700 text-white">
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-5xl font-semibold mt-6 mb-4">
          <h1>Special Housing</h1>
          <h1>Home Loan</h1>
        </div>
        <div className="flex">
          <h2 className="text-4xl">3.89</h2>
          <p className="text-2xl mr-4">%p.a.</p>
          <h2 className="text-4xl">4.03</h2>
          <p className="text-2xl">%p.a.</p>
        </div>
        <div>
          <h2 className="text-4xl my-2">Great low rates made simple</h2>
        </div>
        <div className="mt-10">
          <Button type="button" className="bg-blue-700 text-lg px-6">
            Apply now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
