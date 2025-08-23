import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the DataWise team to discuss your data and AI needs.',
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Have a project in mind or just want to learn more? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold font-headline mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:hello@datawise.com" className="text-muted-foreground hover:text-primary">hello@datawise.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-muted-foreground">123 Data Drive<br/>Innovation City, IO 54321</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
