
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { customers,dummyMessages } from '@/app/data/dummy';
import { Customer, Message } from '@/app/data/types';

interface ChatContextType {
  selectedCustomer: Customer | null;
  setSelectedCustomer: (customer: Customer) => void;

  customerMessages: Message[];
  addCustomerMessage: (message: Message) => void;

  aiMessages: Message[];
  addAiMessage: (message: Message) => void;

  mobileView: 'inbox' | 'chat' | 'ai';
  setMobileView: (view: 'inbox' | 'chat' | 'ai') => void;

  unreadMap: { [customerId: number]: boolean };
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCustomer, setSelectedCustomerState] = useState<Customer | null>(null);
  const [allMessages, setAllMessages] = useState<{ [key: number]: Message[] }>(dummyMessages);
  const [customerMessages, setCustomerMessages] = useState<Message[]>([]);
  const [aiMessages, setAiMessages] = useState<Message[]>([]);
  const [mobileView, setMobileView] = useState<'inbox' | 'chat' | 'ai'>('inbox');
  // const [unreadMap, setUnreadMap] = useState<{ [customerId: number]: boolean }>({ 1: true, 2: true, 3: true,4: true });
  const initialUnreadMap = Object.fromEntries(customers.map(c => [c.id, true]));
const [unreadMap, setUnreadMap] = useState<{ [customerId: number]: boolean }>(initialUnreadMap);

  const setSelectedCustomer = (customer: Customer) => {
    setSelectedCustomerState(customer);
    setCustomerMessages(allMessages[customer.id] || []);
    setUnreadMap((prev) => ({ ...prev, [customer.id]: false }));
  };

  const addCustomerMessage = (message: Message) => {
    if (!selectedCustomer) return;
    const updatedMessages = [...(allMessages[selectedCustomer.id] || []), message];
    setAllMessages((prev) => ({ ...prev, [selectedCustomer.id]: updatedMessages }));
    setCustomerMessages(updatedMessages);
  };

  const addAiMessage = (message: Message) => {
    setAiMessages((prev) => [...prev, message]);
  };

  return (
    <ChatContext.Provider
      value={{
        selectedCustomer,
        setSelectedCustomer,
        customerMessages,
        addCustomerMessage,
        aiMessages,
        addAiMessage,
        mobileView,
        setMobileView,
        unreadMap,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within ChatProvider');
  return context;
};

