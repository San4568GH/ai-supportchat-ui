
'use client';
import { Message } from '@/app/data/types';
import MessageBubble from './MessageBubble';

interface MessageListProps {
  messages: Message[];
}


export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-2">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}
    </div>
  );
}


