import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  { name: 'C Jyothi Kumar', role: 'CEO & Founder', imageId: 'about-team-1' },
];

const values = [
  "Innovation at the Core",
  "Uncompromising Quality",
  "Customer-Centric Solutions",
  "Integrity and Transparency",
  "Sustainable Practices",
  "Collaborative Partnership"
];

const ceoAvatarUrl = 'https://storage.googleapis.com/gct-97-gen-ai-sandy.appspot.com/prompt-images/Jyothi-C-Kumar.png';

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Suzit Tech</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Pioneering industrial innovation through technology and expertise since 2010.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/about-story/800/600"
                alt="Suzit Tech's modern office"
                fill
                className="object-cover"
                data-ai-hint="modern office"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline text-primary">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded with a vision to revolutionize industrial processes, Suzit Tech began as a small team of passionate engineers. Today, we are a leading provider of automation solutions, trusted by businesses worldwide.
              </p>
              <p className="text-muted-foreground">
                Our journey has been one of continuous learning and adaptation. We've grown by staying true to our core belief: that technology should serve humanity, making work more efficient, safer, and more fulfilling. From our first automated conveyor system to our latest AI-powered AGVs, every product is a testament to our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-background">
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline mb-12">Meet the Team</h2>
          <div className="flex justify-center">
            <Card className="max-w-sm w-full">
              <CardContent className="p-6 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarImage src={ceoAvatarUrl} alt="C Jyothi Kumar" data-ai-hint="professional portrait" />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold font-headline">C Jyothi Kumar</h3>
                <p className="text-primary font-medium">CEO & Founder</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  With over 20 years of experience in industrial automation, C Jyothi Kumar leads Suzit Tech with a passion for innovation and a commitment to excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Core Values</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                <span className="text-lg font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Meet the Team</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind our innovative solutions.
            </p>
          </div>
          <div className="flex justify-center">
            {teamMembers.map((member) => {
              const image = PlaceHolderImages.find((img) => img.id === member.imageId);
              return (
                <Card key={member.name} className="text-center p-6 border-0 shadow-lg hover:-translate-y-2 transition-transform duration-300 max-w-xs">
                  <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20">
                    {image && <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />}
                    <AvatarFallback className="text-4xl">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
