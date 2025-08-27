'use server';
/**
 * @fileOverview A simple chatbot that can answer questions about the company's services.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type Message = z.infer<typeof MessageSchema>;

const services = [
  {
    icon: 'Database',
    title: 'Data Strategy & Architecture',
    description: 'We help you design and implement a robust data strategy and architecture that aligns with your business goals, ensuring data quality, governance, and security from the ground up.'
  },
  {
    icon: 'BarChart3',
    title: 'Predictive Analytics',
    description: 'Unlock future trends and behaviors with our predictive analytics services. We build custom models to forecast sales, customer churn, and operational demands, giving you a competitive edge.'
  },
  {
    icon: 'BrainCircuit',
    title: 'Machine Learning Solutions',
    description: 'Implement intelligent systems with our end-to-end machine learning solutions. From natural language processing to computer vision, we create AI that solves real-world business problems.'
  },
  {
    icon: 'PieChart',
    title: 'Data Visualization & BI',
    description: 'Transform raw data into intuitive and interactive dashboards. Our Business Intelligence experts use tools like Tableau and Power BI to help you monitor KPIs and discover insights at a glance.'
  },
  {
    icon: 'Cloud',
    title: 'Cloud Data Warehousing',
    description: 'Modernize your data infrastructure with our cloud data warehousing services. We leverage platforms like Snowflake, BigQuery, and Redshift for scalable, high-performance data storage and processing.'
  },
  {
    icon: 'Waypoints',
    title: 'AI Product Development',
    description: 'Bring your AI-powered product idea to life. We partner with you through the entire lifecycle, from ideation and prototyping to deployment and scaling of innovative AI applications.'
  },
  {
    icon: 'Bot',
    title: 'Advanced AI Agent Development',
    description: 'We build sophisticated AI agents that can perform complex tasks, automate workflows, and interact with your systems to drive efficiency and innovation.'
  },
  {
    icon: 'MessagesSquare',
    title: 'Chatbot & Automation',
    description: 'Enhance customer engagement and streamline operations with intelligent, custom-built chatbots and automation solutions tailored to your business needs.'
  }
];

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {
    schema: z.object({
      history: z.array(MessageSchema),
    }),
  },
  output: {
    schema: MessageSchema
  },
  prompt: `You are a friendly and helpful AI assistant for a company called DataWise.
Your goal is to answer user questions about the company's services.

Here is the list of services offered:
{{#each services}}
- {{title}}: {{description}}
{{/each}}

Keep your answers concise and to the point. If the user asks about something not related to these services, politely steer the conversation back to the services.

Here is the chat history:
{{#each history}}
{{role}}: {{content}}
{{/each}}
model:`,
  config: {
    model: 'googleai/gemini-1.5-flash',
  },
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: z.array(MessageSchema),
    outputSchema: MessageSchema,
  },
  async (history) => {
    const { output } = await prompt({ history, services });
    return output!;
  }
);

export async function chat(history: Message[]): Promise<Message> {
  return chatbotFlow(history);
}
