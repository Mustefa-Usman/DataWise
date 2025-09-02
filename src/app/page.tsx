import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BrainCircuit, LineChart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    title: "40% Sales Increase for Global E-commerce Leader",
    description: "Implemented a personalized recommendation engine, resulting in a 40% uplift in conversion rates.",
    image: "https://placehold.co/600x400/1d4ed8/ffffff?text=E-commerce",
    hint: "online shopping",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    author: "Jane Doe, CEO",
  },
  {
    title: "Optimizing Logistics for a Fortune 500 Company",
    description: "Developed an AI-powered route optimization system that reduced fuel costs by 18%.",
    image: "https://placehold.co/600x400/166534/ffffff?text=Logistics",
    hint: "logistics warehouse",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    author: "John Smith, COO",
  },
  {
    title: "Improving Patient Outcomes in Healthcare",
    description: "Our machine learning models predict patient readmission risks with 92% accuracy, allowing for proactive care.",
    image: "https://placehold.co/600x400/be123c/ffffff?text=Healthcare",
    hint: "medical tech",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    author: "Dr. Emily White",
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
                <Card key={index} className="overflow-hidden group flex flex-col">
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
                  <CardContent className="flex-grow">
                    <CardDescription>{study.description}</CardDescription>
                  </CardContent>
                   <CardContent className="flex items-center gap-4 pt-4">
                        <Avatar>
                            <AvatarImage src={study.avatar} alt={study.author} />
                            <AvatarFallback>{study.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                            <p className="font-semibold">{study.author}</p>
                        </div>
                    </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild variant="link" className="text-primary text-lg">
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
