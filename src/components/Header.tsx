"use client";

import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 bg-white shadow-md fixed top-0 z-50 flex justify-between items-center">
      <h1 className="text-xl font-bold">Pritesh Patel</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4">
        <Link href="#projects" className="hover:underline">Projects</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </nav>

      {/* Mobile Nav (Sheet) */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
              <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
