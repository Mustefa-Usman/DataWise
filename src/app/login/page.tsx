import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BotMessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your DataWise account.',
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-background">
        <Card className="w-full max-w-sm mx-auto shadow-xl">
            <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                    <Link href="/" className="flex items-center gap-2">
                        <BotMessageSquare className="h-8 w-8 text-primary" />
                    </Link>
                </div>
                <CardTitle className="text-2xl font-bold font-headline">Welcome Back!</CardTitle>
                <CardDescription>Enter your credentials to access your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Forgot password?
                            </Link>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Sign In
                    </Button>
                </form>
                <div className="mt-6 text-center text-sm">
                    Don't have an account?{' '}
                    <Link href="/signup" className="font-medium text-primary hover:underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}

    