"use server";

import { routeInquiry } from '@/ai/flows/route-inquiries-with-llm';

type ActionResult = {
  success: boolean;
  team?: string;
  error?: string;
};

export async function submitInquiry(values: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  try {
    const response = await fetch("https://suzittech.com/api/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error: "Network error" };
  }
}


