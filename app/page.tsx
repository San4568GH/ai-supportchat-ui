
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FullChatLayout from './components/layout/FullChatLayout';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (!isAdmin) {
      router.push('/login');
    } else {
      setIsAuthorized(true);
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) return <div className="h-screen flex items-center justify-center text-lg">Loading...</div>;

  return isAuthorized ? <FullChatLayout /> : null;
}
