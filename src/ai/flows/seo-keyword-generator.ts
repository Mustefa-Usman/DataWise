'use server';

/**
 * @fileOverview Generates SEO keywords from uploaded text.
 *
 * - generateKeywords - A function that generates SEO keywords from text.
 * - SeoKeywordGeneratorInput - The input type for the generateKeywords function.
 * - SeoKeywordGeneratorOutput - The return type for the generateKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SeoKeywordGeneratorInputSchema = z.object({
  text: z
    .string()
    .describe('The text content from which to generate SEO keywords.'),
});
export type SeoKeywordGeneratorInput = z.infer<typeof SeoKeywordGeneratorInputSchema>;

const SeoKeywordGeneratorOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('An array of suggested SEO keywords.'),
});
export type SeoKeywordGeneratorOutput = z.infer<typeof SeoKeywordGeneratorOutputSchema>;

export async function generateKeywords(input: SeoKeywordGeneratorInput): Promise<SeoKeywordGeneratorOutput> {
  return seoKeywordGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seoKeywordGeneratorPrompt',
  input: {schema: SeoKeywordGeneratorInputSchema},
  output: {schema: SeoKeywordGeneratorOutputSchema},
  prompt: `You are an SEO expert. Generate a list of SEO keywords for the following text. Keywords should be comma separated.

Text: {{{text}}}`,
});

const seoKeywordGeneratorFlow = ai.defineFlow(
  {
    name: 'seoKeywordGeneratorFlow',
    inputSchema: SeoKeywordGeneratorInputSchema,
    outputSchema: SeoKeywordGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
