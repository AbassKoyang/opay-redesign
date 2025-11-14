import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2, ChevronLeft, Bot } from 'lucide-react';
import ReactMarkdown  from 'react-markdown';
import {useQuery} from '@tanstack/react-query';
import {mastraClient} from '@/lib/mastra-client';
import { toast } from 'sonner';
import { useUserId } from '@/lib/hooks/useUserId';

interface Message {
content: string;
createdAt: string;
id: string;
resourceId: string;
role: 'user' | 'assistant';
threadId: string;
type: string;
}

const ChatBot = () => {
    const userId : string = useUserId();
  const {data, isError, isLoading} = useQuery({
    queryKey: ['agent-messages', userId],
    queryFn: async () => {
        if (!userId) return [];
      
        try {
          let thread;
          try {
            thread = mastraClient.getMemoryThread(userId, 'opayAgent');
            await thread.getMessages();
          } catch (err) {
            return [];
          }
      
          const { messages } = await thread.getMessages();
          return messages as Message[];
        } catch (error) {
          console.log("Error loading messages:", error);
          return [];
        }
      },      
  });  
  const [messages, setMessages] = useState<Message[]>(data || []);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  
  useEffect(() => {
    setMessages(data || []);
  }, [data]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSend = async () => {
    if (!input.trim() || isStreaming) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      createdAt: new Date().toISOString(),
      resourceId: userId || '',
      threadId: userId || '',
      type: 'text',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsStreaming(true);

    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      createdAt: new Date().toISOString(),
      resourceId: userId || '',
      threadId: userId || '',
      type: 'text',
    };
    setMessages((prev) => [...prev, assistantMessage]);

    try {
      const agent = mastraClient.getAgent("opayAgent");

      const response = await agent.stream({
        messages: [
          {
            role: "user",
            content: userMessage.content,
          },          
        ],
        threadId: userId,
        resourceId: userId,
        runtimeContext: {
          userId: userId
        }
      });
      console.log(response);

      await response.processDataStream({
        onChunk: async (chunk) => {
          if (chunk.type === 'text-delta') {
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === assistantMessageId
                  ? { ...msg, content: msg.content + chunk.payload.text }
                  : msg
              )
            );
          } else if (chunk.type === 'tool-call') {
            console.log('Tool call detected:', chunk.payload.toolName, chunk.payload.args); 
          }
        },
      });
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error('Failed to get response from AI agent');
      setMessages((prev) => prev.filter((msg) => msg.id !== assistantMessageId));
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="relative w-full lg:w-[350px] h-[550px] lg:h-[400px] flex flex-col bg-background rounded-2xl overflow-hidden p-3 shadow-[0_5px_10px_0_rgba(0,0,0,0.12)]">
      <div className="bg-card p-4 pl-2 flex items-center absolute top-0 left-0 w-full z-[1000]">
        <button>
         <ChevronLeft className='size-9 text-primary-green' />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 size-[45px] rounded-full bg-[#C4FFF6] flex items-center justify-center border-[3px] border-white shadow-[0_5px_10px_0_rgba(0,0,0,0.12)]">
                <Bot className="size-5 text-primary-green" />
          </div>
          <div className="">
            <h1 className="text-lg font-bold text-primary-green font-raleway tracking-[-0.2px]">Opay AI</h1>
            <p className='text-[10px] mt-[-2px] font-medium text-[#202020] font-raleway tracking-[-0.14px]'>Opay Ai Assistant</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pt-[100px] pb-[80px] space-y-4 scrollbar-hide">
        {isLoading && (
          <div className="w-full h-[100vh] flex flex-col justify-center bg-gray-200 px-2 [@media(min-width:375px)]:px-4 rounded-xl">
            <div className={`w-[200px] h-10 rounded-md ml-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md mr-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md ml-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md mr-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md ml-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md mr-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md ml-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md mr-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md ml-auto skeleton mt-3`}></div>
            <div className={`w-[200px] h-10 rounded-md mr-auto skeleton mt-3`}></div>
          </div>
        )}

        {isError && (
          <div className='w-full h-full flex items-center justify-center'>
            <p>Oops, Failed to load messages.</p>
          </div>
        )}

        {!isLoading && !isError && messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
            <Bot className="h-12 w-12 mb-4 opacity-50" />
            <p className="text-lg font-medium font-raleway">Start a conversation</p>
            <p className="text-sm mt-2 font-nunito-sans">Ask me anything about Opay!</p>
          </div>
        )}

        {data && (
          <>
          {messages.filter((m) => m.type === 'text').map((message) => (
          <div
            key={message.id}
            className={`flex font-nunito-sans ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >

            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === 'user'
                  ? 'bg-primary-green text-primary-foreground'
                  : 'bg-[#aef5ea] text-foreground'
              }`}
            >
              <div className="whitespace-pre-wrap break-words">
                <ReactMarkdown>{message.content}</ReactMarkdown>
                {message.content ? null : <div className='size-2 rounded-full bg-primary animate-ping'></div>}
              </div>
            </div>
          </div>
        ))}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-card p-4 py-4 absolute bottom-0 left-0 w-full z-[1000]">
        <div className="flex gap-2 items-end">
          <div className="flex-1 relative">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[40px] max-h-[200px] resize-none pr-12 placeholder:text-xs rounded-md border-0 outline-0 stroke-0 focus:border border-primary-green shadow-none scrollbar-hide"
              disabled={isStreaming}
            />
          </div>
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isStreaming || isLoading}
            size="icon"
            className="size-10 shrink-0 bg-primary-green hover:bg-primary-green/80"
          >
            {isStreaming ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;