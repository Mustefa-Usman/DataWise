"use client";

import { useState } from 'react';
import { generateKeywords } from '@/ai/flows/seo-keyword-generator';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LoaderCircle, Sparkles, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export function SeoTool() {
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (text.length < 50) {
      toast({
        title: 'Input Too Short',
        description: 'Please enter at least 50 characters for better results.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setKeywords([]);

    try {
      const result = await generateKeywords({ text });
      if (result.keywords && result.keywords.length > 0) {
        setKeywords(result.keywords);
        toast({
            title: 'Keywords Generated!',
            description: 'Your SEO keywords are ready.',
        });
      } else {
        toast({
          title: 'No Keywords Found',
          description: 'We couldn\'t generate keywords. Try refining your text or making it longer.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'An Error Occurred',
        description: 'Failed to generate keywords. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (keyword: string) => {
    navigator.clipboard.writeText(keyword);
    toast({
      description: `Copied "${keyword}" to clipboard!`,
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Enter Your Text</CardTitle>
        <CardDescription>
          Provide a paragraph or more from your content for the best keyword suggestions.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste your content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          className="resize-none"
        />
        <Button onClick={handleGenerate} disabled={isLoading || !text} className="w-full" size="lg">
          {isLoading ? (
            <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5" />
          )}
          {isLoading ? 'Generating...' : 'Generate Keywords'}
        </Button>

        {(isLoading || keywords.length > 0) && (
            <div className="pt-4">
                <h3 className="text-lg font-semibold mb-3">Suggested Keywords</h3>
                <div className="flex flex-wrap gap-2">
                {isLoading ? (
                    Array.from({ length: 8 }).map((_, i) => (
                        <Skeleton key={i} className="h-8 w-24 rounded-full" />
                    ))
                ) : (
                    keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-base py-1 pl-3 pr-2 group cursor-pointer" onClick={() => handleCopy(keyword)}>
                        {keyword}
                        <Copy className="h-3 w-3 ml-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Badge>
                    ))
                )}
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
