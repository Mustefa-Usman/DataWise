"use client";

import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BotMessageSquare, LoaderCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';


// export const metadata: Metadata = {
//   title: 'Sign Up',
//   description: 'Create a new DataWise account.',
// };

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export default function SignupPage() {
    const { toast } = useToast();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            toast({
                title: "Account Created!",
                description: "You have successfully signed up. Please sign in.",
            });
            router.push('/login');
        } catch (error: any) {
             toast({
                title: "Uh oh! Something went wrong.",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-background">
        <Card className="w-full max-w-sm mx-auto shadow-xl">
            <CardHeader className="text-center">
                 <div className="flex justify-center mb-4">
                    <Link href="/" className="flex items-center gap-2">
                        <BotMessageSquare className="h-8 w-8 text-primary" />
                    </Link>
                </div>
                <CardTitle className="text-2xl font-bold font-headline">Create an Account</CardTitle>
                <CardDescription>Join us to unlock powerful AI tools and insights.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Full Name</Label>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
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
                                    <Label>Email</Label>
                                    <FormControl>
                                        <Input type="email" placeholder="you@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Password</Label>
                                    <FormControl>
                                        <Input type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                            {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Create Account"}
                        </Button>
                    </form>
                </Form>
                <div className="mt-6 text-center text-sm">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-primary hover:underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}