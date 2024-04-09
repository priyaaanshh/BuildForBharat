import React from "react";
import Logo from "@/assets/images/shoptalk.png";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-button";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { SearchBar } from "./searchBar";

const Navbar = () => {
  const Logout = () => {
    return (
      <Link href="/login">
        <Button size="icon" variant="outline">
          <LogOut size={16} />
        </Button>
      </Link>
    );
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex w-full">
          <Link href="/" className="mr-6 flex items-center space-x-1">
            <Image src={Logo} alt="" className="size-16" priority />
            <span className="hidden font-bold sm:inline-block ">ShopTalk</span>
          </Link>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <SearchBar />
            <ThemeToggle />
            <Logout />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
