
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, SearchIcon } from 'lucide-react';

const allPages = [
  {
    href: '/',
    title: 'Home',
    description: "Unlock your data's potential. DataWise translates your complex data into clear, actionable strategies that drive growth and innovation.",
  },
  {
    href: '/services',
    title: 'Our Services',
    description: 'Explore the data and AI services offered by YourBrand, from strategy and analytics to machine learning and cloud solutions.',
  },
  {
    href: '/courses',
    title: 'Courses',
    description: 'Upskill your team with our expert-led courses in AI, data science, and machine learning.',
  },
  {
    href: '/case-studies',
    title: 'Case Studies',
    description: 'Discover how YourBrand has helped businesses achieve success through data-driven strategies and AI solutions.',
  },
  {
    href: '/contact',
    title: 'Contact Us',
    description: 'Get in touch with the YourBrand team to discuss your data and AI needs.',
  },
  {
    href: '/affiliate',
    title: 'Affiliate Program',
    description: 'Join the YourBrand affiliate program and earn commissions by promoting our industry-leading AI and data solutions.',
  },
  {
    href: '/careers',
    title: 'Careers',
    description: 'Join the DataWise team and help us build the future of AI and data intelligence. Explore our open positions.',
  },
  {
    href: '/seo-tool',
    title: 'AI SEO Keyword Generator',
    description: 'Generate powerful SEO keywords from any text using our free AI-powered tool. Improve your page ranking and online visibility.',
  },
  {
    href: '/login',
    title: 'Sign In',
    description: 'Sign in to your YourBrand account to access your dashboard and tools.',
  },
  {
    href: '/signup',
    title: 'Sign Up',
    description: 'Create an account to get started with our AI solutions and unlock powerful features.',
  },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredPages = allPages.filter(page => 
    page.title.toLowerCase().includes(query.toLowerCase()) || 
    page.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Search Results</h1>
          <p className="text-lg text-muted-foreground mt-4">
            {query ? `Showing results for "${query}"` : 'Please enter a search term.'}
          </p>
        </div>

        {filteredPages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPages.map(page => (
              <Link href={page.href} key={page.href} className="block">
                <Card className="h-full hover:border-primary hover:shadow-lg transition-all">
                  <CardHeader className="flex-row items-center gap-4">
                    <FileText className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-xl">{page.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{page.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
             <div className="inline-block bg-muted p-6 rounded-full mb-6">
                <SearchIcon className="h-16 w-16 text-muted-foreground" />
             </div>
            <h2 className="text-2xl font-bold font-headline">No Results Found</h2>
            <p className="text-muted-foreground mt-2">
              We couldn't find any pages matching your search. Please try different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    )
}
