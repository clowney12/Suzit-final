import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-t-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">

            <Link href="/" className="ml-4 mb-2 flex items-center gap-2">
              <Image
                src="/assets/image_2025-09-30_011820536-removebg-preview.png"   // 👈 replace with your logo path in /public
                alt="Suzit Tech Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-white font-headline">
                Suzit<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="mt-2 text-neutral-400 text-sm">

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;explore, create, deliver
            </p>
            <div className="ml-6 mt-4 flex space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services#automation" className="text-sm text-neutral-400 hover:text-primary">Industrial Automation</Link></li>
              <li><Link href="/services#agv" className="text-sm text-neutral-400 hover:text-primary">AGV Solutions</Link></li>
              <li><Link href="/services#automobile" className="text-sm text-neutral-400 hover:text-primary">Automobile Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-neutral-400">
                  contact@suzittech.com
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-neutral-400">
                  +91 6361 445 483
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-neutral-400">123 Automation Ave, Industry City, 45678</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-t-neutral-800 pt-6 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Suzit Navigator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
