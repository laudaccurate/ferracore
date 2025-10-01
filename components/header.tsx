"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Ferracore</h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Platform
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Solutions
              </a>
              <a href="#compliance" className="text-foreground hover:text-primary transition-colors">
                Compliance
              </a>
              <a href="#developers" className="text-foreground hover:text-primary transition-colors">
                Developers
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get API Access</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border/40">
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Platform
              </a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Solutions
              </a>
              <a href="#compliance" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Compliance
              </a>
              <a href="#developers" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Developers
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get API Access
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
