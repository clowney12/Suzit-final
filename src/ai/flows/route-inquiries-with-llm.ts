'use server';
/**
 * @fileOverview This file defines a Genkit flow to route inquiries to appropriate teams based on their content using an LLM.
 *
 * - routeInquiry - An async function that takes an inquiry and routes it to the appropriate team.
 * - RouteInquiryInput - The input type for the routeInquiry function, which includes the inquiry content.
 * - RouteInquiryOutput - The output type for the routeInquiry function, which includes the recommended team to route the inquiry to.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteInquiryInputSchema = z.object({
  inquiry: z.string().describe('The content of the inquiry.'),
});
export type RouteInquiryInput = z.infer<typeof RouteInquiryInputSchema>;

const RouteInquiryOutputSchema = z.object({
  team: z
    .string()
    .describe(
      'The recommended team to route the inquiry to (e.g., Sales, Support, Engineering).' // Ensuring that the AI returns one of these values is difficult.
    ),
});
export type RouteInquiryOutput = z.infer<typeof RouteInquiryOutputSchema>;

export async function routeInquiry(input: RouteInquiryInput): Promise<RouteInquiryOutput> {
  return routeInquiryFlow(input);
}

const routeInquiryPrompt = ai.definePrompt({
  name: 'routeInquiryPrompt',
  input: {schema: RouteInquiryInputSchema},
  output: {schema: RouteInquiryOutputSchema},
  prompt: `You are an expert in routing inquiries to the appropriate team.

  Based on the content of the inquiry, determine which team should handle it.
  The available teams are Sales, Support, and Engineering.

  Inquiry: {{{inquiry}}}

  Recommend the most appropriate team:
  `,
});

const routeInquiryFlow = ai.defineFlow(
  {
    name: 'routeInquiryFlow',
    inputSchema: RouteInquiryInputSchema,
    outputSchema: RouteInquiryOutputSchema,
  },
  async input => {
    const {output} = await routeInquiryPrompt(input);
    return output!;
  }
);
