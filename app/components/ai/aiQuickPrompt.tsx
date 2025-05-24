
'use client';
import { useChat } from '@/app/context/ChatContext';

const prompts = [
  'Summarize this chat',
  'Suggest a response',
  'Detect sentiment',
  'Ask for more details',
];

export default function AIQuickPrompt() {
  const { addAiMessage } = useChat();

  const handleClick = (prompt: string) => {
    const now = new Date().toLocaleTimeString();
    addAiMessage({ from: 'agent', text: prompt, time: now });

    setTimeout(() => {
      addAiMessage({ from: 'ai', text: `Simulated response for: "${prompt}"`, time: new Date().toLocaleTimeString() });
    }, 1000);
  };

  return (
    
    <div className="p-2 border-b bg-purple-50 border-purple-200 ">
      {/* <h4 className="text-sm mb-2 text-purple-600">Quick Prompts</h4> */}
      <div className="flex flex-wrap gap-2">
        {prompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(p)}
            className="px-3 py-1 text-sm rounded-full border border-purple-300 text-purple-700 hover:bg-purple-200 hover:scale-105 transition-transform bg-purple-100"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
