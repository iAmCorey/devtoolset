"use client"

import * as React from "react"
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  HardDriveIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

export function ThemeModeButton() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-sans opacity-90">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center justify-start">
          <SunIcon size={16} className="mx-2 opacity-70"/>
          <div className="text-sm">Light</div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center justify-start">
          <MoonIcon size={16} className="mx-2 opacity-70"/>
          <div className="text-sm">Dark</div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center justify-start">
          <HardDriveIcon size={16} className="mx-2 opacity-70"/>
          <div className="text-sm">System</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
