"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { submitInquiry } from './actions';
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message cannot exceed 500 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;
type SubmissionState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
};

export default function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ status: 'idle', message: '' });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setSubmissionState({ status: 'submitting', message: '' });
    try {
      const result = await submitInquiry(values.message);
      if (result.success && result.team) {
        setSubmissionState({
          status: 'success',
          message: `Thank you for your inquiry! It has been routed to our ${result.team} team. We will get back to you shortly.`,
        });
        form.reset();
      } else {
        throw new Error(result.error || 'An unknown error occurred.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.';
      setSubmissionState({
        status: 'error',
        message: errorMessage,
      });
    }
  }

  if (submissionState.status === 'success') {
    return (
      <Alert variant="default" className="border-green-500 bg-green-50">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-800">Inquiry Sent!</AlertTitle>
        <AlertDescription className="text-green-700">
          {submissionState.message}
        </AlertDescription>
         <Button onClick={() => setSubmissionState({ status: 'idle', message: '' })} className="mt-4" variant="outline">
          Send Another Inquiry
        </Button>
      </Alert>
    );
  }

  return (
    <Form {...form}>
       <h2 className="text-2xl font-bold font-headline mb-1">Send us a Message</h2>
       <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you.</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your Company Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Inquiry or Prototype Request</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your project or what you'd like to see in a prototype..." rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submissionState.status === 'error' && (
           <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {submissionState.message}
            </AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" size="lg" disabled={submissionState.status === 'submitting'}>
          {submissionState.status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </Form>
  );
}
