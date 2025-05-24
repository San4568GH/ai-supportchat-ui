
'use client';
import InboxList from '../inbox/InboxList';
import ChatWindow from '../chat/ChatWindow';
import AIWindow from '../ai/aiWindow';
import { useChat } from '@/app/context/ChatContext';
import { FaComments, FaUserFriends, FaRobot } from 'react-icons/fa';

export default function FullChatLayout() {
  const { mobileView, setMobileView } = useChat();

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-gray-100">
      {/*Desktop View */}
      <div className="hidden md:flex w-full h-full">
        {/* Left Sidebar: Inbox */}
        <div className="w-1/4 border-r bg-white overflow-y-auto shadow-inner min-w-[250px]">
          <InboxList />
        </div>

        {/* Middle: Customer Chat */}
        <div className="w-2/4 border-r bg-white overflow-y-auto min-w-0 shadow-inner">
          <ChatWindow />
        </div>

        {/* Right Sidebar: AI Chat */}
        <div className="w-1/4 bg-gradient-to-br from-purple-50 to-purple-100 overflow-y-auto shadow-inner min-w-[250px]">
          <AIWindow />
        </div>
      </div>

      {/*Mobile View */}
      <div className="flex md:hidden flex-col h-full w-full overflow-hidden">
        <div className="flex-1 overflow-y-auto bg-white shadow-md rounded-t-lg">
          {mobileView === 'inbox' && <InboxList />}
          {mobileView === 'chat' && <ChatWindow />}
          {mobileView === 'ai' && <AIWindow />}
        </div>

        {/* Bottom Navigation Tabs */}
        <div className="flex justify-around border-t bg-white p-2 shadow-inner text-gray-700">
          <button onClick={() => setMobileView('inbox')} className={`flex flex-col items-center ${mobileView === 'inbox' ? 'text-blue-600' : ''}`}>
            <FaUserFriends size={20} />
            <span className="text-xs">Inbox</span>
          </button>
          <button onClick={() => setMobileView('chat')} className={`flex flex-col items-center ${mobileView === 'chat' ? 'text-blue-600' : ''}`}>
            <FaComments size={20} />
            <span className="text-xs">Chat</span>
          </button>
          <button onClick={() => setMobileView('ai')} className={`flex flex-col items-center ${mobileView === 'ai' ? 'text-blue-600' : ''}`}>
            <FaRobot size={20} />
            <span className="text-xs">AI</span>
          </button>
        </div>
      </div>
    </div>
  );
}
