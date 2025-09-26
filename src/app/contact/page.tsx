import ContactForm from './contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary/50 py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Have a project in mind or want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start gap-4 justify-center sm:justify-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">
                    contact@suzittech.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-center sm:justify-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">
                    +91 6361 445 483
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-center sm:justify-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-muted-foreground">123 Automation Ave, Industry City, 45678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl border mb-12">
              <iframe
                  src="https://maps.google.com/maps?q=13.208722,77.547972&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-2xl border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
