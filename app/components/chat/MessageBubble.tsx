
'use client';
import { Message } from '@/app/data/types';
import { motion } from 'framer-motion';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isAgent = message.from === 'agent';
  const isAI = message.from === 'ai';

  const containerClass = isAgent ? 'self-end items-end' : 'self-start items-start';
  const bubbleClass = `
    max-w-xs px-4 py-2 rounded-lg text-sm
    ${isAgent ? 'bg-blue-600 text-white' : isAI ? 'bg-green-100 text-black' : 'bg-gray-200 text-black'}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex flex-col ${containerClass} mb-2`}
    >
      <div className={bubbleClass}>
        {message.text}
      </div>
      <span className="text-xs text-gray-400 mt-1">{message.time}</span>
    </motion.div>
  );
}
