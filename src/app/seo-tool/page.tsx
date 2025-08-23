import type { Metadata } from 'next';
import { SeoTool } from '@/components/seo-tool';

export const metadata: Metadata = {
  title: 'AI SEO Keyword Generator',
  description: 'Generate powerful SEO keywords from any text using our free AI-powered tool. Improve your page ranking and online visibility.',
};

export default function SeoToolPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">AI SEO Keyword Generator</h1>
          <p className="text-lg text-muted-foreground mt-4">
            Paste any text from your website, blog post, or article into the box below. Our AI will analyze the content and suggest relevant SEO keywords to help you rank higher on search engines.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SeoTool />
        </div>
      </div>
    </div>
  );
}
