import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, CircuitBoard, Car } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'home-hero');

const services = [
  {
    icon: <CircuitBoard className="h-8 w-8 text-primary" />,
    title: 'Industrial Automation',
    description: 'Bespoke automation solutions to enhance productivity and efficiency in your manufacturing processes.',
    link: '/services#automation',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Automated Guided Vehicles (AGV)',
    description: 'Intelligent, reliable AGVs for seamless material handling and logistics within your facilities.',
    link: '/services#agv',
  },
  {
    icon: <Car className="h-8 w-8 text-primary" />,
    title: 'Automobile Solutions',
    description: 'Cutting-edge technology for the automotive industry, from assembly line robotics to in-car systems.',
    link: '/services#automobile',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
           <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Engineering the Future of Automation
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200">
            Suzit Tech delivers world-class solutions in industrial automation, AGVs, and automotive technology to drive your business forward.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline text-primary">Our Mission & Vision</h2>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower industries with intelligent automation, making manufacturing smarter, safer, and more sustainable. We envision a world where human creativity is amplified by robotic precision.
              </p>
              <p className="text-muted-foreground">
                At Suzit Tech, we are committed to pushing the boundaries of technology. Our team of experts works tirelessly to develop innovative solutions that not only meet but exceed our clients' expectations, ensuring they stay ahead in a competitive landscape.
              </p>
              <Button asChild className="mt-4">
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
               <Image
                src="https://picsum.photos/seed/101/600/400"
                alt="Suzit Tech Team working"
                fill
                className="object-cover"
                data-ai-hint="factory team"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline">A Spectrum of Solutions</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive services tailored to the unique needs of modern industries.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 p-2">
                <CardHeader className="flex-col items-center text-center gap-4 space-y-0">
                  <div className="bg-primary/10 p-3 rounded-full">{service.icon}</div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
