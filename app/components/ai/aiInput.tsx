
'use client';
import { useState } from 'react';
import { useChat } from '@/app/context/ChatContext';

export default function AIInput() {
  const [input, setInput] = useState('');
  const { addAiMessage } = useChat();

  const handleSend = () => {
    if (input.trim()) {
      const now = new Date().toLocaleTimeString();
      addAiMessage({ from: 'agent', text: input, time: now });

      // Simulated AI response
      setTimeout(() => {
        addAiMessage({ from: 'ai', text: 'Hello, how can I help you?', time: new Date().toLocaleTimeString() });
      }, 1000);

      setInput('');
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    
    <div className="p-4 border-t bg-purple-50 flex">
        
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 p-2 border border-purple-200 rounded bg-white text-gray-800"
        placeholder="Ask AI something..."
      />
      <button onClick={handleSend} className="ml-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 hover:scale-105 transition-transform ">
        Send
      </button>
    </div>
  );
}
