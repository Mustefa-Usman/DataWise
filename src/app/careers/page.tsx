import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MapPin, BrainCircuit, BarChart3, Bot, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ApplicationForm } from '@/components/application-form';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the DataWise team and help us build the future of AI and data intelligence. Explore our open positions.',
};

const jobOpenings = [
    {
        id: 'senior-ai-engineer',
        title: 'Senior AI Engineer',
        location: 'Remote, USA',
        department: 'Engineering',
        icon: <BrainCircuit className="w-8 h-8 text-primary" />,
        description: 'Lead the development of our core machine learning models and AI-driven products. Requires deep expertise in Python, TensorFlow/PyTorch, and cloud platforms.',
        tags: ['AI/ML', 'Python', 'Cloud'],
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        location: 'Innovation City, IO',
        department: 'Analytics',
        icon: <BarChart3 className="w-8 h-8 text-primary" />,
        description: 'Analyze complex datasets to deliver actionable insights for our clients. Strong background in statistical analysis, SQL, and data visualization tools required.',
        tags: ['Analytics', 'SQL', 'Tableau'],
    },
    {
        id: 'ai-solutions-architect',
        title: 'AI Solutions Architect',
        location: 'Remote, USA',
        department: 'Sales & Solutions',
        icon: <Bot className="w-8 h-8 text-primary" />,
        description: 'Design and architect bespoke AI solutions for enterprise clients, bridging the gap between business needs and technical possibilities. Client-facing experience is a must.',
        tags: ['Solutions', 'Enterprise', 'Client-facing'],
    }
]

export default function CareersPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Join Our Team</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We're a passionate team of innovators, thinkers, and builders dedicated to solving the world's most complex data challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
                 <h2 className="text-3xl font-bold font-headline mb-2 text-center lg:text-left">Open Positions</h2>
                {jobOpenings.map((job) => (
                    <Card key={job.title} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-4">
                            <div className="bg-primary/10 rounded-lg p-4">
                                {job.icon}
                            </div>
                            <div className="flex-grow">
                                <CardTitle className="font-headline text-xl">{job.title}</CardTitle>
                                <CardDescription className="flex items-center gap-4 mt-1">
                                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/>{job.location}</span>
                                    <span>{job.department}</span>
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground">{job.description}</p>
                        </CardContent>
                        <CardFooter className="flex-wrap gap-2">
                             {job.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold font-headline mb-6 text-center lg:text-left">Apply Now</h2>
                <ApplicationForm jobs={jobOpenings} />
            </div>
        </div>
        
      </div>
    </div>
  );
}

    