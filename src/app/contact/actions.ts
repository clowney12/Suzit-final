"use server";

import { routeInquiry } from '@/ai/flows/route-inquiries-with-llm';

type ActionResult = {
  success: boolean;
  team?: string;
  error?: string;
};

export async function submitInquiry(inquiry: string): Promise<ActionResult> {
  if (!inquiry) {
    return { success: false, error: 'Inquiry message cannot be empty.' };
  }

  try {
    const result = await routeInquiry({ inquiry });
    
    // Basic validation on the AI output
    const validTeams = ['Sales', 'Support', 'Engineering'];
    const team = result.team && validTeams.includes(result.team) ? result.team : 'Support';

    return { success: true, team: team };
  } catch (error) {
    console.error('Error routing inquiry:', error);
    return { success: false, error: 'Failed to process inquiry. Please try again later.' };
  }
}
