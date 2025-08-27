import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, BrainCircuit, Cloud, Database, PieChart, Waypoints, Bot, MessagesSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the data and AI services offered by YourBrand, from strategy and analytics to machine learning and cloud solutions.',
};

const services = [
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: 'Data Strategy & Architecture',
    description: 'We help you design and implement a robust data strategy and architecture that aligns with your business goals, ensuring data quality, governance, and security from the ground up.'
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: 'Predictive Analytics',
    description: 'Unlock future trends and behaviors with our predictive analytics services. We build custom models to forecast sales, customer churn, and operational demands, giving you a competitive edge.'
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: 'Machine Learning Solutions',
    description: 'Implement intelligent systems with our end-to-end machine learning solutions. From natural language processing to computer vision, we create AI that solves real-world business problems.'
  },
  {
    icon: <PieChart className="w-10 h-10 text-primary" />,
    title: 'Data Visualization & BI',
    description: 'Transform raw data into intuitive and interactive dashboards. Our Business Intelligence experts use tools like Tableau and Power BI to help you monitor KPIs and discover insights at a glance.'
  },
  {
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: 'Cloud Data Warehousing',
    description: 'Modernize your data infrastructure with our cloud data warehousing services. We leverage platforms like Snowflake, BigQuery, and Redshift for scalable, high-performance data storage and processing.'
  },
  {
    icon: <Waypoints className="w-10 h-10 text-primary" />,
    title: 'AI Product Development',
    description: 'Bring your AI-powered product idea to life. We partner with you through the entire lifecycle, from ideation and prototyping to deployment and scaling of innovative AI applications.'
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: 'Advanced AI Agent Development',
    description: 'We build sophisticated AI agents that can perform complex tasks, automate workflows, and interact with your systems to drive efficiency and innovation.'
  },
  {
    icon: <MessagesSquare className="w-10 h-10 text-primary" />,
    title: 'Chatbot & Automation',
    description: 'Enhance customer engagement and streamline operations with intelligent, custom-built chatbots and automation solutions tailored to your business needs.'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Our Services</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We offer a comprehensive suite of data and AI services to empower every facet of your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-left shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
