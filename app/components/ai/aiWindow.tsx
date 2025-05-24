
'use client';
import { useChat } from '@/app/context/ChatContext';
import MessageBubble from '../chat/MessageBubble';
import AIInput from './aiInput';
import AIQuickPrompt from './aiQuickPrompt';

export default function AIWindow() {
  const { aiMessages } = useChat();

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-white rounded-md border-l border-gray-200">
      <div className="p-4 border-b text-lg font-bold text-purple-700 bg-purple-100 rounded-t-md">
        AI Assistant
      </div>

      <AIQuickPrompt /> {/* rendering quick prompts */}

      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-2">
          {aiMessages.map((msg, idx) => (
            <MessageBubble key={idx} message={msg} />
          ))}
        </div>
        <AIInput />
      </div>
    </div>
  );
}

