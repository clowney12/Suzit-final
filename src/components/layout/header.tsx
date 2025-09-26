"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ inSheet }: { inSheet?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => inSheet && setIsMobileMenuOpen(false)}
          className={cn(
            'transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary font-semibold' : 'text-neutral-100',
            inSheet && 'py-2 text-lg'
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-md' : 'bg-black'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-white font-headline">
          Suzit<span className="text-primary">Tech</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button asChild>
            <Link href="/contact">Request Demo</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-neutral-800 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-l-neutral-800 w-full">
              <div className="flex flex-col h-full">
                 <div className="flex justify-between items-center border-b border-b-neutral-800 pb-4">
                  <Link href="/" className="text-2xl font-bold text-white font-headline" onClick={() => setIsMobileMenuOpen(false)}>
                    Suzit<span className="text-primary">Tech</span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-neutral-800 hover:text-white">
                      <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                 </div>
                <nav className="mt-8 flex flex-1 flex-col items-center gap-6">
                  <NavLinks inSheet />
                </nav>
                 <div className="mt-auto py-6">
                    <Button asChild className="w-full" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                        <Link href="/contact">Request Demo</Link>
                    </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
