import type { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Discover how DataWise has helped businesses achieve success through data-driven strategies and AI solutions.',
};

const caseStudies = [
  {
    title: '40% Sales Increase for Global E-commerce Leader',
    category: 'E-commerce',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'data visualization',
    description: 'Implemented a personalized recommendation engine and customer segmentation model, resulting in a 40% uplift in conversion rates and a 25% increase in average order value.',
    tags: ['Predictive Analytics', 'Machine Learning', 'Retail'],
  },
  {
    title: 'Optimizing Logistics for a Fortune 500 Company',
    category: 'Supply Chain',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'tech abstract',
    description: 'Developed an AI-powered route and inventory optimization system that reduced fuel costs by 18% and cut delivery times by 22%, saving the company over $5M annually.',
    tags: ['AI Solutions', 'Optimization', 'Logistics'],
  },
  {
    title: 'Improving Patient Outcomes in Healthcare',
    category: 'Healthcare',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'AI robot',
    description: 'Our machine learning models predict patient readmission risks with 92% accuracy, allowing for proactive care and reducing hospital readmissions by 30%.',
    tags: ['Healthcare', 'Machine Learning', 'BI'],
  },
  {
    title: 'Fraud Detection for a FinTech Innovator',
    category: 'Financial Services',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'business meeting',
    description: 'Built a real-time fraud detection platform that analyzes thousands of transactions per second, reducing fraudulent transactions by 60% while minimizing false positives.',
    tags: ['FinTech', 'AI Security', 'Real-Time Analytics'],
  },
  {
    title: 'Content Strategy Overhaul for a Media Giant',
    category: 'Media',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'charts graph',
    description: 'Used Natural Language Processing (NLP) to analyze audience engagement, leading to a data-driven content strategy that increased user retention by 50% and ad revenue by 35%.',
    tags: ['NLP', 'Data Analytics', 'Media'],
  },
  {
    title: 'Smart Manufacturing with IoT Analytics',
    category: 'Manufacturing',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'server room',
    description: 'Deployed an IoT analytics solution to monitor production lines, enabling predictive maintenance that decreased equipment downtime by 45% and improved overall plant efficiency.',
    tags: ['IoT', 'Predictive Maintenance', 'Manufacturing'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Our Success Stories</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We deliver tangible results. See the impact of our data-driven solutions across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.title} className="flex flex-col overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  data-ai-hint={study.dataAiHint}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{study.category}</Badge>
                <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{study.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
