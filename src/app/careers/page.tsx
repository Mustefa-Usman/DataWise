import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MapPin, BrainCircuit, BarChart3, Bot, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the YourBrand team and help us build the future of AI and data intelligence. Explore our open positions.',
};

const jobOpenings = [
    {
        title: 'Senior AI Engineer',
        location: 'Remote, USA',
        department: 'Engineering',
        icon: <BrainCircuit className="w-8 h-8 text-primary" />,
        description: 'Lead the development of our core machine learning models and AI-driven products. Requires deep expertise in Python, TensorFlow/PyTorch, and cloud platforms.',
        tags: ['AI/ML', 'Python', 'Cloud'],
    },
    {
        title: 'Data Scientist',
        location: 'Innovation City, IO',
        department: 'Analytics',
        icon: <BarChart3 className="w-8 h-8 text-primary" />,
        description: 'Analyze complex datasets to deliver actionable insights for our clients. Strong background in statistical analysis, SQL, and data visualization tools required.',
        tags: ['Analytics', 'SQL', 'Tableau'],
    },
    {
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

        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
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
                            <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
                                <Link href="/contact?subject=Application%20For%20{{job.title}}">
                                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground">{job.description}</p>
                        </CardContent>
                        <CardFooter className="flex-wrap gap-2">
                             {job.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </CardFooter>
                         <div className="p-6 pt-0 md:hidden">
                             <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                <Link href="/contact?subject=Application%20For%20{{job.title}}">
                                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                         </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-16 bg-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-headline">Don't See Your Role?</h3>
                <p className="text-muted-foreground mt-2 mb-4">
                    We're always looking for talented individuals. If you're passionate about data and AI, send us your resume.
                </p>
                <Button asChild>
                     <Link href="/contact?subject=General%20Application">
                        Get In Touch
                    </Link>
                </Button>
            </div>
        </div>
        
      </div>
    </div>
  );
}
