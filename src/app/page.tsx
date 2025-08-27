import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BrainCircuit, LineChart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Data Analytics & Visualization",
    description: "Transform complex datasets into actionable insights with our advanced analytics and stunning visualizations.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "AI & Machine Learning",
    description: "Leverage predictive models and AI-driven solutions to automate processes and forecast future trends.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Business Intelligence",
    description: "Empower your decision-making with comprehensive BI dashboards and reporting tailored to your KPIs.",
  },
];

const caseStudies = [
  {
    title: "E-commerce Sales Boost",
    description: "Increased online sales by 40% through predictive customer analytics.",
    image: "https://placehold.co/600x400.png",
    hint: "data visualization"
  },
  {
    title: "Supply Chain Optimization",
    description: "Reduced logistics costs by 25% with an AI-powered route optimization model.",
    image: "https://placehold.co/600x400.png",
    hint: "tech abstract"
  },
  {
    title: "Healthcare Patient Outcomes",
    description: "Improved patient outcome predictions by 30% using machine learning.",
    image: "https://placehold.co/600x400.png",
    hint: "AI robot"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-card">
          <div className="absolute inset-0 bg-accent/10"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-tight">
              Unlock Your Data's Potential
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              DataWise translates your complex data into clear, actionable strategies that drive growth and innovation.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Capabilities</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We provide end-to-end solutions to help you become a data-driven organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Success Stories</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                See how we've helped businesses like yours achieve remarkable results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden group">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={600}
                    height={400}
                    data-ai-hint={study.hint}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardHeader>
                    <CardTitle className="font-headline">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{study.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild variant="link" className="text-primary-foreground text-lg">
                    <Link href="/case-studies">
                    View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        {/* SEO Tool CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg text-center">
              <h2 className="text-3xl font-bold font-headline mb-4">Boost Your Online Presence</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Use our free AI-powered tool to generate powerful SEO keywords and improve your search engine ranking.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/seo-tool">Try the SEO Tool</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

    