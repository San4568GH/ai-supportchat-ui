
'use client';
import { useState } from 'react';
import { useChat } from '@/app/context/ChatContext';

export default function ChatInput() {
  const [input, setInput] = useState('');
  const { addCustomerMessage } = useChat();

  const handleSend = () => {
    if (input.trim()) {
      addCustomerMessage({
        from: 'agent',
        text: input,
        time: new Date().toLocaleTimeString(),
      });
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
    <div className="p-4 border-t bg-gray-50 flex">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 p-2 border border-gray-300 rounded bg-white text-gray-800"
        placeholder="Type your message to customer..."
      />
      <button
        onClick={handleSend}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-105 transition-transform "
      >
        Send
      </button>
    </div>
  );
}
