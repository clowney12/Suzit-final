import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

const servicesData = [
  {
    id: 'automation',
    title: 'Industrial Automation',
    subtitle: 'Streamlining Complexity, Maximizing Output',
    description: 'We design and implement comprehensive automation systems that redefine manufacturing efficiency. Our solutions integrate robotics, IoT, and AI to create smart factories that are productive, flexible, and safe.',
    features: [
      'Custom Robotic Cell Integration',
      'PLC & HMI Programming',
      'Machine Vision & Quality Inspection',
      'Data Acquisition & SCADA Systems',
      'End-to-End Assembly Line Automation',
    ],
    imageId: 'service-automation',
  },
  {
    id: 'agv',
    title: 'Automated Guided Vehicles (AGV)',
    subtitle: 'Intelligent Mobility for Modern Logistics',
    description: 'Our fleet of AGVs provides reliable and autonomous material transport for warehouses, distribution centers, and manufacturing floors. We offer a range of models and custom solutions to fit any layout and workflow.',
    features: [
      'Tugger, Forklift, and Unit Load AGVs',
      'Advanced Navigation (Laser, Vision, Natural Feature)',
      'Fleet Management Software',
      'Integration with WMS/ERP Systems',
      'Payloads from 100kg to 5000kg',
    ],
    imageId: 'service-agv',
  },
  {
    id: 'automobile',
    title: 'Automobile Solutions',
    subtitle: 'Driving the Future of Automotive Manufacturing',
    description: "We provide specialized automation solutions for the automotive industry, covering everything from body and paint shops to final assembly. Our technology helps leading car manufacturers achieve higher quality and faster production cycles.",
    features: [
      'Robotic Welding and Sealing',
      'Automated Paint Systems',
      'Powertrain Assembly Solutions',
      'In-line Metrology and Inspection',
      'Battery Assembly for Electric Vehicles',
    ],
    imageId: 'service-auto',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Delivering cutting-edge solutions across key industrial sectors to accelerate your growth and efficiency.
          </p>
        </div>
      </section>

      <div className="flex flex-col">
        {servicesData.map((service, index) => {
          const image = PlaceHolderImages.find((img) => img.id === service.imageId);
          const isEven = index % 2 === 0;

          return (
            <section key={service.id} id={service.id} className={`py-16 md:py-24 ${!isEven ? 'bg-secondary/50' : 'bg-background'}`}>
              <div className="container mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-12 items-center`}>
                  <div className={`relative h-96 rounded-lg overflow-hidden shadow-lg ${isEven ? 'md:order-last' : ''}`}>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold font-headline text-primary">{service.title}</h2>
                    <p className="text-lg font-medium text-muted-foreground">{service.subtitle}</p>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
