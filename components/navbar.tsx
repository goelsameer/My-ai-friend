"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { RocketIcon } from "@radix-ui/react-icons"
import { Alert,AlertDescription, AlertTitle } from "./ui/alert";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";

const font = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
}
 function AlertDemo(){
  return (
     <div className="px-8">
  <Alert>
    <RocketIcon className="h-4 w-4" />
  <AlertTitle>A Note!</AlertTitle>
  <AlertDescription>
    The api is slow so if you create new people it may take 10-15 minutes to get the first prompt and subsequent prompts could take 2-10 minutess
  </AlertDescription>
</Alert>
</div>);
}
export const Navbar = ({
}: NavbarProps) => {
  const[ctr,setCtr]=useState(0);
  return ( 
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar/>
        <Link href="/">
          <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
            My Ai Friend
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        { (
          <Button onClick={()=>{
            setCtr(1);
            const timer=setTimeout(()=>{
               setCtr(0);
            },4500)
                 return ()=>clearTimeout(timer);
                         }} size="sm" variant="default">
            {ctr==1&&<AlertDemo/>}
           Some info!
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}