'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'Admin' && password === 'Password123') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-center px-4">
      {/* Brand Header */}
      <h1 className="text-4xl font-extrabold text-purple-600 mb-6 tracking-wide drop-shadow-sm">
        Welcome, to ChatBot
      </h1>
      <div className="text-purple-800 font-light">
        For Demo: &apos;Admin&apos; , &apos;Password123&apos;
         {/* %apos is MANDATORY to remove Apostrophe Erros in Build version */}
      </div>

      {/* Login Box */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign in</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
        />

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-2 rounded-md shadow-md"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
