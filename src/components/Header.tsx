"use client";

import { FC } from "react"
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react";
import { useTheme } from "next-themes"
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils"


const navItems = [
  { label: "Blog", href: "/#blog" },
  { label: "Dashboard", href: "/#dashboard" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
]

const Navbar: FC = () => {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark"

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto">
        <div
          className={cn(
            // common glass styles
            "backdrop-blur-md shadow-lg flex items-center justify-between",
            "transition-all duration-300",
            "px-5 py-4",
            // glass forst styles
            "bg-white/30 dark:bg-neutral-900/50 dark:border-neutral-800",
            
          )}
        >
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-gray-900 dark:text-gray-100">
            P
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition",
                  "text-gray-800 dark:text-gray-200",
                  "hover:text-blue-500 dark:hover:text-blue-400"
                )}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Menu 
                  className={cn(
                    "text-gray-800 dark:text-gray-200",
                  )}
                />
              </SheetTrigger>
              <SheetContent side="right">
                <div className="mt-4 ml-4">
                <ThemeToggle />
                </div>

                <div className="flex flex-col space-y-4 mt-8 px-8 py-8">
                  {navItems.map((item) => (
                    <>
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "transition",
                          "text-gray-800 dark:text-gray-200",
                          "hover:text-blue-500 dark:hover:text-blue-400"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <Separator />
                    </>
                ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
