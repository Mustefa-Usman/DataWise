"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, MessageSquare, Send, X } from 'lucide-react';

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={`fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                <Button onClick={() => setIsOpen(true)} size="lg" className="rounded-full w-16 h-16 shadow-lg">
                    <MessageSquare className="w-8 h-8" />
                    <span className="sr-only">Open Chat</span>
                </Button>
            </div>
            
            <div className={`fixed bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                 <Card className="w-[380px] h-[600px] flex flex-col rounded-t-xl rounded-b-none shadow-2xl m-0 border-t border-l border-r">
                    <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Bot className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-headline">AI Assistant</CardTitle>
                                <CardDescription className="text-xs">I'm here to help!</CardDescription>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                            <X className="w-5 h-5" />
                            <span className="sr-only">Close chat</span>
                        </Button>
                    </CardHeader>
                    <CardContent className="flex-1 p-4 overflow-hidden">
                        <ScrollArea className="h-full pr-4">
                            <div className="space-y-4">
                                <div className="flex items-end gap-2">
                                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center shrink-0">
                                        <Bot className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="bg-muted p-3 rounded-lg max-w-xs">
                                        Hello! How can I assist you today? You can ask me about our services, pricing, or anything else.
                                    </p>
                                </div>
                                <div className="flex items-end gap-2 justify-end">
                                    <p className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                                        Tell me about your AI agent development services.
                                    </p>
                                    <div className="rounded-full bg-muted w-8 h-8 flex items-center justify-center shrink-0">
                                        <span className="text-sm font-semibold">U</span>
                                    </div>
                                </div>
                                 <div className="flex items-end gap-2">
                                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center shrink-0">
                                        <Bot className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="bg-muted p-3 rounded-lg max-w-xs">
                                        We build sophisticated AI agents that can perform complex tasks, automate workflows, and interact with your systems to drive efficiency and innovation. Would you like to see a case study?
                                    </p>
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-4 border-t">
                        <form className="flex w-full gap-2">
                            <Input placeholder="Type a message..." />
                            <Button type="submit">
                                <Send className="w-4 h-4" />
                                <span className="sr-only">Send</span>
                            </Button>
                        </form>
                    </CardFooter>
                 </Card>
            </div>
        </div>
    )
}

    