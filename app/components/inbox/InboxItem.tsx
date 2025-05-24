
'use client';
import { Customer } from '@/app/data/types';
import { useChat } from '@/app/context/ChatContext';

interface InboxItemProps {
  customer: Customer;
}

export default function InboxItem({ customer }: InboxItemProps) {
  const { setSelectedCustomer, selectedCustomer, setMobileView } = useChat();

  const isSelected = selectedCustomer?.id === customer.id;

  return (
    <div
      onClick={() => {
        setSelectedCustomer(customer);
        setMobileView('chat');
      }}
      className={`p-4 cursor-pointer border-b ${
        isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
      }`}
    >
      <h4 className="font-semibold text-gray-800">{customer.name}</h4>
      <p className="text-sm text-gray-500 truncate">{customer.lastMessage}</p>
    </div>
  );
}
