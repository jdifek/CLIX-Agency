"use client";

import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold">WebCraft Pro</span>
        </Link>
        
        <div className="flex items-center space-x-6 ml-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/admin" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/admin" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Admin
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}