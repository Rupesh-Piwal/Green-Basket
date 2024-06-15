"use client";

import Image from "next/image";
import Logo from "@/public/Green-Basket-Logo.jpg";
import { LayoutGrid, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    console.log(
      "NEXT_PUBLIC_BACKEND_BASE_URL:",
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL
    );

    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory()
      .then((response) => {
        console.log(response.data.data);
        setCategoryList(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching category list:", error);
      });
  };

  return (
    <div className=" py-1.5 flex items-center justify-between px-5 shadow-md">
      <div className="flex gap-12">
        <Image
          className="cursor-pointer"
          src={Logo}
          alt="logo"
          width={150}
          height={150}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center px-8 py-2 rounded-full bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <DropdownMenuItem className="cursor-pointer flex gap-2 items-center">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                      category?.attributes?.icon?.data?.[0]?.attributes?.formats
                        ?.thumbnail?.url ||
                    category?.attributes?.icon?.data?.[0]?.attributes?.url
                  }
                  unoptimized={true}
                  alt="category-image"
                  width={25}
                  height={25}
                />
                <h2 key={index}>{category?.attributes?.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex items-center gap-5  px-2 rounded-full border border-gray-400">
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
