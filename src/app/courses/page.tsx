import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Code, Database, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Upskill your team with our expert-led courses in AI, data science, and machine learning.',
};

const courses = [
  {
    title: 'Foundations of Machine Learning',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'abstract shapes',
    icon: <Brain className="w-6 h-6 text-primary" />,
    description: 'A comprehensive introduction to machine learning concepts, algorithms, and practical implementation with Python.',
    duration: '8 Weeks',
    level: 'Beginner',
  },
  {
    title: 'Advanced Data Science with Python',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'data visualization',
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    description: 'Dive deep into advanced data manipulation, statistical analysis, and visualization techniques using Pandas, SciPy, and Matplotlib.',
    duration: '10 Weeks',
    level: 'Intermediate',
  },
  {
    title: 'Big Data Engineering on the Cloud',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cloud infrastructure',
    icon: <Database className="w-6 h-6 text-primary" />,
    description: 'Learn to design and build scalable data pipelines and warehousing solutions using modern cloud technologies like Spark, and BigQuery.',
    duration: '12 Weeks',
    level: 'Advanced',
  },
  {
    title: 'AI Agent & Chatbot Development',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'robot arm',
    icon: <Code className="w-6 h-6 text-primary" />,
    description: 'Master the art of building intelligent agents and chatbots using LLMs, and custom frameworks for real-world applications.',
    duration: '8 Weeks',
    level: 'Intermediate',
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">AI & Data Science Courses</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Empower your team with the skills needed to lead in the age of AI. Our courses are practical, hands-on, and designed for real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  data-ai-hint={course.dataAiHint}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 p-2 rounded-md">{course.icon}</div>
                  <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

    