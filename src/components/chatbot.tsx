"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, LoaderCircle, MessageSquare, Send, User, X } from 'lucide-react';
import { chat } from '@/ai/flows/chatbot-flow';
import type { Message } from '@/ai/flows/chatbot-flow';

const UserAvatar = () => (
    <div className="rounded-full bg-muted w-8 h-8 flex items-center justify-center shrink-0">
        <User className="w-5 h-5" />
    </div>
);

const BotAvatar = () => (
     <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center shrink-0">
        <Bot className="w-5 h-5 text-primary" />
    </div>
)

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', content: "Hello! How can I assist you today? You can ask me about our services." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const history = [...messages, userMessage];
            const botResponse = await chat(history);
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error(error);
            const errorMessage: Message = { role: 'model', content: "Sorry, I'm having trouble connecting. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div>
            <div className={`fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-full scale-0 opacity-0' : 'translate-y-0 scale-100 opacity-100'}`}>
                <Button onClick={() => setIsOpen(true)} size="lg" className="rounded-full w-16 h-16 shadow-lg bg-accent hover:bg-accent/90">
                    <MessageSquare className="w-8 h-8" />
                    <span className="sr-only">Open Chat</span>
                </Button>
            </div>
            
            <div className={`fixed bottom-0 right-0 z-50 w-full h-full md:h-auto md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                 <Card className="w-full h-full md:w-[380px] md:h-[600px] flex flex-col rounded-none md:rounded-t-xl md:rounded-b-none shadow-2xl m-0 border-t border-l border-r">
                    <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-3">
                            <BotAvatar />
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
                               {messages.map((msg, index) => (
                                   <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                       {msg.role === 'model' && <BotAvatar />}
                                       <p className={`${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'} p-3 rounded-lg max-w-xs`}>
                                           {msg.content}
                                       </p>
                                       {msg.role === 'user' && <UserAvatar />}
                                   </div>
                               ))}
                               {isLoading && (
                                   <div className="flex items-end gap-2">
                                       <BotAvatar />
                                       <p className="bg-muted p-3 rounded-lg max-w-xs">
                                            <LoaderCircle className="w-5 h-5 animate-spin" />
                                       </p>
                                   </div>
                               )}
                            </div>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-4 border-t">
                        <form onSubmit={handleSubmit} className="flex w-full gap-2">
                            <Input 
                                placeholder="Type a message..." 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isLoading}
                            />
                            <Button type="submit" disabled={isLoading || !input}>
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
