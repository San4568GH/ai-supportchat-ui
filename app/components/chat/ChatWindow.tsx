
'use client';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { useChat } from '@/app/context/ChatContext';

export default function ChatWindow() {
  const { selectedCustomer, customerMessages } = useChat();

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 border-b bg-gray-50">
        <div className="text-lg font-bold text-gray-800">
          {selectedCustomer ? selectedCustomer.name : 'Customer Chat'}
        </div>
        <div className="text-sm text-gray-500">
          {selectedCustomer?.lastMessage}
        </div>
      </div>

      <MessageList messages={customerMessages} />
      <ChatInput />
    </div>
  );
}


