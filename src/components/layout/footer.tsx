import Link from 'next/link';
import { Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-foreground font-headline">
              Suzit<span className="text-primary">Tech</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Engineering the Future of Automation with innovative and reliable solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services#automation" className="text-sm text-muted-foreground hover:text-primary">Industrial Automation</Link></li>
              <li><Link href="/services#agv" className="text-sm text-muted-foreground hover:text-primary">AGV Solutions</Link></li>
              <li><Link href="/services#automobile" className="text-sm text-muted-foreground hover:text-primary">Automobile Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a href="mailto:contact@suzittech.com" className="text-sm text-muted-foreground hover:text-primary">
                  contact@suzittech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">123 Automation Ave, Industry City, 45678</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Suzit Navigator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
