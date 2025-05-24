import './globals.css';
import { ChatProvider } from './context/ChatContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Support Chat',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}
