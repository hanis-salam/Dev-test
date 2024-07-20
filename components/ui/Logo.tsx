import { Landmark } from "lucide-react";
import Link from "next/link";

function logo() {
  return (
    <div className="flex lg:flex-1 text-white">
      <Link href={"/"} className="-m-1.5 p-1.5  flex items-center space-x-2">
        <Landmark className="h-6" />
        <p className="font-semibold">Bank of Demo</p>
      </Link>
    </div>
  );
}

export default logo;
