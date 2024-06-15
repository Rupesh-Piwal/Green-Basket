import Image from "next/image";
import Logo from "@/public/Green-Basket-Logo.jpg";
import { LayoutGrid, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className=" py-3 flex items-center justify-between px-5 shadow-md">
      <div className="flex gap-12">
        <Image
          className="cursor-pointer"
          src={Logo}
          alt="logo"
          width={150}
          height={150}
        />
        <h2 className="flex gap-2 items-center px-8 rounded-full bg-gray-400 cursor-pointer">
          <LayoutGrid className="h-5 w-5" />
          Category
        </h2>
        <div className="flex items-center gap-5  px-2 rounded-full border border-gray-400">
          <Search />
          <input className="outline-none" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h2 className="flex  gap-2">
          <ShoppingCart />
          <span>0</span>
        </h2>
        <Button className="text-white rounded">Login</Button>
      </div>
    </div>
  );
};

export default Header;
