
'use client';
import { customers } from '@/app/data/dummy';
import { useChat } from '@/app/context/ChatContext';

export default function InboxList() {
  const { setSelectedCustomer, selectedCustomer, setMobileView, unreadMap } = useChat();

  return (
    <div className="p-4 space-y-2">
      <h2 className="p-4 border-b text-xl font-semibold bg-white text-gray-900">Inbox</h2>
      {customers.map((customer) => {
        const isSelected = selectedCustomer?.id === customer.id;
        const isUnread = unreadMap[customer.id];

        return (
          <div
            key={customer.id}
            className={`flex items-start justify-between p-4 border rounded-lg bg-white hover:bg-gray-50 cursor-pointer hover:scale-105 transition-transform ${
              isSelected ? 'border-blue-400' : 'border-gray-200'
            }`}
            onClick={() => {
              setSelectedCustomer(customer);
              setMobileView('chat');
            }}
          >
            <div>
              <p className="font-semibold text-gray-800">{customer.name}</p>
              <p className="text-sm text-gray-500 truncate max-w-[180px]">{customer.lastMessage}</p>
            </div>
            {isUnread && <span className="mt-1 ml-2 h-3 w-3 rounded-full bg-red-500" />}
          </div>
        );
      })}
    </div>
  );
}

