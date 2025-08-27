import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Gift, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Program',
  description: 'Join the YourBrand affiliate program and earn commissions by promoting our industry-leading AI and data solutions.',
};

const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: 'Competitive Commissions',
      description: 'Earn a generous 20% commission for every new customer you refer to our services.',
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'High-Demand Services',
      description: 'Promote cutting-edge AI and data solutions that businesses are actively seeking out.',
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: 'Marketing Resources',
      description: 'Get access to a library of professionally designed banners, links, and content to help you succeed.',
    },
  ];

export default function AffiliatePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Become a YourBrand Affiliate</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Partner with a leader in AI solutions and earn rewards for helping businesses unlock their data's potential.
          </p>
        </div>
        
        <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg mb-12 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Ready to Join?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Signing up is fast, free, and easy. Start earning commissions today by sharing the power of YourBrand.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?subject=Affiliate%20Program%20Inquiry">Join the Program Now</Link>
            </Button>
        </div>

        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Partner With Us?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We provide our partners with everything they need to succeed.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {benefit.icon}
                </div>
                <CardTitle className="font-headline">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
            </Card>
            ))}
        </div>

      </div>
    </div>
  );
}
