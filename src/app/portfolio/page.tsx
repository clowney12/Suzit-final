import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 1,
    title: 'Fully Automated Warehouse for E-commerce Giant',
    category: 'AGV',
    imageId: 'portfolio-4',
    description: 'Deployed a fleet of 200 AGVs and a custom fleet management system to handle 50,000 orders per day, increasing throughput by 300%.',
  },
  {
    id: 2,
    title: 'Next-Gen EV Battery Assembly Line',
    category: 'Automobile',
    imageId: 'portfolio-3',
    description: 'Designed and built a high-precision robotic assembly line for electric vehicle batteries, reducing error rates to less than 0.01%.',
  },
  {
    id: 3,
    title: 'Smart Factory Transformation for Food & Beverage',
    category: 'Industrial Automation',
    imageId: 'portfolio-1',
    description: 'Implemented an end-to-end automation solution with SCADA integration, improving overall equipment effectiveness (OEE) by 40%.',
  },
  {
    id: 4,
    title: 'Custom AGV for Pharmaceutical Cleanrooms',
    category: 'AGV',
    imageId: 'portfolio-2',
    description: 'Developed specialized AGVs with stainless steel construction and advanced navigation for use in sterile manufacturing environments.',
  },
  {
    id: 5,
    title: 'Robotic Paint Shop for Luxury Automaker',
    category: 'Automobile',
    imageId: 'portfolio-5',
    description: 'Upgraded a paint shop with 24 new robots, achieving a flawless finish and reducing paint consumption by 20%.',
  },
  {
    id: 6,
    title: 'Automated Sorting System for Logistics Hub',
    category: 'Industrial Automation',
    imageId: 'portfolio-6',
    description: 'A high-speed sorting system using machine vision and conveyor automation to process 10,000 parcels per hour.',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Portfolio</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            A showcase of our commitment to excellence and innovation in action. Explore the solutions we've delivered for industry leaders.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const image = PlaceHolderImages.find((img) => img.id === project.imageId);
              return (
                <Card key={project.id} className="flex flex-col overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-60 w-full overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                      <Badge variant={project.category === 'AGV' ? 'default' : 'secondary'} className={project.category === 'AGV' ? '' : 'bg-primary/20 text-primary'}>
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
